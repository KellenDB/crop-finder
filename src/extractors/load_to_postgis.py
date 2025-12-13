#!/usr/bin/env python3
"""
Load Crop Fields into PostGIS Database
======================================
Loads GeoJSON crop field data into a PostGIS spatial database.

Requirements:
    pip install psycopg2-binary --break-system-packages
    # Install PostgreSQL + PostGIS first

Usage:
    python3 load_to_postgis.py fields.geojson --db cropfinder --user postgres

This will:
1. Create PostGIS database (if needed)
2. Create crop_fields table
3. Load GeoJSON features
4. Create spatial indexes
"""

import sys
import json
import argparse
from pathlib import Path

try:
    import psycopg2
    from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
except ImportError:
    print("❌ Missing dependencies. Install with:")
    print("   pip install psycopg2-binary --break-system-packages")
    sys.exit(1)

def create_database(host, port, user, password, dbname):
    """Create database if it doesn't exist"""
    try:
        # Connect to default postgres database
        conn = psycopg2.connect(
            host=host,
            port=port,
            user=user,
            password=password,
            database='postgres'
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = conn.cursor()
        
        # Check if database exists
        cur.execute(f"SELECT 1 FROM pg_database WHERE datname = '{dbname}'")
        exists = cur.fetchone()
        
        if not exists:
            print(f"📦 Creating database '{dbname}'...")
            cur.execute(f"CREATE DATABASE {dbname}")
            print(f"✓ Database created")
        else:
            print(f"✓ Database '{dbname}' already exists")
        
        cur.close()
        conn.close()
        return True
        
    except Exception as e:
        print(f"❌ Error creating database: {e}")
        return False

def setup_postgis(conn):
    """Enable PostGIS extension"""
    try:
        cur = conn.cursor()
        
        print(f"🗺️  Setting up PostGIS...")
        cur.execute("CREATE EXTENSION IF NOT EXISTS postgis")
        conn.commit()
        print(f"✓ PostGIS enabled")
        
        cur.close()
        return True
        
    except Exception as e:
        print(f"❌ Error setting up PostGIS: {e}")
        return False

def create_table(conn):
    """Create crop_fields table"""
    try:
        cur = conn.cursor()
        
        print(f"📋 Creating crop_fields table...")
        
        # Drop existing table
        cur.execute("DROP TABLE IF EXISTS crop_fields CASCADE")
        
        # Create new table
        cur.execute("""
            CREATE TABLE crop_fields (
                id SERIAL PRIMARY KEY,
                field_id VARCHAR(50) UNIQUE NOT NULL,
                cdl_code INTEGER NOT NULL,
                crop_name VARCHAR(100) NOT NULL,
                emoji VARCHAR(10),
                acres INTEGER,
                pixels INTEGER,
                geometry GEOMETRY(POLYGON, 4326),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Create spatial index
        cur.execute("""
            CREATE INDEX idx_crop_fields_geometry 
            ON crop_fields USING GIST (geometry)
        """)
        
        # Create crop type index
        cur.execute("""
            CREATE INDEX idx_crop_fields_crop 
            ON crop_fields (crop_name)
        """)
        
        # Create CDL code index
        cur.execute("""
            CREATE INDEX idx_crop_fields_cdl_code 
            ON crop_fields (cdl_code)
        """)
        
        conn.commit()
        print(f"✓ Table and indexes created")
        
        cur.close()
        return True
        
    except Exception as e:
        print(f"❌ Error creating table: {e}")
        conn.rollback()
        return False

def load_geojson(conn, geojson_path):
    """Load GeoJSON features into database"""
    try:
        print(f"\n📂 Loading GeoJSON: {geojson_path}")
        
        with open(geojson_path, 'r') as f:
            data = json.load(f)
        
        features = data['features']
        print(f"   Found {len(features)} features")
        
        cur = conn.cursor()
        
        print(f"\n🔄 Inserting records...")
        
        inserted = 0
        skipped = 0
        
        for i, feature in enumerate(features):
            props = feature['properties']
            geom = feature['geometry']
            
            try:
                # Convert geometry to WKT
                geom_wkt = f"SRID=4326;{json.dumps(geom)}"
                
                cur.execute("""
                    INSERT INTO crop_fields 
                    (field_id, cdl_code, crop_name, emoji, acres, pixels, geometry)
                    VALUES (%s, %s, %s, %s, %s, %s, ST_GeomFromGeoJSON(%s))
                """, (
                    props['id'],
                    props['cdl_code'],
                    props['crop'],
                    props['emoji'],
                    props.get('acres'),
                    props.get('pixels'),
                    json.dumps(geom)
                ))
                
                inserted += 1
                
                if (i + 1) % 100 == 0:
                    print(f"   Inserted {i + 1}/{len(features)} fields...")
                    conn.commit()
                    
            except Exception as e:
                skipped += 1
                if "duplicate key" not in str(e):
                    print(f"   ⚠️  Skipped field {props['id']}: {e}")
        
        conn.commit()
        cur.close()
        
        print(f"\n✓ Completed")
        print(f"  Inserted: {inserted} fields")
        if skipped > 0:
            print(f"  Skipped: {skipped} fields")
        
        return True
        
    except Exception as e:
        print(f"❌ Error loading GeoJSON: {e}")
        conn.rollback()
        return False

def verify_data(conn):
    """Verify loaded data"""
    try:
        cur = conn.cursor()
        
        print(f"\n📊 Verifying data...")
        
        # Total count
        cur.execute("SELECT COUNT(*) FROM crop_fields")
        total = cur.fetchone()[0]
        print(f"   Total fields: {total}")
        
        # By crop type
        cur.execute("""
            SELECT crop_name, COUNT(*) as count 
            FROM crop_fields 
            GROUP BY crop_name 
            ORDER BY count DESC 
            LIMIT 10
        """)
        
        print(f"\n   Top crops:")
        for row in cur.fetchall():
            print(f"      {row[0]:20s}: {row[1]:5d} fields")
        
        # Test spatial query
        cur.execute("""
            SELECT field_id, crop_name, acres 
            FROM crop_fields 
            WHERE ST_Intersects(
                geometry, 
                ST_MakeEnvelope(-119.5, 35.2, -119.0, 35.6, 4326)
            )
            LIMIT 5
        """)
        
        print(f"\n   Sample spatial query (Kern County area):")
        for row in cur.fetchall():
            print(f"      {row[0]}: {row[1]:15s} ({row[2]} acres)")
        
        cur.close()
        return True
        
    except Exception as e:
        print(f"❌ Error verifying data: {e}")
        return False

def main(geojson_path, host, port, user, password, dbname):
    """Main execution"""
    
    print(f"\n{'='*60}")
    print(f"🗄️  Loading Crop Fields into PostGIS")
    print(f"{'='*60}\n")
    
    # Create database
    if not create_database(host, port, user, password, dbname):
        return False
    
    # Connect to database
    try:
        print(f"\n🔌 Connecting to database '{dbname}'...")
        conn = psycopg2.connect(
            host=host,
            port=port,
            user=user,
            password=password,
            database=dbname
        )
        print(f"✓ Connected")
        
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        return False
    
    # Setup and load
    if not setup_postgis(conn):
        conn.close()
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
    print(f"✅ SUCCESS! Database ready for queries")
    print(f"{'='*60}\n")
    
    return True

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Load crop fields into PostGIS")
    parser.add_argument("geojson", help="Input GeoJSON file")
    parser.add_argument("--host", default="localhost", help="Database host")
    parser.add_argument("--port", type=int, default=5432, help="Database port")
    parser.add_argument("--user", default="postgres", help="Database user")
    parser.add_argument("--password", default="", help="Database password")
    parser.add_argument("--db", default="cropfinder", help="Database name")
    
    args = parser.parse_args()
    
    success = main(
        args.geojson,
        args.host,
        args.port,
        args.user,
        args.password,
        args.db
    )
    
    sys.exit(0 if success else 1)