export interface CropProperties {
  // Core fields (required - from USDA CDL data)
  id: string;
  crop: string;
  emoji: string;
  acres: string;
  cdl_code: number;
  
  // Derived fields (required - we generate these from CDL data)
  variety: string;
  location: string;
  color: string;
  lightColor: string;
  growthDuration: string;
  
  // Geospatial data (optional - included in our extracts)
  centroid_lon?: number;
  centroid_lat?: number;
  
  // Aspirational fields (optional - future data sources)
  name?: string;              // Future: Field/farm name from property records
  owner?: string;             // Future: Owner from property records  
  cropImage?: string;         // Future: Satellite/aerial imagery
  yearPlanted?: number;       // Future: Historical planting data
  harvestCycle?: 'Just Planted' | 'Growing' | 'Bud Break' | 'Ready to Harvest' | 'Harvested';  // Future: Real-time growth tracking
  fieldCode?: string;         // Future: Official parcel/field IDs
  planted?: string;           // Future: Planting date tracking
}

export interface CropFeature {
  type: 'Feature';
  properties: CropProperties;
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][];
  };
}

export interface CropDataCollection {
  type: 'FeatureCollection';
  features: CropFeature[];
}

export interface CropColor {
  fill: string;
  stroke: string;
}

export type CropColors = {
  [key: string]: CropColor;
};

export type Coordinates = [number, number];

export type MapViewType = 'standard' | 'satellite' | 'terrain';

export interface LayerSettings {
  cropFields: boolean;
}