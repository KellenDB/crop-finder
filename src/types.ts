export interface CropProperties {
  id: string;
  name: string;
  owner: string;
  crop: string;
  variety: string;
  location: string;
  emoji: string;
  cropImage: string;
  yearPlanted: number;
  harvestCycle: 'Just Planted' | 'Growing' | 'Bud Break' | 'Ready to Harvest' | 'Harvested';
  growthDuration: string;
  acres: string;
  fieldCode: string;
  color: string;
  lightColor: string;
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
