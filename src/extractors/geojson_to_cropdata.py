#!/usr/bin/env python3
"""
Convert Real USDA GeoJSON to CropData TypeScript Format
========================================================
Converts extracted USDA crop field GeoJSON to match the TypeScript
interface expected by the React app.

Usage:
    python geojson_to_cropdata.py bakersfield_test.geojson src/data/bakersfieldData.ts
"""

import sys
import json
from pathlib import Path

# Crop display colors (matching USDA CDL standard colors)
CROP_COLORS = {
    "Corn": {"fill": "#FFD700", "stroke": "#FFA000"},
    "Cotton": {"fill": "#FFE5CC", "stroke": "#D68910"},
    "Rice": {"fill": "#8FBC8F", "stroke": "#556B2F"},
    "Sorghum": {"fill": "#CD853F", "stroke": "#8B4513"},
    "Barley": {"fill": "#F4E4C1", "stroke": "#DAA520"},
    "Durum Wheat": {"fill": "#FAEBD7", "stroke": "#D2B48C"},
    "Winter Wheat": {"fill": "#F5DEB3", "stroke": "#DEB887"},
    "Alfalfa": {"fill": "#76D7C4", "stroke": "#148F77"},
    "Other Hay": {"fill": "#90EE90", "stroke": "#32CD32"},
    "Potatoes": {"fill": "#C39BD3", "stroke": "#76448A"},
    "Onions": {"fill": "#8B4513", "stroke": "#654321"},
    "Tomatoes": {"fill": "#FF4757", "stroke": "#D32F2F"},
    "Fallow": {"fill": "#D2B48C", "stroke": "#A0826D"},
    "Cherries": {"fill": "#DC143C", "stroke": "#8B0000"},
    "Grapes": {"fill": "#9B59B6", "stroke": "#6A1B9A"},
    "Citrus": {"fill": "#FFA500", "stroke": "#FF8C00"},
    "Almonds": {"fill": "#D4A574", "stroke": "#8B7355"},
    "Walnuts": {"fill": "#8B4513", "stroke": "#654321"},
    "Pistachios": {"fill": "#7FB069", "stroke": "#556B2F"},
    "Carrots": {"fill": "#E67E22", "stroke": "#A04000"},
    "Olives": {"fill": "#556B2F", "stroke": "#2F4F2F"},
    "Pomegranates": {"fill": "#E74C3C", "stroke": "#922B21"},
    "Lettuce": {"fill": "#90EE90", "stroke": "#228B22"},
    "Crop_205": {"fill": "#90EE90", "stroke": "#228B22"},
    "Crop_228": {"fill": "#C9B458", "stroke": "#8B7D3A"}
}

DEFAULT_COLOR = {"fill": "#7FB069", "stroke": "#556B2F"}

# Map crop types to varieties (for display purposes)
CROP_VARIETIES = {
    "Almonds": "Nonpareil",
    "Pistachios": "Kerman",
    "Grapes": "Wine Grapes",
    "Citrus": "Navel Oranges",
    "Cotton": "Upland",
    "Corn": "Field Corn",
    "Alfalfa": "Premium",
    "Tomatoes": "Processing",
    "Walnuts": "Chandler",
    "Carrots": "Imperator",
    "Onions": "Yellow",
    "Lettuce": "Romaine",
}

# Growth durations
GROWTH_DURATION = {
    "Almonds": "Perennial",
    "Pistachios": "Perennial",
    "Grapes": "Perennial",
    "Citrus": "Perennial",
    "Walnuts": "Perennial",
    "Olives": "Perennial",
    "Pomegranates": "Perennial",
    "Cherries": "Perennial",
    "Cotton": "Annual",
    "Corn": "Annual",
    "Tomatoes": "Annual",
    "Alfalfa": "Perennial (3-5 years)",
    "Barley": "Annual",
    "Winter Wheat": "Annual",
    "Lettuce": "Annual",
    "Carrots": "Annual",
    "Onions": "Annual",
}

