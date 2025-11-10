import { CropDataCollection, CropColors, Coordinates } from '../types';

// Enhanced CDL-based crop data for Riverside County, California
// Using USDA CDL 2023 California crop classification codes
// Coordinates represent actual agricultural areas across Riverside County
// Field sizes based on typical acreage for each crop type in the region

export const mockCropData: CropDataCollection = {
  type: "FeatureCollection",
  features: [
    // ALMONDS (CDL Code: 75) - Major crop in Riverside County
    {
      type: "Feature",
      properties: {
        id: "cdl-almond-001",
        name: "Riverside Almond Orchards",
        owner: "Central Valley Growers LLC",
        crop: "Almond",
        variety: "Nonpareil",
        location: "Riverside County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1648446186456-65ecf9bb6617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2018,
        harvestCycle: "Growing",
        growthDuration: "8-9 months",
        acres: "142",
        fieldCode: "CDL-075-001",
        color: "#8B6914",
        lightColor: "rgba(139, 105, 20, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.3950, 33.7520],
          [-117.3850, 33.7520],
          [-117.3850, 33.7600],
          [-117.3950, 33.7600],
          [-117.3950, 33.7520]
        ]]
      }
    },
    
    // PISTACHIOS (CDL Code: 204) - Growing in Coachella Valley
    {
      type: "Feature",
      properties: {
        id: "cdl-pistachio-001",
        name: "Coachella Valley Pistachios",
        owner: "Desert Nut Company",
        crop: "Pistachio",
        variety: "Kerman",
        location: "Coachella Valley, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2015,
        harvestCycle: "Growing",
        growthDuration: "7-8 months",
        acres: "187",
        fieldCode: "CDL-204-001",
        color: "#C19A6B",
        lightColor: "rgba(193, 154, 107, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-116.1100, 33.6850],
          [-116.0980, 33.6850],
          [-116.0980, 33.6950],
          [-116.1100, 33.6950],
          [-116.1100, 33.6850]
        ]]
      }
    },
    
    // CITRUS/ORANGES (CDL Code: 212) - Traditional Riverside crop
    {
      type: "Feature",
      properties: {
        id: "cdl-citrus-001",
        name: "Orange Heights Ranch",
        owner: "Citrus Valley Cooperative",
        crop: "Orange",
        variety: "Valencia",
        location: "Riverside, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1547514701-42782101795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2012,
        harvestCycle: "Ready to Harvest",
        growthDuration: "12-15 months",
        acres: "95",
        fieldCode: "CDL-212-001",
        color: "#FFA500",
        lightColor: "rgba(255, 165, 0, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.4200, 33.8100],
          [-117.4080, 33.8100],
          [-117.4080, 33.8180],
          [-117.4200, 33.8180],
          [-117.4200, 33.8100]
        ]]
      }
    },
    
    // GRAPES (CDL Code: 69) - Temecula wine country
    {
      type: "Feature",
      properties: {
        id: "cdl-grape-001",
        name: "Temecula Wine Estates",
        owner: "Temecula Valley Vintners",
        crop: "Grape",
        variety: "Cabernet Sauvignon",
        location: "Temecula, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2010,
        harvestCycle: "Bud Break",
        growthDuration: "6-7 months",
        acres: "68",
        fieldCode: "CDL-069-001",
        color: "#722F37",
        lightColor: "rgba(114, 47, 55, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.1450, 33.4950],
          [-117.1350, 33.4950],
          [-117.1350, 33.5020],
          [-117.1450, 33.5020],
          [-117.1450, 33.4950]
        ]]
      }
    },
    
    // ALFALFA (CDL Code: 36) - Major forage crop along Colorado River
    {
      type: "Feature",
      properties: {
        id: "cdl-alfalfa-001",
        name: "Palo Verde Hay Company",
        owner: "Palo Verde Agriculture LLC",
        crop: "Alfalfa",
        variety: "Supreme Hay",
        location: "Palo Verde Valley, CA",
        emoji: "🌿",
        cropImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2019,
        harvestCycle: "Growing",
        growthDuration: "Perennial",
        acres: "254",
        fieldCode: "CDL-036-001",
        color: "#7CB342",
        lightColor: "rgba(124, 179, 66, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-114.7200, 33.7150],
          [-114.7050, 33.7150],
          [-114.7050, 33.7280],
          [-114.7200, 33.7280],
          [-114.7200, 33.7150]
        ]]
      }
    },
    
    // AVOCADOS (CDL Code: 215) - Southern Riverside County
    {
      type: "Feature",
      properties: {
        id: "cdl-avocado-001",
        name: "Fallbrook Avocado Grove",
        owner: "California Avocado Growers",
        crop: "Avocado",
        variety: "Hass",
        location: "Fallbrook Area, CA",
        emoji: "🥑",
        cropImage: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2016,
        harvestCycle: "Growing",
        growthDuration: "12-18 months",
        acres: "52",
        fieldCode: "CDL-215-001",
        color: "#568203",
        lightColor: "rgba(86, 130, 3, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.2500, 33.3780],
          [-117.2400, 33.3780],
          [-117.2400, 33.3850],
          [-117.2500, 33.3850],
          [-117.2500, 33.3780]
        ]]
      }
    },
    
    // TOMATOES (CDL Code: 54) - Moreno Valley area
    {
      type: "Feature",
      properties: {
        id: "cdl-tomato-001",
        name: "Moreno Valley Tomato Farm",
        owner: "Valley Fresh Produce Inc.",
        crop: "Tomato",
        variety: "Roma",
        location: "Moreno Valley, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2023,
        harvestCycle: "Growing",
        growthDuration: "2-3 months",
        acres: "78",
        fieldCode: "CDL-054-001",
        color: "#FF4757",
        lightColor: "rgba(255, 71, 87, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.2200, 33.9250],
          [-117.2100, 33.9250],
          [-117.2100, 33.9320],
          [-117.2200, 33.9320],
          [-117.2200, 33.9250]
        ]]
      }
    },
    
    // WALNUTS (CDL Code: 76) - Corona area
    {
      type: "Feature",
      properties: {
        id: "cdl-walnut-001",
        name: "Corona Walnut Orchards",
        owner: "Corona Nut Growers",
        crop: "Walnut",
        variety: "Chandler",
        location: "Corona, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2014,
        harvestCycle: "Growing",
        growthDuration: "7-8 months",
        acres: "112",
        fieldCode: "CDL-076-001",
        color: "#8B7355",
        lightColor: "rgba(139, 115, 85, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.5650, 33.8720],
          [-117.5530, 33.8720],
          [-117.5530, 33.8800],
          [-117.5650, 33.8800],
          [-117.5650, 33.8720]
        ]]
      }
    },
    
    // OLIVES (CDL Code: 211) - Desert area
    {
      type: "Feature",
      properties: {
        id: "cdl-olive-001",
        name: "Desert Gold Olive Ranch",
        owner: "California Olive Oil Company",
        crop: "Olive",
        variety: "Mission",
        location: "Coachella Valley, CA",
        emoji: "🫒",
        cropImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2017,
        harvestCycle: "Growing",
        growthDuration: "8-10 months",
        acres: "89",
        fieldCode: "CDL-211-001",
        color: "#808000",
        lightColor: "rgba(128, 128, 0, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-116.0850, 33.6520],
          [-116.0750, 33.6520],
          [-116.0750, 33.6590],
          [-116.0850, 33.6590],
          [-116.0850, 33.6520]
        ]]
      }
    },
    
    // POMEGRANATES (CDL Code: 217) - Riverside
    {
      type: "Feature",
      properties: {
        id: "cdl-pomegranate-001",
        name: "Riverside Pomegranate Farm",
        owner: "Golden Fruit Growers",
        crop: "Pomegranate",
        variety: "Wonderful",
        location: "Riverside, CA",
        emoji: "🍎",
        cropImage: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2020,
        harvestCycle: "Growing",
        growthDuration: "6-7 months",
        acres: "45",
        fieldCode: "CDL-217-001",
        color: "#C73E1D",
        lightColor: "rgba(199, 62, 29, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.3720, 33.9580],
          [-117.3650, 33.9580],
          [-117.3650, 33.9640],
          [-117.3720, 33.9640],
          [-117.3720, 33.9580]
        ]]
      }
    },
    
    // ONIONS (CDL Code: 49) - Coachella Valley
    {
      type: "Feature",
      properties: {
        id: "cdl-onion-001",
        name: "Coachella Valley Onion Fields",
        owner: "Desert Valley Produce",
        crop: "Onion",
        variety: "Yellow Sweet",
        location: "Coachella, CA",
        emoji: "🧅",
        cropImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2024,
        harvestCycle: "Just Planted",
        growthDuration: "4-5 months",
        acres: "63",
        fieldCode: "CDL-049-001",
        color: "#F4E4C1",
        lightColor: "rgba(244, 228, 193, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-116.1750, 33.6820],
          [-116.1650, 33.6820],
          [-116.1650, 33.6890],
          [-116.1750, 33.6890],
          [-116.1750, 33.6820]
        ]]
      }
    },
    
    // CARROTS (CDL Code: 206) - Blythe area (Colorado River region)
    {
      type: "Feature",
      properties: {
        id: "cdl-carrot-001",
        name: "Blythe Carrot Company",
        owner: "Colorado River Farms",
        crop: "Carrot",
        variety: "Imperator",
        location: "Blythe, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2024,
        harvestCycle: "Growing",
        growthDuration: "2-3 months",
        acres: "124",
        fieldCode: "CDL-206-001",
        color: "#FF8C00",
        lightColor: "rgba(255, 140, 0, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-114.5950, 33.6120],
          [-114.5820, 33.6120],
          [-114.5820, 33.6210],
          [-114.5950, 33.6210],
          [-114.5950, 33.6120]
        ]]
      }
    },
    
    // LETTUCE (CDL Code: 227) - Desert region
    {
      type: "Feature",
      properties: {
        id: "cdl-lettuce-001",
        name: "Imperial Valley Lettuce",
        owner: "Fresh Greens LLC",
        crop: "Lettuce",
        variety: "Romaine",
        location: "Eastern Riverside County, CA",
        emoji: "🥬",
        cropImage: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2024,
        harvestCycle: "Ready to Harvest",
        growthDuration: "2 months",
        acres: "86",
        fieldCode: "CDL-227-001",
        color: "#90EE90",
        lightColor: "rgba(144, 238, 144, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-115.3450, 33.4120],
          [-115.3340, 33.4120],
          [-115.3340, 33.4190],
          [-115.3450, 33.4190],
          [-115.3450, 33.4120]
        ]]
      }
    },
    
    // WHEAT (CDL Code: 24 - Winter Wheat) - Inland areas
    {
      type: "Feature",
      properties: {
        id: "cdl-wheat-001",
        name: "Inland Empire Wheat Fields",
        owner: "California Grain Cooperative",
        crop: "Wheat",
        variety: "Hard Red Winter",
        location: "Perris Valley, CA",
        emoji: "🌾",
        cropImage: "https://images.unsplash.com/photo-1659944084284-dbf837dc3d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2023,
        harvestCycle: "Ready to Harvest",
        growthDuration: "7-8 months",
        acres: "203",
        fieldCode: "CDL-024-001",
        color: "#DAA520",
        lightColor: "rgba(218, 165, 32, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-117.2820, 33.7280],
          [-117.2650, 33.7280],
          [-117.2650, 33.7380],
          [-117.2820, 33.7380],
          [-117.2820, 33.7280]
        ]]
      }
    },
    
    // DATE PALMS (CDL Code: 71 - Other Tree Crops) - Coachella Valley
    {
      type: "Feature",
      properties: {
        id: "cdl-date-001",
        name: "Coachella Date Gardens",
        owner: "Desert Date Company",
        crop: "Date Palm",
        variety: "Medjool",
        location: "Coachella Valley, CA",
        emoji: "🌴",
        cropImage: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        yearPlanted: 2008,
        harvestCycle: "Growing",
        growthDuration: "9-10 months",
        acres: "76",
        fieldCode: "CDL-071-001",
        color: "#8B4513",
        lightColor: "rgba(139, 69, 19, 0.15)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-116.1120, 33.7250],
          [-116.1020, 33.7250],
          [-116.1020, 33.7320],
          [-116.1120, 33.7320],
          [-116.1120, 33.7250]
        ]]
      }
    }
  ]
};

