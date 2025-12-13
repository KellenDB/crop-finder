#!/usr/bin/env python3
"""
Extract Crop Fields from CDL TIF (WITH COORDINATE CONVERSION)
=============================================================
Extracts crop field polygons and converts from EPSG:5070 to WGS84 (lat/lon)

Requirements:
    pip install rasterio shapely fiona pyproj --break-system-packages

Usage:
    python extract_fields_wgs84.py input.tif output.geojson --max-fields 500
"""

import sys
import json
import argparse
from pathlib import Path

try:
    import rasterio
    from rasterio.features import shapes
    from shapely.geometry import shape, mapping
    from shapely.ops import transform
    from pyproj import Transformer
    import numpy as np
except ImportError:
    print("❌ Missing dependencies. Install with:")
    print("   pip install rasterio shapely fiona pyproj --break-system-packages")
    sys.exit(1)

# CDL crop code mapping
CDL_CROP_MAP = {
    1: {"name": "Corn", "emoji": "🌽"},
    2: {"name": "Cotton", "emoji": "☁️"},
    3: {"name": "Rice", "emoji": "🌾"},
    4: {"name": "Sorghum", "emoji": "🌾"},
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
    """Extract crop field polygons with WGS84 coordinates"""
    
    print(f"\n{'='*60}")
    print(f"🌾 Extracting Crop Fields (Converting to WGS84)")
    print(f"{'='*60}\n")
    
    print(f"📂 Input: {tif_path}")
    print(f"💾 Output: {output_path}")
    print(f"🔍 Min field size: {min_pixels} pixels")
    print(f"📊 Max fields: {max_fields}\n")
    
    with rasterio.open(tif_path) as src:
        print(f"✓ Opened raster")
        print(f"  Size: {src.width} x {src.height}")
        print(f"  CRS: {src.crs}")
        
        # Create coordinate transformer: EPSG:5070 → WGS84
        transformer = Transformer.from_crs(
            src.crs,
            "EPSG:4326",  # WGS84
            always_xy=True
        )
        
        print(f"  Converting: {src.crs} → EPSG:4326 (WGS84)\n")
        
        # Read data
        data = src.read(1)
        
        # Exclude non-agricultural codes
        exclude_codes = [0, 63, 64, 65, 81, 82, 83, 87, 88, 111, 112, 
                        121, 122, 123, 124, 131, 141, 142, 143, 152, 
                        176, 190, 195, 255]
        
        ag_codes = [code for code in np.unique(data) 
                   if code not in exclude_codes and code > 0]
        
        print(f"🔄 Extracting {len(ag_codes)} crop types...\n")
        
        features = []
        field_id = 1
        
        for crop_code in ag_codes:
            mask = (data == crop_code).astype(np.uint8)
            geoms = list(shapes(mask, mask=mask, transform=src.transform))
            
            crop_info = CDL_CROP_MAP.get(
                crop_code, 
                {"name": f"Crop_{crop_code}", "emoji": "🌱"}
            )
            
            for geom, value in geoms:
                if value == 1:
                    poly = shape(geom)
                    pixel_area = poly.area / (30 * 30)
                    
                    if pixel_area >= min_pixels:
                        # CONVERT TO WGS84!
                        poly_wgs84 = transform(transformer.transform, poly)
                        acres = pixel_area * 900 / 4047
                        
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
                            "geometry": mapping(poly_wgs84)
                        }
                        
                        features.append(feature)
                        field_id += 1
                        
                        if field_id > max_fields:
                            break
            
            if field_id > max_fields:
                break
            
            count = len([f for f in features if f['properties']['cdl_code'] == crop_code])
            if count > 0:
                print(f"  ✓ {crop_info['name']:20s} ({crop_code:3d}): {count} fields")
        
        # Create GeoJSON with WGS84
        geojson = {
            "type": "FeatureCollection",
            "crs": {
                "type": "name",
                "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}
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
        print(f"   Extracted {len(features)} fields")
        print(f"   Coordinates: WGS84 (lat/lon)")
        print(f"   Saved to: {output_path}")
        print(f"{'='*60}\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("input_tif", help="Input CDL TIF file")
    parser.add_argument("output_geojson", help="Output GeoJSON file")
    parser.add_argument("--min-pixels", type=int, default=100)
    parser.add_argument("--max-fields", type=int, default=500)
    
    args = parser.parse_args()
    extract_fields(args.input_tif, args.output_geojson, 
                  args.min_pixels, args.max_fields)