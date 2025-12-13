#!/usr/bin/env python3
"""
Load Crop Fields into PostgreSQL (No PostGIS Required)
======================================================
Simplified version that stores geometry as JSON text.
Perfect for development without PostGIS.

Requirements:
    pip install psycopg2-binary --break-system-packages

Usage:
    python load_to_postgres_simple.py fields.geojson --db cropfinder
"""

import sys
import json
import argparse
from pathlib import Path
from math import radians, cos, sin, asin, sqrt

try:
    import psycopg2
    from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
except ImportError:
    print("❌ Missing dependencies. Install with:")
    print("   pip install psycopg2-binary --break-system-packages")
    sys.exit(1)

def haversine(lon1, lat1, lon2, lat2):
    """Calculate distance between two points in meters"""
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a))
    r = 6371000  # Radius of earth in meters
    return c * r

def polygon_centroid(coordinates):
    """Calculate centroid of a polygon"""
    coords = coordinates[0] if coordinates else []
    if not coords:
        return None, None
    
    x = sum(c[0] for c in coords) / len(coords)
    y = sum(c[1] for c in coords) / len(coords)
    return x, y

def create_database(host, port, user, password, dbname):
    """Create database if it doesn't exist"""
    try:
        conn = psycopg2.connect(
            host=host, port=port, user=user, password=password, database='postgres'
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = conn.cursor()
        
        cur.execute(f"SELECT 1 FROM pg_database WHERE datname = '{dbname}'")
        if not cur.fetchone():
            print(f"📦 Creating database '{dbname}'...")
            cur.execute(f"CREATE DATABASE {dbname}")
            print(f"✓ Database created")
        else:
            print(f"✓ Database '{dbname}' already exists")
        
        cur.close()
        conn.close()
        return True
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

def create_table(conn):
    """Create crop_fields table"""
    try:
        cur = conn.cursor()
        print(f"📋 Creating crop_fields table...")
        
        cur.execute("DROP TABLE IF EXISTS crop_fields CASCADE")
        cur.execute("""
            CREATE TABLE crop_fields (
                id SERIAL PRIMARY KEY,
                field_id VARCHAR(50) UNIQUE NOT NULL,
                cdl_code INTEGER NOT NULL,
                crop_name VARCHAR(100) NOT NULL,
                emoji VARCHAR(10),
                acres INTEGER,
                pixels INTEGER,
                centroid_lon FLOAT,
                centroid_lat FLOAT,
                geometry_json TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        cur.execute("CREATE INDEX idx_crop_fields_crop ON crop_fields (crop_name)")
        cur.execute("CREATE INDEX idx_crop_fields_centroid ON crop_fields (centroid_lon, centroid_lat)")
        
        conn.commit()
        print(f"✓ Table and indexes created")
        cur.close()
        return True
    except Exception as e:
        print(f"❌ Error: {e}")
        conn.rollback()
        return False

def load_geojson(conn, geojson_path):
    """Load GeoJSON features"""
    try:
        print(f"\n📂 Loading: {geojson_path}")
        with open(geojson_path, 'r') as f:
            data = json.load(f)
        
        features = data['features']
        print(f"   Found {len(features)} features\n")
        
        cur = conn.cursor()
        print(f"🔄 Inserting records...")
        
        inserted = 0
        for i, feature in enumerate(features):
            props = feature['properties']
            geom = feature['geometry']
            
            # Calculate centroid
            lon, lat = polygon_centroid(geom['coordinates'])
            
            try:
                cur.execute("""
                    INSERT INTO crop_fields 
                    (field_id, cdl_code, crop_name, emoji, acres, pixels, 
                     centroid_lon, centroid_lat, geometry_json)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    props['id'], props['cdl_code'], props['crop'],
                    props['emoji'], props.get('acres'), props.get('pixels'),
                    lon, lat, json.dumps(geom)
                ))
                
                inserted += 1
                if (i + 1) % 100 == 0:
                    print(f"   Inserted {i + 1}/{len(features)}...")
                    conn.commit()
            except Exception as e:
                if "duplicate key" not in str(e):
                    print(f"   ⚠️  Skipped {props['id']}: {e}")
        
        conn.commit()
        cur.close()
        print(f"\n✓ Completed - Inserted {inserted} fields")
        return True
    except Exception as e:
        print(f"❌ Error: {e}")
        conn.rollback()
        return False

def verify_data(conn):
    """Verify loaded data"""
    try:
        cur = conn.cursor()
        print(f"\n📊 Verifying data...")
        
        cur.execute("SELECT COUNT(*) FROM crop_fields")
        print(f"   Total fields: {cur.fetchone()[0]}")
        
        cur.execute("""
            SELECT crop_name, COUNT(*) 
            FROM crop_fields 
            GROUP BY crop_name 
            ORDER BY COUNT(*) DESC 
            LIMIT 10
        """)
        print(f"\n   Top crops:")
        for row in cur.fetchall():
            print(f"      {row[0]:20s}: {row[1]:5d}")
        
        # Test proximity query (Kern County center)
        test_lon, test_lat = -119.0, 35.5
        cur.execute("""
            SELECT field_id, crop_name, acres,
                   centroid_lon, centroid_lat
            FROM crop_fields
            LIMIT 5
        """)
        
        print(f"\n   Sample fields:")
        for row in cur.fetchall():
            dist = haversine(test_lon, test_lat, row[3], row[4])
            print(f"      {row[0]}: {row[1]:15s} ({row[2]} acres, {dist/1000:.1f}km away)")
        
        cur.close()
        return True
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

def main(geojson_path, host, port, user, password, dbname):
    print(f"\n{'='*60}")
    print(f"🗄️  Loading Crop Fields into PostgreSQL")
    print(f"{'='*60}\n")
    
    if not create_database(host, port, user, password, dbname):
        return False
    
    try:
        print(f"\n🔌 Connecting to '{dbname}'...")
        conn = psycopg2.connect(
            host=host, port=port, user=user, password=password, database=dbname
        )
        print(f"✓ Connected")
    except Exception as e:
        print(f"❌ Failed: {e}")
        return False
    
    if not create_table(conn):
        conn.close()
        return False
    
    if not load_geojson(conn, geojson_path):
        conn.close()
        return False
    
    if not verify_data(conn):
        conn.close()
        return False
    
    conn.close()
    
    print(f"\n{'='*60}")
    print(f"✅ SUCCESS! Database ready")
    print(f"{'='*60}\n")
    return True

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("geojson", help="Input GeoJSON file")
    parser.add_argument("--host", default="localhost")
    parser.add_argument("--port", type=int, default=5432)
    parser.add_argument("--user", default="postgres")
    parser.add_argument("--password", default="")
    parser.add_argument("--db", default="cropfinder")
    args = parser.parse_args()
    
    success = main(args.geojson, args.host, args.port, args.user, args.password, args.db)
    sys.exit(0 if success else 1)