// Crop colors for map visualization (matching CDL crop types)
export const cropColors: CropColors = {
  Almond: { fill: '#D4A574', stroke: '#8B7355' },
  Pistachio: { fill: '#C19A6B', stroke: '#A0826D' },
  Orange: { fill: '#FFA500', stroke: '#FF8C00' },
  Grape: { fill: '#722F37', stroke: '#6A1B9A' },
  Alfalfa: { fill: '#7CB342', stroke: '#558B2F' },
  Avocado: { fill: '#568203', stroke: '#33691E' },
  Tomato: { fill: '#FF4757', stroke: '#D32F2F' },
  Walnut: { fill: '#8B7355', stroke: '#6D5B47' },
  Olive: { fill: '#808000', stroke: '#556B2F' },
  Pomegranate: { fill: '#C73E1D', stroke: '#A52A2A' },
  Onion: { fill: '#F4E4C1', stroke: '#DAA520' },
  Carrot: { fill: '#FF8C00', stroke: '#FF6347' },
  Lettuce: { fill: '#90EE90', stroke: '#32CD32' },
  Wheat: { fill: '#DAA520', stroke: '#B8860B' },
  'Date Palm': { fill: '#8B4513', stroke: '#654321' },
  Sunflower: { fill: '#FFD700', stroke: '#FFA000' },
  Strawberry: { fill: '#FF6B6B', stroke: '#C92A2A' },
  default: { fill: '#7FB069', stroke: '#556B2F' }
};

// Default map center (Riverside County agricultural center)
export const defaultMapCenter: Coordinates = [-117.170, 33.688];
export const defaultMapZoom: number = 10; // Zoom out to see wider area