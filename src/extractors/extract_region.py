#!/usr/bin/env python3
"""
Extract Regional Crop Fields for UI Testing
============================================
Extracts a small subset of crop fields from a specific region,
with proper WGS84 coordinate conversion and optional geometry simplification.

Requirements:
    pip install rasterio shapely fiona pyproj numpy --break-system-packages

Usage:
    # Predefined regions with default simplification
    python extract_region.py input.tif output.geojson --region bakersfield --max-fields 30
    
    # Custom bounding box with aggressive simplification
    python extract_region.py input.tif output.geojson --bbox -119.5,35.2,-119.0,35.6 --simplify 0.0005
    
    # No simplification (pixel-perfect boundaries)
    python extract_region.py input.tif output.geojson --region wasco --simplify 0
"""

import sys
import json
import argparse
from pathlib import Path

try:
    import rasterio
    from rasterio.features import shapes
    from shapely.geometry import shape, mapping, box
    from shapely.ops import transform
    from pyproj import Transformer
    import numpy as np
except ImportError:
    print("❌ Missing dependencies. Install with:")
    print("   pip install rasterio shapely fiona pyproj numpy --break-system-packages")
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

# Predefined regions in Kern County (WGS84 coordinates)
REGIONS = {
    "bakersfield": {
        "name": "Bakersfield",
        "bbox": [-119.1, 35.3, -118.9, 35.4]  # [minLon, minLat, maxLon, maxLat]
    },
    "wasco": {
        "name": "Wasco-Shafter",
        "bbox": [-119.45, 35.55, -119.3, 35.65]
    },
    "delano": {
        "name": "Delano",
        "bbox": [-119.3, 35.7, -119.2, 35.8]
    },
    "arvin": {
        "name": "Arvin-Lamont",
        "bbox": [-118.9, 35.1, -118.7, 35.2]
    },
    "lost-hills": {
        "name": "Lost Hills",
        "bbox": [-119.75, 35.55, -119.6, 35.65]
    }
}

