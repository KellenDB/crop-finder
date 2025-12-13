/**
 * CropFinder API Server (Simplified - No PostGIS)
 * ===============================================
 * Works with simplified PostgreSQL database using centroid-based queries
 * 
 * Usage:
 *   node api_server_simple.js
 */

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'cropfinder',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'cropfinder123',
  max: 20
});

// Middleware
app.use(cors());
app.use(express.json());

// Haversine distance calculation in SQL
const distanceFormula = (lon, lat) => `
  6371000 * acos(
    cos(radians(${lat})) * 
    cos(radians(centroid_lat)) * 
    cos(radians(centroid_lon) - radians(${lon})) + 
    sin(radians(${lat})) * 
    sin(radians(centroid_lat))
  )
`;

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * GET /api/crops/nearby
 * Find crops near a GPS location using centroid distance
 */
app.get('/api/crops/nearby', async (req, res) => {
  try {
    const { lat, lon, radius = 50000 } = req.query;
    
    if (!lat || !lon) {
      return res.status(400).json({ 
        error: 'Missing required parameters: lat, lon' 
      });
    }
    
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);
    const radiusMeters = parseInt(radius);
    
    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: 'Invalid coordinates' });
    }
    
    // Query using centroid distance
    const query = `
      SELECT 
        field_id,
        cdl_code,
        crop_name,
        emoji,
        acres,
        centroid_lon,
        centroid_lat,
        geometry_json,
        ${distanceFormula(longitude, latitude)} as distance_meters
      FROM crop_fields
      WHERE ${distanceFormula(longitude, latitude)} <= $1
      ORDER BY distance_meters
      LIMIT 100
    `;
    
    const result = await pool.query(query, [radiusMeters]);
    
    const features = result.rows.map(row => ({
      type: 'Feature',
      properties: {
        id: row.field_id,
        cdl_code: row.cdl_code,
        crop: row.crop_name,
        emoji: row.emoji,
        acres: row.acres,
        distance_meters: Math.round(row.distance_meters)
      },
      geometry: JSON.parse(row.geometry_json)
    }));
    
    res.json({
      type: 'FeatureCollection',
      features,
      metadata: {
        count: features.length,
        center: { lat: latitude, lon: longitude },
        radius: radiusMeters
      }
    });
    
  } catch (error) {
    console.error('Error in /api/crops/nearby:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

/**
 * GET /api/crops/bounds
 * Find crops within a bounding box using centroid
 */
app.get('/api/crops/bounds', async (req, res) => {
  try {
    const { minLat, maxLat, minLon, maxLon } = req.query;
    
    if (!minLat || !maxLat || !minLon || !maxLon) {
      return res.status(400).json({ 
        error: 'Missing required parameters: minLat, maxLat, minLon, maxLon' 
      });
    }
    
    const query = `
      SELECT 
        field_id,
        cdl_code,
        crop_name,
        emoji,
        acres,
        centroid_lon,
        centroid_lat,
        geometry_json
      FROM crop_fields
      WHERE centroid_lon BETWEEN $1 AND $2
        AND centroid_lat BETWEEN $3 AND $4
      LIMIT 200
    `;
    
    const result = await pool.query(query, [
      parseFloat(minLon),
      parseFloat(maxLon),
      parseFloat(minLat),
      parseFloat(maxLat)
    ]);
    
    const features = result.rows.map(row => ({
      type: 'Feature',
      properties: {
        id: row.field_id,
        cdl_code: row.cdl_code,
        crop: row.crop_name,
        emoji: row.emoji,
        acres: row.acres
      },
      geometry: JSON.parse(row.geometry_json)
    }));
    
    res.json({
      type: 'FeatureCollection',
      features,
      metadata: {
        count: features.length,
        bounds: { minLat, maxLat, minLon, maxLon }
      }
    });
    
  } catch (error) {
    console.error('Error in /api/crops/bounds:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/crops/:fieldId
 * Get details for a specific field
 */
app.get('/api/crops/:fieldId', async (req, res) => {
  try {
    const { fieldId } = req.params;
    
    const query = `
      SELECT 
        field_id,
        cdl_code,
        crop_name,
        emoji,
        acres,
        pixels,
        centroid_lon,
        centroid_lat,
        geometry_json,
        created_at
      FROM crop_fields
      WHERE field_id = $1
    `;
    
    const result = await pool.query(query, [fieldId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Field not found' });
    }
    
    const row = result.rows[0];
    
    res.json({
      type: 'Feature',
      properties: {
        id: row.field_id,
        cdl_code: row.cdl_code,
        crop: row.crop_name,
        emoji: row.emoji,
        acres: row.acres,
        pixels: row.pixels,
        centroid: [row.centroid_lon, row.centroid_lat],
        created_at: row.created_at
      },
      geometry: JSON.parse(row.geometry_json)
    });
    
  } catch (error) {
    console.error('Error in /api/crops/:fieldId:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/stats
 * Get database statistics
 */
app.get('/api/stats', async (req, res) => {
  try {
    const totalQuery = 'SELECT COUNT(*) as total FROM crop_fields';
    const cropsQuery = `
      SELECT crop_name, COUNT(*) as count 
      FROM crop_fields 
      GROUP BY crop_name 
      ORDER BY count DESC 
      LIMIT 10
    `;
    
    const [totalResult, cropsResult] = await Promise.all([
      pool.query(totalQuery),
      pool.query(cropsQuery)
    ]);
    
    res.json({
      total_fields: parseInt(totalResult.rows[0].total),
      top_crops: cropsResult.rows.map(row => ({
        crop: row.crop_name,
        count: parseInt(row.count)
      }))
    });
    
  } catch (error) {
    console.error('Error in /api/stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🌾 CropFinder API Server (Simplified)`);
  console.log(`${'='.repeat(60)}\n`);
  console.log(`✓ Server running on http://localhost:${port}`);
  console.log(`✓ Database: ${process.env.DB_NAME || 'cropfinder'}`);
  console.log(`✓ Mode: Centroid-based queries (no PostGIS)`);
  console.log(`\n📡 Endpoints:`);
  console.log(`   GET /health`);
  console.log(`   GET /api/crops/nearby?lat=35.5&lon=-119.2&radius=50000`);
  console.log(`   GET /api/crops/bounds?minLat=35&maxLat=36&minLon=-120&maxLon=-119`);
  console.log(`   GET /api/crops/:fieldId`);
  console.log(`   GET /api/stats`);
  console.log(`\n${'='.repeat(60)}\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down gracefully...');
  pool.end(() => {
    process.exit(0);
  });
});