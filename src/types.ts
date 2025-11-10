export interface CropProperties {
    id: string;
    name: string;
    crop: string;
    variety: string;
    location: string;
    emoji: string;
    acres?: number;
    planted?: string;
  }
  
  export interface CropFeature {
    type: 'Feature';
    properties: CropProperties;
    geometry: {
      type: 'Polygon';
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