def extract_regional_fields(tif_path, output_path, bbox=None, region=None, min_pixels=50, max_fields=50, simplify_tolerance=0.0001):
    """Extract crop fields from a specific region with WGS84 conversion"""
    
    print(f"\n{'='*60}")
    print(f"🌾 Extracting Regional Crop Fields")
    print(f"{'='*60}\n")
    
    # Determine bounding box
    if region:
        if region not in REGIONS:
            print(f"❌ Unknown region: {region}")
            print(f"   Available: {', '.join(REGIONS.keys())}")
            return False
        bbox_wgs84 = REGIONS[region]["bbox"]
        region_name = REGIONS[region]["name"]
        print(f"📍 Region: {region_name}")
    elif bbox:
        bbox_wgs84 = bbox
        region_name = "Custom area"
        print(f"📍 Custom bounding box")
    else:
        bbox_wgs84 = None
        region_name = "Entire dataset"
        print(f"📍 No spatial filter")
    
    if bbox_wgs84:
        print(f"   Bounds: [{bbox_wgs84[0]:.4f}, {bbox_wgs84[1]:.4f}] to [{bbox_wgs84[2]:.4f}, {bbox_wgs84[3]:.4f}]")
    
    print(f"📂 Input: {tif_path}")
    print(f"💾 Output: {output_path}")
    print(f"🔍 Min field size: {min_pixels} pixels (~{min_pixels * 0.22:.1f} acres)")
    print(f"📊 Max fields: {max_fields}")
    if simplify_tolerance > 0:
        print(f"🔧 Simplification: {simplify_tolerance} degrees (~{simplify_tolerance * 111000:.0f}m)")
    print()
    
    with rasterio.open(tif_path) as src:
        print(f"✓ Opened raster")
        print(f"  Size: {src.width} x {src.height}")
        print(f"  CRS: {src.crs}")
        
        # Create coordinate transformers
        transformer_to_wgs84 = Transformer.from_crs(
            src.crs,
            "EPSG:4326",  # WGS84
            always_xy=True
        )
        
        transformer_from_wgs84 = Transformer.from_crs(
            "EPSG:4326",
            src.crs,
            always_xy=True
        )
        
        print(f"  Converting: {src.crs} → EPSG:4326 (WGS84)\n")
        
        # Convert WGS84 bbox to raster CRS if provided
        if bbox_wgs84:
            # Transform bbox corners to raster CRS
            min_x_proj, min_y_proj = transformer_from_wgs84.transform(bbox_wgs84[0], bbox_wgs84[1])
            max_x_proj, max_y_proj = transformer_from_wgs84.transform(bbox_wgs84[2], bbox_wgs84[3])
            bbox_proj = box(min_x_proj, min_y_proj, max_x_proj, max_y_proj)
            print(f"🗺️  Bounding box in raster coordinates:")
            print(f"   [{min_x_proj:.1f}, {min_y_proj:.1f}] to [{max_x_proj:.1f}, {max_y_proj:.1f}]\n")
        else:
            bbox_proj = None
        
        # Read data
        data = src.read(1)
        
        # Exclude non-agricultural codes
        exclude_codes = [0, 63, 64, 65, 81, 82, 83, 87, 88, 111, 112, 
                        121, 122, 123, 124, 131, 141, 142, 143, 152, 
                        176, 190, 195, 255]
        
        ag_codes = [code for code in np.unique(data) 
                   if code not in exclude_codes and code > 0]
        
        print(f"🔄 Extracting from {len(ag_codes)} crop types...\n")
        
        features = []
        field_id = 1
        skipped = 0
        
        for crop_code in ag_codes:
            if field_id > max_fields:
                break
                
            mask = (data == crop_code).astype(np.uint8)
            geoms = list(shapes(mask, mask=mask, transform=src.transform))
            
            crop_info = CDL_CROP_MAP.get(
                crop_code, 
                {"name": f"Crop_{crop_code}", "emoji": "🌱"}
            )
            
            for geom, value in geoms:
                if field_id > max_fields:
                    break
                    
                if value == 1:
                    poly = shape(geom)
                    pixel_area = poly.area / (30 * 30)
                    
                    if pixel_area >= min_pixels:
                        # Filter by bounding box if provided
                        if bbox_proj and not poly.intersects(bbox_proj):
                            skipped += 1
                            continue
                        
                        # Convert to WGS84
                        poly_wgs84 = transform(transformer_to_wgs84.transform, poly)
                        
                        # Simplify geometry to reduce polygon complexity
                        if simplify_tolerance > 0:
                            poly_wgs84 = poly_wgs84.simplify(simplify_tolerance, preserve_topology=True)
                        
                        acres = pixel_area * 900 / 4047
                        
                        # Get centroid for display
                        centroid = poly_wgs84.centroid
                        
                        feature = {
                            "type": "Feature",
                            "properties": {
                                "id": f"field_{field_id:05d}",
                                "cdl_code": int(crop_code),
                                "crop": crop_info["name"],
                                "emoji": crop_info["emoji"],
                                "acres": int(acres),
                                "pixels": int(pixel_area),
                                "centroid_lon": round(centroid.x, 6),
                                "centroid_lat": round(centroid.y, 6)
                            },
                            "geometry": mapping(poly_wgs84)
                        }
                        
                        features.append(feature)
                        field_id += 1
            
            count = len([f for f in features if f['properties']['cdl_code'] == crop_code])
            if count > 0:
                print(f"  ✓ {crop_info['name']:20s} ({crop_code:3d}): {count} fields")
        
        if skipped > 0:
            print(f"\n  ⏭️  Skipped {skipped} fields outside bounding box")
        
        # Create GeoJSON with WGS84
        geojson = {
            "type": "FeatureCollection",
            "crs": {
                "type": "name",
                "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}
            },
            "metadata": {
                "region": region_name,
                "bbox": bbox_wgs84,
                "field_count": len(features)
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
        print(f"   Region: {region_name}")
        print(f"   Coordinates: WGS84 (lat/lon)")
        print(f"   File: {output_path}")
        print(f"   Size: {output_path.stat().st_size / 1024:.1f} KB")
        
        if len(features) > 0:
            # Show sample coordinates to verify
            sample = features[0]
            sample_coords = sample['geometry']['coordinates'][0][0]
            print(f"\n   Sample coordinates: [{sample_coords[0]:.4f}, {sample_coords[1]:.4f}]")
            print(f"   (Should be around -119°, 35° for Kern County)")
        
        print(f"{'='*60}\n")
        return True

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract regional crop fields with WGS84 conversion")
    parser.add_argument("input_tif", help="Input CDL TIF file")
    parser.add_argument("output_geojson", help="Output GeoJSON file")
    parser.add_argument("--region", choices=list(REGIONS.keys()), 
                       help="Predefined region to extract")
    parser.add_argument("--bbox", type=str,
                       help="Custom bounding box: minLon,minLat,maxLon,maxLat")
    parser.add_argument("--min-pixels", type=int, default=50,
                       help="Minimum field size in pixels (default: 50 = ~11 acres)")
    parser.add_argument("--max-fields", type=int, default=50,
                       help="Maximum number of fields to extract (default: 50)")
    parser.add_argument("--simplify", type=float, default=0.0001,
                       help="Simplification tolerance in degrees (default: 0.0001 = ~11m). Use 0 to disable.")
    
    args = parser.parse_args()
    
    # Parse bbox if provided
    bbox = None
    if args.bbox:
        try:
            bbox = [float(x) for x in args.bbox.split(',')]
            if len(bbox) != 4:
                raise ValueError("Bbox must have 4 values")
        except Exception as e:
            print(f"❌ Invalid bbox format: {e}")
            print("   Use: minLon,minLat,maxLon,maxLat")
            print("   Example: -119.5,35.2,-119.0,35.6")
            sys.exit(1)
    
    success = extract_regional_fields(
        args.input_tif,
        args.output_geojson,
        bbox=bbox,
        region=args.region,
        min_pixels=args.min_pixels,
        max_fields=args.max_fields,
        simplify_tolerance=args.simplify
    )
    
    sys.exit(0 if success else 1)