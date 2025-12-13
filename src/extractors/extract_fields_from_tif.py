#!/usr/bin/env python3
"""
Extract Crop Fields from CDL TIF
=================================
Extracts crop field polygons from raw CDL classification data
and converts to GeoJSON for database import.

Requirements:
    pip install rasterio shapely fiona numpy pillow --break-system-packages

Usage:
    python 2_extract_fields_from_tif.py input.tif output.geojson --min-pixels 100

This will:
1. Read the raw CDL classification TIF
2. Find contiguous crop regions
3. Vectorize them into polygons
4. Output GeoJSON with crop properties
"""

import sys
import json
import argparse
from pathlib import Path

try:
    import rasterio
    from rasterio.features import shapes
    from shapely.geometry import shape, mapping
    import numpy as np
except ImportError:
    print("❌ Missing dependencies. Install with:")
    print("   pip install rasterio shapely fiona numpy --break-system-packages")
    sys.exit(1)

# CDL crop code mapping
CDL_CROP_MAP = {
    1: {"name": "Corn", "emoji": "🌽"},
    2: {"name": "Cotton", "emoji": "☁️"},
    3: {"name": "Rice", "emoji": "🌾"},
    4: {"name": "Sorghum", "emoji": "🌾"},
    5: {"name": "Soybeans", "emoji": "🫘"},
    6: {"name": "Sunflower", "emoji": "🌻"},
    21: {"name": "Barley", "emoji": "🌾"},
    22: {"name": "Durum Wheat", "emoji": "🌾"},
    24: {"name": "Winter Wheat", "emoji": "🌾"},
    36: {"name": "Alfalfa", "emoji": "🌱"},
    37: {"name": "Other Hay", "emoji": "🌾"},
    43: {"name": "Potatoes", "emoji": "🥔"},
    49: {"name": "Onions", "emoji": "🧅"},
    54: {"name": "Tomatoes", "emoji": "🍅"},
    61: {"name": "Fallow", "emoji": "🟤"},
    66: {"name": "Cherries", "emoji": "🍒"},
    69: {"name": "Grapes", "emoji": "🍇"},
    72: {"name": "Citrus", "emoji": "🍊"},
    75: {"name": "Almonds", "emoji": "🌰"},
    76: {"name": "Walnuts", "emoji": "🌰"},
    204: {"name": "Pistachios", "emoji": "🥜"},
    206: {"name": "Carrots", "emoji": "🥕"},
    211: {"name": "Olives", "emoji": "🫒"},
    217: {"name": "Pomegranates", "emoji": "🍎"},
    227: {"name": "Lettuce", "emoji": "🥬"}
}

def extract_fields(tif_path, output_path, min_pixels=100, max_fields=500):
    """Extract crop field polygons from CDL TIF"""
    
    print(f"\n{'='*60}")
    print(f"🌾 Extracting Crop Fields from CDL Data")
    print(f"{'='*60}\n")
    
    print(f"📂 Input: {tif_path}")
    print(f"💾 Output: {output_path}")
    print(f"🔍 Min field size: {min_pixels} pixels (~{min_pixels * 900 / 4047:.1f} acres)")
    print(f"📊 Max fields: {max_fields}\n")
    
    # Open raster
    with rasterio.open(tif_path) as src:
        print(f"✓ Opened raster")
        print(f"  Size: {src.width} x {src.height}")
        print(f"  CRS: {src.crs}")
        print(f"  Bounds: {src.bounds}")
        
        # Read data
        data = src.read(1)
        print(f"\n✓ Read raster data")
        print(f"  Unique values: {len(np.unique(data))}")
        
        # Get agricultural codes only (exclude water, developed, forest, etc.)
        exclude_codes = [0, 63, 64, 65, 81, 82, 83, 87, 88, 111, 112, 
                        121, 122, 123, 124, 131, 141, 142, 143, 152, 
                        176, 190, 195, 255]
        
        ag_codes = [code for code in np.unique(data) 
                   if code not in exclude_codes and code > 0]
        
        print(f"  Agricultural codes: {len(ag_codes)}")
        
        # Extract shapes for each crop type
        features = []
        field_id = 1
        
        print(f"\n🔄 Extracting field polygons...\n")
        
        for crop_code in ag_codes:
            # Create mask for this crop
            mask = (data == crop_code).astype(np.uint8)
            
            # Extract shapes
            geoms = list(shapes(mask, mask=mask, transform=src.transform))
            
            crop_info = CDL_CROP_MAP.get(crop_code, {"name": f"Crop_{crop_code}", "emoji": "🌱"})
            
            # Filter by size and convert to features
            for geom, value in geoms:
                if value == 1:  # Only get crop pixels (not background)
                    poly = shape(geom)
                    
                    # Calculate area in pixels
                    pixel_area = poly.area / (30 * 30)  # 30m pixels
                    
                    if pixel_area >= min_pixels:
                        # Convert to WGS84 for web use
                        acres = pixel_area * 900 / 4047  # 30m pixels to acres
                        
                        feature = {
                            "type": "Feature",
                            "properties": {
                                "id": f"field_{field_id:05d}",
                                "cdl_code": int(crop_code),
                                "crop": crop_info["name"],
                                "emoji": crop_info["emoji"],
                                "acres": int(acres),
                                "pixels": int(pixel_area)
                            },
                            "geometry": mapping(poly)
                        }
                        
                        features.append(feature)
                        field_id += 1
                        
                        if field_id > max_fields:
                            print(f"⚠️  Reached max fields limit ({max_fields})")
                            break
            
            if field_id > max_fields:
                break
            
            print(f"  ✓ {crop_info['name']:20s} ({crop_code:3d}): {len([f for f in features if f['properties']['cdl_code'] == crop_code])} fields")
        
        # Create GeoJSON
        geojson = {
            "type": "FeatureCollection",
            "crs": {
                "type": "name",
                "properties": {"name": str(src.crs)}
            },
            "features": features
        }
        
        # Save
        output_path = Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_path, 'w') as f:
            json.dump(geojson, f, indent=2)
        
        print(f"\n{'='*60}")
        print(f"✅ SUCCESS!")
        print(f"   Extracted {len(features)} crop fields")
        print(f"   Saved to: {output_path}")
        print(f"   File size: {output_path.stat().st_size / 1024:.1f} KB")
        print(f"{'='*60}\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract crop fields from CDL TIF")
    parser.add_argument("input_tif", help="Input CDL TIF file")
    parser.add_argument("output_geojson", help="Output GeoJSON file")
    parser.add_argument("--min-pixels", type=int, default=100, 
                       help="Minimum field size in pixels (default: 100)")
    parser.add_argument("--max-fields", type=int, default=500,
                       help="Maximum number of fields to extract (default: 500)")
    
    args = parser.parse_args()
    
    extract_fields(args.input_tif, args.output_geojson, 
                  args.min_pixels, args.max_fields)