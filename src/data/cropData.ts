import { CropDataCollection, CropColors, Coordinates } from '../types';

export const mockCropData: CropDataCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "field_001",
        name: "Ponte Winery",
        crop: "Almond",
        variety: "Nonpareil",
        location: "Riverside, CA",
        emoji: "🌰",
        acres: 45,
        planted: "2018"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.170, 33.688],
          [-117.171, 33.688],
          [-117.171, 33.689],
          [-117.170, 33.689],
          [-117.170, 33.688]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_002",
        name: "Sunshine Citrus Ranch",
        crop: "Orange",
        variety: "Valencia",
        location: "Riverside, CA",
        emoji: "🍊",
        acres: 62,
        planted: "2015"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.172, 33.690],
          [-117.173, 33.690],
          [-117.173, 33.691],
          [-117.172, 33.691],
          [-117.172, 33.690]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_003",
        name: "Golden Fields Farm",
        crop: "Wheat",
        variety: "Hard Red Winter",
        location: "Riverside, CA",
        emoji: "🌾",
        acres: 120,
        planted: "2020"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.168, 33.686],
          [-117.169, 33.686],
          [-117.169, 33.687],
          [-117.168, 33.687],
          [-117.168, 33.686]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_004",
        name: "Valley View Vineyard",
        crop: "Grapes",
        variety: "Cabernet Sauvignon",
        location: "Riverside, CA",
        emoji: "🍇",
        acres: 38,
        planted: "2012"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.174, 33.692],
          [-117.175, 33.692],
          [-117.175, 33.693],
          [-117.174, 33.693],
          [-117.174, 33.692]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_005",
        name: "Sunburst Farms",
        crop: "Sunflower",
        variety: "Giant Russian",
        location: "Riverside, CA",
        emoji: "🌻",
        acres: 55,
        planted: "2021"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.166, 33.684],
          [-117.167, 33.684],
          [-117.167, 33.685],
          [-117.166, 33.685],
          [-117.166, 33.684]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_006",
        name: "Emerald Valley Orchards",
        crop: "Avocado",
        variety: "Hass",
        location: "Riverside, CA",
        emoji: "🥑",
        acres: 28,
        planted: "2016"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.169, 33.691],
          [-117.170, 33.691],
          [-117.170, 33.692],
          [-117.169, 33.692],
          [-117.169, 33.691]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_007",
        name: "Riverbend Strawberry Fields",
        crop: "Strawberry",
        variety: "Albion",
        location: "Riverside, CA",
        emoji: "🍓",
        acres: 18,
        planted: "2022"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.173, 33.687],
          [-117.174, 33.687],
          [-117.174, 33.688],
          [-117.173, 33.688],
          [-117.173, 33.687]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_008",
        name: "Sunset Tomato Ranch",
        crop: "Tomato",
        variety: "Roma",
        location: "Riverside, CA",
        emoji: "🍅",
        acres: 32,
        planted: "2019"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.167, 33.689],
          [-117.168, 33.689],
          [-117.168, 33.690],
          [-117.167, 33.690],
          [-117.167, 33.689]
        ]]
      }
    }
  ]
};

export const cropColors: CropColors = {
  Almond: { fill: '#D4A574', stroke: '#8B7355' },
  Orange: { fill: '#FFA500', stroke: '#FF8C00' },
  Wheat: { fill: '#F4E4C1', stroke: '#DAA520' },
  Grapes: { fill: '#9B59B6', stroke: '#6A1B9A' },
  Sunflower: { fill: '#FFD700', stroke: '#FFA000' },
  Avocado: { fill: '#7FB069', stroke: '#556B2F' },
  Strawberry: { fill: '#FF6B6B', stroke: '#C92A2A' },
  Tomato: { fill: '#FF4757', stroke: '#D32F2F' },
  default: { fill: '#7FB069', stroke: '#556B2F' }
};

export const defaultMapCenter: Coordinates = [-117.170, 33.688];
export const defaultMapZoom: number = 13;