def convert_to_cropdata(input_path, output_path):
    """Convert real USDA GeoJSON to TypeScript cropData format"""
    
    print(f"\n{'='*60}")
    print(f"Converting USDA GeoJSON to CropData TypeScript")
    print(f"{'='*60}\n")
    
    # Read input GeoJSON
    with open(input_path, 'r') as f:
        geojson = json.load(f)
    
    features = geojson.get('features', [])
    metadata = geojson.get('metadata', {})
    region_name = metadata.get('region', 'Unknown Region')
    
    print(f"📂 Input: {input_path}")
    print(f"   Features: {len(features)}")
    print(f"   Region: {region_name}\n")
    
    # Start building TypeScript file
    ts_lines = [
        "import { CropDataCollection, CropColors, Coordinates } from '../types';",
        "",
        f"// Real USDA Cropland Data Layer (CDL) data",
        f"// Region: {region_name}",
        f"// Extracted from 2024 CDL satellite data",
        f"// {len(features)} crop fields",
        "",
        "export const cropData: CropDataCollection = {",
        '  type: "FeatureCollection",',
        "  features: ["
    ]
    
    # Convert each feature
    for i, feature in enumerate(features):
        props = feature['properties']
        geom = feature['geometry']
        
        crop = props['crop']
        color = CROP_COLORS.get(crop, DEFAULT_COLOR)
        variety = CROP_VARIETIES.get(crop, "Standard")
        duration = GROWTH_DURATION.get(crop, "Unknown")
        
        # Format coordinates to be on single line if polygon is simple
        coords = geom['coordinates']
        coords_str = json.dumps(coords)
        
        ts_lines.extend([
            "    {",
            '      type: "Feature",',
            "      properties: {",
            f'        id: "{props["id"]}",',
            f'        crop: "{crop}",',
            f'        variety: "{variety}",',
            f'        location: "{region_name}, Kern County, CA",',
            f'        emoji: {json.dumps(props["emoji"])},',
            f'        acres: "{props["acres"]}",',
            f'        growthDuration: "{duration}",',
            f'        color: "{color["fill"]}",',
            f'        lightColor: "{color["fill"]}CC",  // 80% opacity',
            f'        cdl_code: {props["cdl_code"]},',
            f'        centroid_lon: {props.get("centroid_lon", 0)},',
            f'        centroid_lat: {props.get("centroid_lat", 0)}',
            "      },",
            "      geometry: {",
            f'        type: "{geom["type"]}",',
            f'        coordinates: {coords_str}',
            "      }",
            "    }" + ("," if i < len(features) - 1 else ""),
        ])
    
    # Add footer
    ts_lines.extend([
        "  ]",
        "};",
        "",
        "// USDA CDL Standard Color Mappings",
        "export const cropColors: CropColors = {"
    ])
    
    # Add color mappings
    for crop, colors in CROP_COLORS.items():
        ts_lines.append(f'  {crop}: {{ fill: "{colors["fill"]}", stroke: "{colors["stroke"]}" }},')
    
    ts_lines.append(f'  default: {{ fill: "{DEFAULT_COLOR["fill"]}", stroke: "{DEFAULT_COLOR["stroke"]}" }}')
    ts_lines.append("};")
    
    # Add map center (use first field's centroid)
    if features:
        first = features[0]['properties']
        center_lon = first.get('centroid_lon', -119.0)
        center_lat = first.get('centroid_lat', 35.3)
    else:
        center_lon = -119.0
        center_lat = 35.3
    
    ts_lines.extend([
        "",
        f"// Default map center: {region_name}",
        f"export const defaultMapCenter: Coordinates = [{center_lon}, {center_lat}];",
        "export const defaultMapZoom: number = 12;",
        ""
    ])
    
    # Write output
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w') as f:
        f.write('\n'.join(ts_lines))
    
    print(f"✅ SUCCESS!")
    print(f"   Output: {output_path}")
    print(f"   TypeScript ready for import\n")
    
    # Show sample
    print("Sample feature properties:")
    if features:
        sample = features[0]['properties']
        for key, value in sample.items():
            print(f"  {key}: {value}")
    
    print(f"\n{'='*60}\n")
    
    return True

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python geojson_to_cropdata.py input.geojson output.ts")
        print("Example: python geojson_to_cropdata.py bakersfield_test.geojson src/data/bakersfieldData.ts")
        sys.exit(1)
    
    success = convert_to_cropdata(sys.argv[1], sys.argv[2])
    sys.exit(0 if success else 1)