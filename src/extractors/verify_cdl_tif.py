#!/usr/bin/env python3
"""
Verify CDL TIF File Type
========================
Determines if a TIF file contains:
- Raw CDL classification codes (single band, values 1-255)
- RGB visualization (3 bands, color image)

Usage:
    python verify_cdl_tif.py /path/to/your/cdl_file.tif
"""

import sys
from PIL import Image
import numpy as np

def verify_cdl_tif(tif_path):
    """Check if TIF is raw CDL data or RGB visualization"""
    
    print(f"\n{'='*60}")
    print(f"Analyzing: {tif_path}")
    print(f"{'='*60}\n")
    
    try:
        img = Image.open(tif_path)
        
        # Basic info
        print(f"📊 Image Properties:")
        print(f"   Size: {img.size[0]} x {img.size[1]} pixels")
        print(f"   Mode: {img.mode}")
        print(f"   Format: {img.format}")
        
        # Convert to array
        img_array = np.array(img)
        
        print(f"\n📐 Array Properties:")
        print(f"   Shape: {img_array.shape}")
        print(f"   Data type: {img_array.dtype}")
        
        # Determine type
        is_rgb = len(img_array.shape) == 3 and img_array.shape[2] >= 3
        
        if is_rgb:
            print(f"\n❌ FILE TYPE: RGB Visualization")
            print(f"   This is a COLOR IMAGE, not raw classification data")
            print(f"   Channels: {img_array.shape[2]}")
            
            # Check if channels are identical (sometimes RGB stores single-band as RGB)
            if img_array.shape[2] == 3:
                r = img_array[:,:,0]
                g = img_array[:,:,1]
                b = img_array[:,:,2]
                
                if np.array_equal(r, g) and np.array_equal(r, b):
                    print(f"\n   ⚠️  WAIT - All channels are identical!")
                    print(f"   This might be single-band data stored as RGB")
                    data = r
                    print(f"\n   Testing with Red channel...")
                else:
                    print(f"\n   RGB values differ - this is true color visualization")
                    data = img_array[:,:,0]  # Use red channel for analysis
        else:
            print(f"\n✅ FILE TYPE: Single-Band Raster")
            print(f"   This COULD be raw classification data")
            data = img_array
        
        # Analyze values
        unique_vals = np.unique(data)
        print(f"\n📈 Value Analysis:")
        print(f"   Unique values: {len(unique_vals)}")
        print(f"   Min value: {data.min()}")
        print(f"   Max value: {data.max()}")
        print(f"   First 30 unique values: {sorted(unique_vals[:30])}")
        
        # Check value distribution
        from collections import Counter
        value_counts = Counter(data.flatten())
        
        print(f"\n🔝 Top 10 Most Common Values:")
        for val, count in value_counts.most_common(10):
            pct = (count / data.size) * 100
            crop_name = CDL_CODES.get(int(val), "Unknown")
            print(f"   {val:3d}: {count:8d} pixels ({pct:5.2f}%) - {crop_name}")
        
        # Decision
        print(f"\n{'='*60}")
        if len(unique_vals) < 100 and data.max() <= 255:
            print("✅ VERDICT: This appears to be RAW CDL DATA")
            print("   Values match CDL classification codes (1-255)")
            print("   ✓ You can proceed with database loading!")
        else:
            print("❌ VERDICT: This appears to be RGB VISUALIZATION")
            print("   Too many unique values or wrong value range")
            print("   ✗ You need to download the raw classification TIF")
        print(f"{'='*60}\n")
        
    except Exception as e:
        print(f"\n❌ Error analyzing file: {e}")
        return False

# CDL crop codes (subset)
CDL_CODES = {
    0: "Background/NoData",
    1: "Corn",
    2: "Cotton",
    3: "Rice",
    4: "Sorghum",
    5: "Soybeans",
    6: "Sunflower",
    21: "Barley",
    24: "Winter Wheat",
    36: "Alfalfa",
    37: "Other Hay/Non Alfalfa",
    54: "Tomatoes",
    61: "Fallow/Idle Cropland",
    69: "Grapes",
    72: "Citrus",
    75: "Almonds",
    76: "Walnuts",
    111: "Open Water",
    121: "Developed/Open Space",
    122: "Developed/Low Intensity",
    141: "Deciduous Forest",
    176: "Grassland/Pasture",
    204: "Pistachios",
    217: "Pomegranates",
    255: "NoData"
}

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python 1_verify_cdl_tif.py /path/to/your/cdl_file.tif")
        sys.exit(1)
    
    verify_cdl_tif(sys.argv[1])