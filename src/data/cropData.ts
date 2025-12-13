import { CropDataCollection, CropColors, Coordinates } from '../types';

// Real Kern County, California Cropland Data Layer (CDL) data
// Based on USDA NASS 2024 Cropland Data Layer
// 140 fields across 7 major agricultural zones

export const mockCropData: CropDataCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "field_001",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "346", // MOCK
        fieldCode: "KRN-75-001", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.94578960420826, 35.34460096961823], [-118.9227880536851, 35.34460096961823], [-118.9227880536851, 35.364281333859694], [-118.94578960420826, 35.364281333859694], [-118.94578960420826, 35.34460096961823]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_002",
        name: "Sunburst Fields Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "222", // MOCK
        fieldCode: "KRN-72-002", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.8971247009825, 35.318903278589275], [-118.88647235805156, 35.318903278589275], [-118.88647235805156, 35.32983661074515], [-118.8971247009825, 35.32983661074515], [-118.8971247009825, 35.318903278589275]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_003",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "229", // MOCK
        fieldCode: "KRN-75-003", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.7105999815061, 35.25201956233415], [-118.70255744925652, 35.25201956233415], [-118.70255744925652, 35.2688381545074], [-118.7105999815061, 35.2688381545074], [-118.7105999815061, 35.25201956233415]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_004",
        name: "Golden Fields Orchards", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "249", // MOCK
        fieldCode: "KRN-69-004", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.98975365356627, 35.30522100076434], [-118.97623989809138, 35.30522100076434], [-118.97623989809138, 35.31846015362128], [-118.98975365356627, 35.31846015362128], [-118.98975365356627, 35.30522100076434]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_005",
        name: "Golden Fields Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "115", // MOCK
        fieldCode: "KRN-69-005", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.71477597060694, 35.338485207191574], [-118.70507023422438, 35.338485207191574], [-118.70507023422438, 35.35124577378321], [-118.71477597060694, 35.35124577378321], [-118.71477597060694, 35.338485207191574]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_006",
        name: "Pioneer Estate Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "172", // MOCK
        fieldCode: "KRN-204-006", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.79631235436396, 35.134759124056636], [-118.78007048569141, 35.134759124056636], [-118.78007048569141, 35.14698140811577], [-118.79631235436396, 35.14698140811577], [-118.79631235436396, 35.134759124056636]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_007",
        name: "Golden Fields Ranch", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "264", // MOCK
        fieldCode: "KRN-204-007", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.86484276378492, 35.14736979257092], [-118.84934002234586, 35.14736979257092], [-118.84934002234586, 35.156038670913354], [-118.86484276378492, 35.156038670913354], [-118.86484276378492, 35.14736979257092]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_008",
        name: "Golden Fields Ranch", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "207", // MOCK
        fieldCode: "KRN-75-008", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.9623491763325, 35.18603682553607], [-118.95167402610905, 35.18603682553607], [-118.95167402610905, 35.19474946447189], [-118.9623491763325, 35.19474946447189], [-118.9623491763325, 35.18603682553607]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_009",
        name: "Sunburst Fields Ranch", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "180", // MOCK
        fieldCode: "KRN-72-009", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.84261517512125, 35.15468200784473], [-118.82840011694587, 35.15468200784473], [-118.82840011694587, 35.166233735653236], [-118.84261517512125, 35.166233735653236], [-118.84261517512125, 35.15468200784473]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_010",
        name: "Mountain View Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "165", // MOCK
        fieldCode: "KRN-69-010", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.75581637009975, 35.16620912663902], [-118.73222655496681, 35.16620912663902], [-118.73222655496681, 35.176978494854], [-118.75581637009975, 35.176978494854], [-118.75581637009975, 35.16620912663902]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_011",
        name: "Golden Fields Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "187", // MOCK
        fieldCode: "KRN-69-011", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.71083533659133, 35.128442796723576], [-118.69457601478716, 35.128442796723576], [-118.69457601478716, 35.13483129216645], [-118.71083533659133, 35.13483129216645], [-118.71083533659133, 35.128442796723576]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_012",
        name: "Valley View Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "159", // MOCK
        fieldCode: "KRN-204-012", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.88800137575826, 35.09605977879073], [-118.87419544822573, 35.09605977879073], [-118.87419544822573, 35.10229258068577], [-118.88800137575826, 35.10229258068577], [-118.88800137575826, 35.09605977879073]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_013",
        name: "Golden Fields Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "224", // MOCK
        fieldCode: "KRN-204-013", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.75521947927211, 35.07426570749889], [-118.73834281213536, 35.07426570749889], [-118.73834281213536, 35.08057172687061], [-118.75521947927211, 35.08057172687061], [-118.75521947927211, 35.07426570749889]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_014",
        name: "Pioneer Estate Ranch", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "150", // MOCK
        fieldCode: "KRN-69-014", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.77958627051687, 35.279297410966244], [-118.77083817592676, 35.279297410966244], [-118.77083817592676, 35.29375034744708], [-118.77958627051687, 35.29375034744708], [-118.77958627051687, 35.279297410966244]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_015",
        name: "Sunburst Fields Farms", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "270", // MOCK
        fieldCode: "KRN-204-015", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.82021402915915, 35.065827971963145], [-118.79669034704146, 35.065827971963145], [-118.79669034704146, 35.07787769837685], [-118.82021402915915, 35.07787769837685], [-118.82021402915915, 35.065827971963145]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_016",
        name: "Heritage Grove Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "220", // MOCK
        fieldCode: "KRN-75-016", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.84469461162804, 35.21077645716204], [-118.82943198590384, 35.21077645716204], [-118.82943198590384, 35.22601991117065], [-118.84469461162804, 35.22601991117065], [-118.84469461162804, 35.21077645716204]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_017",
        name: "Heritage Grove Farms", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "221", // MOCK
        fieldCode: "KRN-69-017", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.83747978076296, 35.13992636425431], [-118.82407514943004, 35.13992636425431], [-118.82407514943004, 35.150859979764675], [-118.83747978076296, 35.150859979764675], [-118.83747978076296, 35.13992636425431]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_018",
        name: "Oak Creek Ranch", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "191", // MOCK
        fieldCode: "KRN-72-018", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.92084993290746, 35.22821098181787], [-118.89921058511499, 35.22821098181787], [-118.89921058511499, 35.24061545688758], [-118.92084993290746, 35.24061545688758], [-118.92084993290746, 35.22821098181787]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_019",
        name: "Oak Creek Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "116", // MOCK
        fieldCode: "KRN-69-019", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.78886915870159, 35.13636831263209], [-118.76830851224277, 35.13636831263209], [-118.76830851224277, 35.15110071473097], [-118.78886915870159, 35.15110071473097], [-118.78886915870159, 35.13636831263209]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_020",
        name: "Valley View Orchards", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "187", // MOCK
        fieldCode: "KRN-72-020", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.77690380693873, 35.21788863420287], [-118.76608336872069, 35.21788863420287], [-118.76608336872069, 35.23001673193571], [-118.77690380693873, 35.23001673193571], [-118.77690380693873, 35.21788863420287]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_021",
        name: "River Bend Ranch", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "260", // MOCK
        fieldCode: "KRN-204-021", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.8669718009146, 35.31593024384684], [-118.84476348008917, 35.31593024384684], [-118.84476348008917, 35.328370436829935], [-118.8669718009146, 35.328370436829935], [-118.8669718009146, 35.31593024384684]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_022",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "177", // MOCK
        fieldCode: "KRN-204-022", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.79277110618635, 35.15466868584282], [-118.7819031560628, 35.15466868584282], [-118.7819031560628, 35.166957114836606], [-118.79277110618635, 35.166957114836606], [-118.79277110618635, 35.15466868584282]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_023",
        name: "Oak Creek Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "250", // MOCK
        fieldCode: "KRN-69-023", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.00368874212712, 35.28542269123724], [-118.99473299240763, 35.28542269123724], [-118.99473299240763, 35.29660947021811], [-119.00368874212712, 35.29660947021811], [-119.00368874212712, 35.28542269123724]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_024",
        name: "Valley View Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "219", // MOCK
        fieldCode: "KRN-75-024", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.93289874054601, 35.10573126194665], [-118.91100556644587, 35.10573126194665], [-118.91100556644587, 35.11940111287496], [-118.93289874054601, 35.11940111287496], [-118.93289874054601, 35.10573126194665]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_025",
        name: "Sierra Farms Orchards", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Arvin-Lamont Corridor, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "226", // MOCK
        fieldCode: "KRN-75-025", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.97444123354491, 35.27161450777756], [-118.95483620315007, 35.27161450777756], [-118.95483620315007, 35.28232095034271], [-118.97444123354491, 35.28232095034271], [-118.97444123354491, 35.27161450777756]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_026",
        name: "Pioneer Estate Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Lost Hills, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "195", // MOCK
        fieldCode: "KRN-2-026", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.66980271820853, 35.634360919871206], [-119.65080398051404, 35.634360919871206], [-119.65080398051404, 35.6489916592218], [-119.66980271820853, 35.6489916592218], [-119.66980271820853, 35.634360919871206]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_027",
        name: "Sunset Ranch Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "211", // MOCK
        fieldCode: "KRN-204-027", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.70578765435202, 35.679389779613665], [-119.69453124476111, 35.679389779613665], [-119.69453124476111, 35.68737257742425], [-119.70578765435202, 35.68737257742425], [-119.70578765435202, 35.679389779613665]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_028",
        name: "Sierra Farms Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Lost Hills, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "257", // MOCK
        fieldCode: "KRN-75-028", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.72107209577442, 35.71710241406759], [-119.6983760688561, 35.71710241406759], [-119.6983760688561, 35.72870313609487], [-119.72107209577442, 35.72870313609487], [-119.72107209577442, 35.71710241406759]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_029",
        name: "Golden Fields Ranch", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Lost Hills, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "195", // MOCK
        fieldCode: "KRN-2-029", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.69440877448577, 35.651445351173095], [-119.68055202225489, 35.651445351173095], [-119.68055202225489, 35.66992282073657], [-119.69440877448577, 35.66992282073657], [-119.69440877448577, 35.651445351173095]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_030",
        name: "Mountain View Orchards", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Lost Hills, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "292", // MOCK
        fieldCode: "KRN-75-030", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.65497922678313, 35.718180257816215], [-119.63952718545704, 35.718180257816215], [-119.63952718545704, 35.73417747541586], [-119.65497922678313, 35.73417747541586], [-119.65497922678313, 35.718180257816215]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_031",
        name: "Green Valley Farms", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "188", // MOCK
        fieldCode: "KRN-204-031", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.61221986646292, 35.64561804652277], [-119.60405118422783, 35.64561804652277], [-119.60405118422783, 35.65976378169364], [-119.61221986646292, 35.65976378169364], [-119.61221986646292, 35.64561804652277]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_032",
        name: "Heritage Grove Orchards", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "202", // MOCK
        fieldCode: "KRN-204-032", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.76441315117106, 35.665429199354186], [-119.74270988804076, 35.665429199354186], [-119.74270988804076, 35.68530878537566], [-119.76441315117106, 35.68530878537566], [-119.76441315117106, 35.665429199354186]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_033",
        name: "Mountain View Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "249", // MOCK
        fieldCode: "KRN-204-033", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.6664202162956, 35.70404937880625], [-119.65346339932795, 35.70404937880625], [-119.65346339932795, 35.713091281787236], [-119.6664202162956, 35.713091281787236], [-119.6664202162956, 35.70404937880625]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_034",
        name: "Mountain View Farms", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Lost Hills, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "105", // MOCK
        fieldCode: "KRN-2-034", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.70650323827775, 35.62755270185809], [-119.68266125066228, 35.62755270185809], [-119.68266125066228, 35.64575327266704], [-119.70650323827775, 35.64575327266704], [-119.70650323827775, 35.62755270185809]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_035",
        name: "Green Valley Orchards", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "198", // MOCK
        fieldCode: "KRN-204-035", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.66660336878972, 35.723127545620606], [-119.64759928252455, 35.723127545620606], [-119.64759928252455, 35.73344450236683], [-119.66660336878972, 35.73344450236683], [-119.66660336878972, 35.723127545620606]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_036",
        name: "Mountain View Orchards", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Lost Hills, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "335", // MOCK
        fieldCode: "KRN-75-036", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.69923295437461, 35.68857529686281], [-119.68692387720962, 35.68857529686281], [-119.68692387720962, 35.705488220089066], [-119.69923295437461, 35.705488220089066], [-119.69923295437461, 35.68857529686281]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_037",
        name: "Oak Creek Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "273", // MOCK
        fieldCode: "KRN-204-037", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.67300732351227, 35.63839117506417], [-119.66355615918114, 35.63839117506417], [-119.66355615918114, 35.657162230583026], [-119.67300732351227, 35.657162230583026], [-119.67300732351227, 35.63839117506417]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_038",
        name: "Pioneer Estate Farms", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Lost Hills, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "112", // MOCK
        fieldCode: "KRN-2-038", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.58175866155435, 35.66950455649478], [-119.57238067027743, 35.66950455649478], [-119.57238067027743, 35.6824771206986], [-119.58175866155435, 35.6824771206986], [-119.58175866155435, 35.66950455649478]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_039",
        name: "Heritage Grove Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Lost Hills, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "289", // MOCK
        fieldCode: "KRN-75-039", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.75973957844336, 35.71621345338568], [-119.74057280082151, 35.71621345338568], [-119.74057280082151, 35.72728053858329], [-119.75973957844336, 35.72728053858329], [-119.75973957844336, 35.71621345338568]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_040",
        name: "Green Valley Farms", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Lost Hills, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "344", // MOCK
        fieldCode: "KRN-75-040", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.63143411650445, 35.574522778551994], [-119.61175763618591, 35.574522778551994], [-119.61175763618591, 35.58764910973646], [-119.63143411650445, 35.58764910973646], [-119.63143411650445, 35.574522778551994]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_041",
        name: "Mountain View Orchards", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Lost Hills, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "113", // MOCK
        fieldCode: "KRN-2-041", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.61197590264547, 35.64307653921181], [-119.59402538647527, 35.64307653921181], [-119.59402538647527, 35.654896885020484], [-119.61197590264547, 35.654896885020484], [-119.61197590264547, 35.64307653921181]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_042",
        name: "Meadow Ridge Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Lost Hills, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "299", // MOCK
        fieldCode: "KRN-75-042", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.66750046787364, 35.6169070525191], [-119.65454116206426, 35.6169070525191], [-119.65454116206426, 35.63130574711956], [-119.66750046787364, 35.63130574711956], [-119.66750046787364, 35.6169070525191]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_043",
        name: "Valley View Orchards", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "223", // MOCK
        fieldCode: "KRN-204-043", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.59606357785853, 35.71319069273975], [-119.57498145755022, 35.71319069273975], [-119.57498145755022, 35.71931076702909], [-119.59606357785853, 35.71931076702909], [-119.59606357785853, 35.71319069273975]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_044",
        name: "Heritage Grove Ranch", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "190", // MOCK
        fieldCode: "KRN-204-044", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.6846198979668, 35.53087052539797], [-119.6766139701837, 35.53087052539797], [-119.6766139701837, 35.5446889659389], [-119.6846198979668, 35.5446889659389], [-119.6846198979668, 35.53087052539797]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_045",
        name: "Valley View Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Lost Hills, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "239", // MOCK
        fieldCode: "KRN-204-045", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.76882317753494, 35.497992568180834], [-119.74990005638399, 35.497992568180834], [-119.74990005638399, 35.50437857514248], [-119.76882317753494, 35.50437857514248], [-119.76882317753494, 35.497992568180834]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_046",
        name: "Valley View Orchards", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "159", // MOCK
        fieldCode: "KRN-54-046", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.38466652738738, 35.592519578323206], [-119.37583975375883, 35.592519578323206], [-119.37583975375883, 35.61106309689498], [-119.38466652738738, 35.61106309689498], [-119.38466652738738, 35.592519578323206]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_047",
        name: "Oak Creek Orchards", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "51", // MOCK
        fieldCode: "KRN-54-047", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.47564664124457, 35.648891787455405], [-119.46185121900828, 35.648891787455405], [-119.46185121900828, 35.656778315241304], [-119.47564664124457, 35.656778315241304], [-119.47564664124457, 35.648891787455405]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_048",
        name: "Sierra Farms Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "253", // MOCK
        fieldCode: "KRN-204-048", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.35041008562158, 35.45500100966126], [-119.3294803174588, 35.45500100966126], [-119.3294803174588, 35.47391662370649], [-119.35041008562158, 35.47391662370649], [-119.35041008562158, 35.45500100966126]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_049",
        name: "Valley View Ranch", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "180", // MOCK
        fieldCode: "KRN-1-049", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.41975185976138, 35.65780410763368], [-119.40413844973322, 35.65780410763368], [-119.40413844973322, 35.675230071762016], [-119.41975185976138, 35.675230071762016], [-119.41975185976138, 35.65780410763368]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_050",
        name: "Valley View Farms", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "54", // MOCK
        fieldCode: "KRN-54-050", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.3071334723522, 35.47163513398204], [-119.28441002214603, 35.47163513398204], [-119.28441002214603, 35.48985000710045], [-119.3071334723522, 35.48985000710045], [-119.3071334723522, 35.47163513398204]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_051",
        name: "Meadow Ridge Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "156", // MOCK
        fieldCode: "KRN-54-051", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.39986710356919, 35.693886045284856], [-119.3807222100491, 35.693886045284856], [-119.3807222100491, 35.701350980697455], [-119.39986710356919, 35.701350980697455], [-119.39986710356919, 35.693886045284856]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_052",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "156", // MOCK
        fieldCode: "KRN-1-052", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.27572268460791, 35.44899900992029], [-119.26577680219664, 35.44899900992029], [-119.26577680219664, 35.46744975588724], [-119.27572268460791, 35.46744975588724], [-119.27572268460791, 35.44899900992029]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_053",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "211", // MOCK
        fieldCode: "KRN-204-053", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.33164103484059, 35.44451379657769], [-119.32258636544971, 35.44451379657769], [-119.32258636544971, 35.45602239184496], [-119.33164103484059, 35.45602239184496], [-119.33164103484059, 35.44451379657769]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_054",
        name: "Valley View Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "174", // MOCK
        fieldCode: "KRN-204-054", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.32774701524315, 35.412528593491324], [-119.31912744900765, 35.412528593491324], [-119.31912744900765, 35.426425338666796], [-119.32774701524315, 35.426425338666796], [-119.32774701524315, 35.412528593491324]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_055",
        name: "Green Valley Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "146", // MOCK
        fieldCode: "KRN-2-055", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.42555736419835, 35.49275624978956], [-119.40599235208357, 35.49275624978956], [-119.40599235208357, 35.505477453597415], [-119.42555736419835, 35.505477453597415], [-119.42555736419835, 35.49275624978956]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_056",
        name: "Pioneer Estate Ranch", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "52", // MOCK
        fieldCode: "KRN-54-056", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.21127451743325, 35.4756312767802], [-119.19552645098378, 35.4756312767802], [-119.19552645098378, 35.48830532431308], [-119.21127451743325, 35.48830532431308], [-119.21127451743325, 35.4756312767802]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_057",
        name: "Heritage Grove Ranch", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "344", // MOCK
        fieldCode: "KRN-75-057", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.2419542763557, 35.396973400465875], [-119.22491402067004, 35.396973400465875], [-119.22491402067004, 35.41396549508523], [-119.2419542763557, 35.41396549508523], [-119.2419542763557, 35.396973400465875]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_058",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "210", // MOCK
        fieldCode: "KRN-204-058", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.22881573021535, 35.44005303235224], [-119.2175357537859, 35.44005303235224], [-119.2175357537859, 35.45649568545325], [-119.22881573021535, 35.45649568545325], [-119.22881573021535, 35.44005303235224]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_059",
        name: "Golden Fields Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "152", // MOCK
        fieldCode: "KRN-54-059", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.31105666370973, 35.67290703891956], [-119.29139996702122, 35.67290703891956], [-119.29139996702122, 35.69066608762607], [-119.31105666370973, 35.69066608762607], [-119.31105666370973, 35.67290703891956]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_060",
        name: "Golden Fields Farms", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "266", // MOCK
        fieldCode: "KRN-75-060", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.23509585012977, 35.62597847476419], [-119.22378870391245, 35.62597847476419], [-119.22378870391245, 35.643346503724665], [-119.23509585012977, 35.643346503724665], [-119.23509585012977, 35.62597847476419]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_061",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "108", // MOCK
        fieldCode: "KRN-1-061", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.49543259614876, 35.49309776619066], [-119.47354729794509, 35.49309776619066], [-119.47354729794509, 35.509870826782006], [-119.49543259614876, 35.509870826782006], [-119.49543259614876, 35.49309776619066]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_062",
        name: "Sunset Ranch Ranch", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "96", // MOCK
        fieldCode: "KRN-1-062", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.38326000475908, 35.56592577882977], [-119.36068024836626, 35.56592577882977], [-119.36068024836626, 35.58348460766765], [-119.38326000475908, 35.58348460766765], [-119.38326000475908, 35.56592577882977]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_063",
        name: "Sunset Ranch Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "130", // MOCK
        fieldCode: "KRN-2-063", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.3034855883194, 35.4394460650393], [-119.29468346137028, 35.4394460650393], [-119.29468346137028, 35.4455173650152], [-119.3034855883194, 35.4455173650152], [-119.3034855883194, 35.4394460650393]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_064",
        name: "Sierra Farms Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "117", // MOCK
        fieldCode: "KRN-1-064", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.47631186025353, 35.39073010377647], [-119.46576387539801, 35.39073010377647], [-119.46576387539801, 35.40967020211249], [-119.47631186025353, 35.40967020211249], [-119.47631186025353, 35.39073010377647]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_065",
        name: "Mountain View Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "350", // MOCK
        fieldCode: "KRN-75-065", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.28516797592896, 35.62743281536338], [-119.26183238968419, 35.62743281536338], [-119.26183238968419, 35.64563802969758], [-119.28516797592896, 35.64563802969758], [-119.28516797592896, 35.62743281536338]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_066",
        name: "Mountain View Ranch", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "215", // MOCK
        fieldCode: "KRN-204-066", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.29173754647057, 35.47598055988555], [-119.28366047469602, 35.47598055988555], [-119.28366047469602, 35.49186117679796], [-119.29173754647057, 35.49186117679796], [-119.29173754647057, 35.47598055988555]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_067",
        name: "Meadow Ridge Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "210", // MOCK
        fieldCode: "KRN-2-067", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.4115107388741, 35.49205336265834], [-119.39314057979313, 35.49205336265834], [-119.39314057979313, 35.51187963449881], [-119.4115107388741, 35.51187963449881], [-119.4115107388741, 35.49205336265834]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_068",
        name: "River Bend Orchards", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "159", // MOCK
        fieldCode: "KRN-2-068", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.363141599128, 35.611753649631744], [-119.35510600992049, 35.611753649631744], [-119.35510600992049, 35.62802703385943], [-119.363141599128, 35.62802703385943], [-119.363141599128, 35.611753649631744]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_069",
        name: "Golden Fields Orchards", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "337", // MOCK
        fieldCode: "KRN-75-069", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.21392084142283, 35.64976400028541], [-119.19415578165618, 35.64976400028541], [-119.19415578165618, 35.66509042378683], [-119.21392084142283, 35.66509042378683], [-119.21392084142283, 35.64976400028541]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_070",
        name: "Sunset Ranch Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "332", // MOCK
        fieldCode: "KRN-75-070", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.3716900480525, 35.67798460023906], [-119.35792707565821, 35.67798460023906], [-119.35792707565821, 35.69280441725013], [-119.3716900480525, 35.69280441725013], [-119.3716900480525, 35.67798460023906]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_071",
        name: "Valley View Orchards", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Pistachios",
        variety: "Kerman",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🥜",
        cropImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "198", // MOCK
        fieldCode: "KRN-204-071", // MOCK
        color: "#7FB069",
        lightColor: "#B3D9A1",
        cdl_code: 204
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.3004200908306, 35.648417434513064], [-119.28937225229954, 35.648417434513064], [-119.28937225229954, 35.66296680048114], [-119.3004200908306, 35.66296680048114], [-119.3004200908306, 35.648417434513064]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_072",
        name: "Mountain View Ranch", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Tomatoes",
        variety: "Processing",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🍅",
        cropImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "139", // MOCK
        fieldCode: "KRN-54-072", // MOCK
        color: "#FF4757",
        lightColor: "#FF8A93",
        cdl_code: 54
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.39140751143124, 35.58754333589959], [-119.36755872903633, 35.58754333589959], [-119.36755872903633, 35.60329102575094], [-119.39140751143124, 35.60329102575094], [-119.39140751143124, 35.58754333589959]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_073",
        name: "Golden Fields Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "307", // MOCK
        fieldCode: "KRN-75-073", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.38549644970738, 35.678923084572915], [-119.37147928999687, 35.678923084572915], [-119.37147928999687, 35.68667223089405], [-119.38549644970738, 35.68667223089405], [-119.38549644970738, 35.678923084572915]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_074",
        name: "Golden Fields Orchards", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "339", // MOCK
        fieldCode: "KRN-75-074", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.43991963386145, 35.44210630864299], [-119.42233012480722, 35.44210630864299], [-119.42233012480722, 35.448271500038615], [-119.43991963386145, 35.448271500038615], [-119.43991963386145, 35.44210630864299]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_075",
        name: "Golden Fields Ranch", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Shafter-Wasco, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "195", // MOCK
        fieldCode: "KRN-2-075", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.33751285878127, 35.47226655635112], [-119.31746529923676, 35.47226655635112], [-119.31746529923676, 35.49019303786812], [-119.33751285878127, 35.49019303786812], [-119.33751285878127, 35.47226655635112]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_076",
        name: "Green Valley Farms", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Delano, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "175", // MOCK
        fieldCode: "KRN-69-076", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.35537157772845, 35.68288462896467], [-119.33323028992857, 35.68288462896467], [-119.33323028992857, 35.69269962082723], [-119.35537157772845, 35.69269962082723], [-119.35537157772845, 35.68288462896467]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_077",
        name: "Golden Fields Farms", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Delano, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "309", // MOCK
        fieldCode: "KRN-75-077", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.28964484691049, 35.72547143406289], [-119.27440372125004, 35.72547143406289], [-119.27440372125004, 35.73268173608802], [-119.28964484691049, 35.73268173608802], [-119.28964484691049, 35.72547143406289]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_078",
        name: "Heritage Grove Farms", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Delano, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "259", // MOCK
        fieldCode: "KRN-75-078", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.29805727445094, 35.726686148859095], [-119.27756673709132, 35.726686148859095], [-119.27756673709132, 35.74339388623964], [-119.29805727445094, 35.74339388623964], [-119.29805727445094, 35.726686148859095]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_079",
        name: "Meadow Ridge Ranch", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Delano, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "242", // MOCK
        fieldCode: "KRN-72-079", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.34640420142557, 35.72483819623059], [-119.3288752206438, 35.72483819623059], [-119.3288752206438, 35.74146112922851], [-119.34640420142557, 35.74146112922851], [-119.34640420142557, 35.72483819623059]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_080",
        name: "Sunburst Fields Orchards", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Delano, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "217", // MOCK
        fieldCode: "KRN-69-080", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.30852132415936, 35.79761712882787], [-119.29686870729194, 35.79761712882787], [-119.29686870729194, 35.80570798290797], [-119.30852132415936, 35.80570798290797], [-119.30852132415936, 35.79761712882787]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_081",
        name: "Meadow Ridge Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Delano, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "207", // MOCK
        fieldCode: "KRN-69-081", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.28292791725823, 35.804665242119334], [-119.26231083089812, 35.804665242119334], [-119.26231083089812, 35.81960600891022], [-119.28292791725823, 35.81960600891022], [-119.28292791725823, 35.804665242119334]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_082",
        name: "Sunburst Fields Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Delano, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "155", // MOCK
        fieldCode: "KRN-69-082", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.23284021419913, 35.67347177029109], [-119.22409979975463, 35.67347177029109], [-119.22409979975463, 35.68910598585197], [-119.23284021419913, 35.68910598585197], [-119.23284021419913, 35.67347177029109]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_083",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Delano, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "151", // MOCK
        fieldCode: "KRN-72-083", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.30095646434951, 35.821701332572005], [-119.28430602008642, 35.821701332572005], [-119.28430602008642, 35.83553460675385], [-119.30095646434951, 35.83553460675385], [-119.30095646434951, 35.821701332572005]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_084",
        name: "Sunset Ranch Ranch", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Delano, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "206", // MOCK
        fieldCode: "KRN-72-084", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.24480682827098, 35.80971927522619], [-119.22543209378065, 35.80971927522619], [-119.22543209378065, 35.819891434631394], [-119.24480682827098, 35.819891434631394], [-119.24480682827098, 35.80971927522619]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_085",
        name: "Sierra Farms Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Delano, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "239", // MOCK
        fieldCode: "KRN-75-085", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.34373020400959, 35.85945397525722], [-119.32079006284472, 35.85945397525722], [-119.32079006284472, 35.87472233602501], [-119.34373020400959, 35.87472233602501], [-119.34373020400959, 35.85945397525722]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_086",
        name: "Golden Fields Ranch", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Delano, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "190", // MOCK
        fieldCode: "KRN-69-086", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.18640389236414, 35.74364033849377], [-119.17194405490422, 35.74364033849377], [-119.17194405490422, 35.75506843271565], [-119.18640389236414, 35.75506843271565], [-119.18640389236414, 35.74364033849377]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_087",
        name: "Sunburst Fields Ranch", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Pomegranates",
        variety: "Wonderful",
        location: "Delano, Kern County, CA",
        emoji: "🍎",
        cropImage: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "141", // MOCK
        fieldCode: "KRN-217-087", // MOCK
        color: "#E74C3C",
        lightColor: "#F39189",
        cdl_code: 217
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.34135472420849, 35.86009516308676], [-119.32080921686577, 35.86009516308676], [-119.32080921686577, 35.869653194688034], [-119.34135472420849, 35.869653194688034], [-119.34135472420849, 35.86009516308676]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_088",
        name: "Sunset Ranch Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Delano, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "244", // MOCK
        fieldCode: "KRN-75-088", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.18603649916444, 35.665836249865], [-119.1709271007294, 35.665836249865], [-119.1709271007294, 35.683941709061436], [-119.18603649916444, 35.683941709061436], [-119.18603649916444, 35.665836249865]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_089",
        name: "Meadow Ridge Orchards", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Delano, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "191", // MOCK
        fieldCode: "KRN-72-089", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.27394493330405, 35.77424747912997], [-119.25119731289763, 35.77424747912997], [-119.25119731289763, 35.789519780039285], [-119.27394493330405, 35.789519780039285], [-119.27394493330405, 35.77424747912997]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_090",
        name: "Heritage Grove Farms", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Grapes",
        variety: "Table Grapes",
        location: "Delano, Kern County, CA",
        emoji: "🍇",
        cropImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "227", // MOCK
        fieldCode: "KRN-69-090", // MOCK
        color: "#9B59B6",
        lightColor: "#C8A2D4",
        cdl_code: 69
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.34340666159672, 35.86331572435316], [-119.3271378033934, 35.86331572435316], [-119.3271378033934, 35.87363833837853], [-119.34340666159672, 35.87363833837853], [-119.34340666159672, 35.86331572435316]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_091",
        name: "Sierra Farms Farms", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Delano, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "223", // MOCK
        fieldCode: "KRN-72-091", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.35279133241646, 35.71285779312247], [-119.3290726628771, 35.71285779312247], [-119.3290726628771, 35.732391308331174], [-119.35279133241646, 35.732391308331174], [-119.35279133241646, 35.71285779312247]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_092",
        name: "Sunburst Fields Farms", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Citrus",
        variety: "Navel Oranges",
        location: "Delano, Kern County, CA",
        emoji: "🍊",
        cropImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "228", // MOCK
        fieldCode: "KRN-72-092", // MOCK
        color: "#FFA500",
        lightColor: "#FFD280",
        cdl_code: 72
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.32168229790736, 35.7652351588174], [-119.2998994242991, 35.7652351588174], [-119.2998994242991, 35.780776677438276], [-119.32168229790736, 35.780776677438276], [-119.32168229790736, 35.7652351588174]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_093",
        name: "Mountain View Ranch", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Pomegranates",
        variety: "Wonderful",
        location: "Delano, Kern County, CA",
        emoji: "🍎",
        cropImage: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "63", // MOCK
        fieldCode: "KRN-217-093", // MOCK
        color: "#E74C3C",
        lightColor: "#F39189",
        cdl_code: 217
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.33104372977736, 35.72680947470268], [-119.31383558976871, 35.72680947470268], [-119.31383558976871, 35.737496490657506], [-119.33104372977736, 35.737496490657506], [-119.33104372977736, 35.72680947470268]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_094",
        name: "Meadow Ridge Farms", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "54", // MOCK
        fieldCode: "KRN-1-094", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.18332710706098, 35.71561803653345], [-119.16739282631936, 35.71561803653345], [-119.16739282631936, 35.723751895664556], [-119.18332710706098, 35.723751895664556], [-119.18332710706098, 35.71561803653345]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_095",
        name: "Valley View Ranch", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Alfalfa",
        variety: "Hay",
        location: "McFarland, Kern County, CA",
        emoji: "🌱",
        cropImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "198", // MOCK
        fieldCode: "KRN-36-095", // MOCK
        color: "#76D7C4",
        lightColor: "#ABE7DC",
        cdl_code: 36
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.30978748696332, 35.67283794938844], [-119.28656130094579, 35.67283794938844], [-119.28656130094579, 35.68390500428596], [-119.30978748696332, 35.68390500428596], [-119.30978748696332, 35.67283794938844]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_096",
        name: "Valley View Orchards", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "177", // MOCK
        fieldCode: "KRN-1-096", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.294785625335, 35.65367256884313], [-119.28044146238891, 35.65367256884313], [-119.28044146238891, 35.667150011336865], [-119.294785625335, 35.667150011336865], [-119.294785625335, 35.65367256884313]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_097",
        name: "Heritage Grove Farms", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "112", // MOCK
        fieldCode: "KRN-1-097", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.31796001228165, 35.74525295715681], [-119.30092492682599, 35.74525295715681], [-119.30092492682599, 35.75274981751217], [-119.31796001228165, 35.75274981751217], [-119.31796001228165, 35.74525295715681]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_098",
        name: "Sunset Ranch Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "69", // MOCK
        fieldCode: "KRN-1-098", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.27762612878196, 35.745383097708476], [-119.25676793163389, 35.745383097708476], [-119.25676793163389, 35.75195704092365], [-119.27762612878196, 35.75195704092365], [-119.27762612878196, 35.745383097708476]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_099",
        name: "Green Valley Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "McFarland, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "211", // MOCK
        fieldCode: "KRN-2-099", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.22421336865193, 35.620974806349395], [-119.20492667310876, 35.620974806349395], [-119.20492667310876, 35.637644629478814], [-119.22421336865193, 35.637644629478814], [-119.22421336865193, 35.620974806349395]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_100",
        name: "Golden Fields Orchards", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "103", // MOCK
        fieldCode: "KRN-1-100", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.1671907997007, 35.741717646657925], [-119.14472966927457, 35.741717646657925], [-119.14472966927457, 35.75250830230706], [-119.1671907997007, 35.75250830230706], [-119.1671907997007, 35.741717646657925]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_101",
        name: "Green Valley Farms", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Alfalfa",
        variety: "Hay",
        location: "McFarland, Kern County, CA",
        emoji: "🌱",
        cropImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "106", // MOCK
        fieldCode: "KRN-36-101", // MOCK
        color: "#76D7C4",
        lightColor: "#ABE7DC",
        cdl_code: 36
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.16547128012331, 35.607824697124315], [-119.14374378590665, 35.607824697124315], [-119.14374378590665, 35.61534102532774], [-119.16547128012331, 35.61534102532774], [-119.16547128012331, 35.607824697124315]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_102",
        name: "Sunset Ranch Orchards", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "65", // MOCK
        fieldCode: "KRN-1-102", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.29164262695251, 35.688112711972686], [-119.26952839390647, 35.688112711972686], [-119.26952839390647, 35.698932482199744], [-119.29164262695251, 35.698932482199744], [-119.29164262695251, 35.688112711972686]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_103",
        name: "Oak Creek Ranch", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "93", // MOCK
        fieldCode: "KRN-1-103", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.29321451685152, 35.71532646595647], [-119.2720085263878, 35.71532646595647], [-119.2720085263878, 35.731076455254886], [-119.29321451685152, 35.731076455254886], [-119.29321451685152, 35.71532646595647]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_104",
        name: "Pioneer Estate Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "76", // MOCK
        fieldCode: "KRN-1-104", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.28671646111412, 35.699578152584344], [-119.26805163278452, 35.699578152584344], [-119.26805163278452, 35.71933362578125], [-119.28671646111412, 35.71933362578125], [-119.28671646111412, 35.699578152584344]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_105",
        name: "Mountain View Farms", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "90", // MOCK
        fieldCode: "KRN-1-105", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.21395182301146, 35.686376021037006], [-119.19006625549551, 35.686376021037006], [-119.19006625549551, 35.70307687272269], [-119.21395182301146, 35.70307687272269], [-119.21395182301146, 35.686376021037006]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_106",
        name: "Sierra Farms Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "McFarland, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "109", // MOCK
        fieldCode: "KRN-1-106", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.2984351169762, 35.596273735433456], [-119.28748277212178, 35.596273735433456], [-119.28748277212178, 35.61076787489327], [-119.2984351169762, 35.61076787489327], [-119.2984351169762, 35.596273735433456]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_107",
        name: "Oak Creek Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Alfalfa",
        variety: "Hay",
        location: "McFarland, Kern County, CA",
        emoji: "🌱",
        cropImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "83", // MOCK
        fieldCode: "KRN-36-107", // MOCK
        color: "#76D7C4",
        lightColor: "#ABE7DC",
        cdl_code: 36
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.19605412899763, 35.68235944108093], [-119.18641025429041, 35.68235944108093], [-119.18641025429041, 35.69914779431504], [-119.19605412899763, 35.69914779431504], [-119.19605412899763, 35.68235944108093]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_108",
        name: "Oak Creek Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "McFarland, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "202", // MOCK
        fieldCode: "KRN-2-108", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.19593515367099, 35.74710704278814], [-119.18370105575359, 35.74710704278814], [-119.18370105575359, 35.7561655895096], [-119.19593515367099, 35.7561655895096], [-119.19593515367099, 35.74710704278814]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_109",
        name: "Green Valley Orchards", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Onions",
        variety: "Yellow",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🧅",
        cropImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "125", // MOCK
        fieldCode: "KRN-49-109", // MOCK
        color: "#8B4513",
        lightColor: "#D2691E",
        cdl_code: 49
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.03098034548437, 35.44903808003661], [-119.014304384884, 35.44903808003661], [-119.014304384884, 35.45716488673849], [-119.03098034548437, 35.45716488673849], [-119.03098034548437, 35.44903808003661]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_110",
        name: "Heritage Grove Farms", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Potatoes",
        variety: "Russet",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥔",
        cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "95", // MOCK
        fieldCode: "KRN-43-110", // MOCK
        color: "#C39BD3",
        lightColor: "#DBBED9",
        cdl_code: 43
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.0043446419145, 35.47093897602203], [-118.981651610322, 35.47093897602203], [-118.981651610322, 35.47869033299889], [-119.0043446419145, 35.47869033299889], [-119.0043446419145, 35.47093897602203]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_111",
        name: "Green Valley Farms", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Potatoes",
        variety: "Russet",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥔",
        cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "99", // MOCK
        fieldCode: "KRN-43-111", // MOCK
        color: "#C39BD3",
        lightColor: "#DBBED9",
        cdl_code: 43
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.99855180487299, 35.45941938543445], [-118.98900432028873, 35.45941938543445], [-118.98900432028873, 35.46599180780141], [-118.99855180487299, 35.46599180780141], [-118.99855180487299, 35.45941938543445]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_112",
        name: "Sunburst Fields Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "109", // MOCK
        fieldCode: "KRN-206-112", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.85932376279506, 35.278957378247235], [-118.84893832113359, 35.278957378247235], [-118.84893832113359, 35.294104617892195], [-118.85932376279506, 35.294104617892195], [-118.85932376279506, 35.278957378247235]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_113",
        name: "Mountain View Ranch", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "253", // MOCK
        fieldCode: "KRN-75-113", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.01567349740787, 35.46439600002024], [-118.99908760023868, 35.46439600002024], [-118.99908760023868, 35.48018170686927], [-119.01567349740787, 35.48018170686927], [-119.01567349740787, 35.46439600002024]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_114",
        name: "Heritage Grove Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "27", // MOCK
        fieldCode: "KRN-206-114", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.03951705111025, 35.37527220621543], [-119.0212600609449, 35.37527220621543], [-119.0212600609449, 35.38685859716398], [-119.03951705111025, 35.38685859716398], [-119.03951705111025, 35.37527220621543]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_115",
        name: "Valley View Orchards", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Potatoes",
        variety: "Russet",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥔",
        cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "113", // MOCK
        fieldCode: "KRN-43-115", // MOCK
        color: "#C39BD3",
        lightColor: "#DBBED9",
        cdl_code: 43
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.88176918474115, 35.44596800528067], [-118.87015458384691, 35.44596800528067], [-118.87015458384691, 35.45260685748796], [-118.88176918474115, 35.45260685748796], [-118.88176918474115, 35.44596800528067]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_116",
        name: "Heritage Grove Farms", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Onions",
        variety: "Yellow",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🧅",
        cropImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "169", // MOCK
        fieldCode: "KRN-49-116", // MOCK
        color: "#8B4513",
        lightColor: "#D2691E",
        cdl_code: 49
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.98042764319938, 35.282800151706574], [-118.95831468389208, 35.282800151706574], [-118.95831468389208, 35.29324544309804], [-118.98042764319938, 35.29324544309804], [-118.98042764319938, 35.282800151706574]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_117",
        name: "Sunset Ranch Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "315", // MOCK
        fieldCode: "KRN-75-117", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.91839073663519, 35.478245579310695], [-118.90852580961095, 35.478245579310695], [-118.90852580961095, 35.48953750485086], [-118.91839073663519, 35.48953750485086], [-118.91839073663519, 35.478245579310695]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_118",
        name: "Valley View Farms", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "81", // MOCK
        fieldCode: "KRN-206-118", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.9297625555335, 35.25428180798196], [-118.90770712984914, 35.25428180798196], [-118.90770712984914, 35.274218646815804], [-118.9297625555335, 35.274218646815804], [-118.9297625555335, 35.25428180798196]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_119",
        name: "River Bend Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Potatoes",
        variety: "Russet",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥔",
        cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "102", // MOCK
        fieldCode: "KRN-43-119", // MOCK
        color: "#C39BD3",
        lightColor: "#DBBED9",
        cdl_code: 43
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.92179018757663, 35.43314181420103], [-118.9087873021276, 35.43314181420103], [-118.9087873021276, 35.44734117500965], [-118.92179018757663, 35.44734117500965], [-118.92179018757663, 35.43314181420103]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_120",
        name: "Sierra Farms Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "55", // MOCK
        fieldCode: "KRN-206-120", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.90287191841236, 35.43744700171395], [-118.88894998799265, 35.43744700171395], [-118.88894998799265, 35.44812440259466], [-118.90287191841236, 35.44812440259466], [-118.90287191841236, 35.43744700171395]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_121",
        name: "Valley View Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Almonds",
        variety: "Nonpareil",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🌰",
        cropImage: "https://images.unsplash.com/photo-1508747703725-719777637510", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "229", // MOCK
        fieldCode: "KRN-75-121", // MOCK
        color: "#D4A574",
        lightColor: "#E8D5B8",
        cdl_code: 75
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.03019966521254, 35.278419587514584], [-119.0126476706551, 35.278419587514584], [-119.0126476706551, 35.29754576354389], [-119.03019966521254, 35.29754576354389], [-119.03019966521254, 35.278419587514584]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_122",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Potatoes",
        variety: "Russet",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥔",
        cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "161", // MOCK
        fieldCode: "KRN-43-122", // MOCK
        color: "#C39BD3",
        lightColor: "#DBBED9",
        cdl_code: 43
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.86635124898807, 35.314988647915946], [-118.85210404081728, 35.314988647915946], [-118.85210404081728, 35.328152595798194], [-118.86635124898807, 35.328152595798194], [-118.86635124898807, 35.314988647915946]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_123",
        name: "Valley View Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Onions",
        variety: "Yellow",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🧅",
        cropImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "119", // MOCK
        fieldCode: "KRN-49-123", // MOCK
        color: "#8B4513",
        lightColor: "#D2691E",
        cdl_code: 49
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.05725612449916, 35.34638480095932], [-119.03881477751966, 35.34638480095932], [-119.03881477751966, 35.356497699585795], [-119.05725612449916, 35.356497699585795], [-119.05725612449916, 35.34638480095932]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_124",
        name: "Sunburst Fields Ranch", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Onions",
        variety: "Yellow",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🧅",
        cropImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "31", // MOCK
        fieldCode: "KRN-49-124", // MOCK
        color: "#8B4513",
        lightColor: "#D2691E",
        cdl_code: 49
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.96647736355345, 35.439446762185355], [-118.9465177593587, 35.439446762185355], [-118.9465177593587, 35.44632427839559], [-118.96647736355345, 35.44632427839559], [-118.96647736355345, 35.439446762185355]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_125",
        name: "Green Valley Orchards", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Potatoes",
        variety: "Russet",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥔",
        cropImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "140", // MOCK
        fieldCode: "KRN-43-125", // MOCK
        color: "#C39BD3",
        lightColor: "#DBBED9",
        cdl_code: 43
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.89251380171642, 35.42066936458095], [-118.87550608539551, 35.42066936458095], [-118.87550608539551, 35.427161197373174], [-118.89251380171642, 35.427161197373174], [-118.89251380171642, 35.42066936458095]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_126",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Valley Vista Growers", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "49", // MOCK
        fieldCode: "KRN-206-126", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.94824013764155, 35.447491104400804], [-118.936888813328, 35.447491104400804], [-118.936888813328, 35.45757003019241], [-118.94824013764155, 35.45757003019241], [-118.94824013764155, 35.447491104400804]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_127",
        name: "Sunburst Fields Ranch", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2018, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "77", // MOCK
        fieldCode: "KRN-206-127", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.95445990849682, 35.264167319517355], [-118.93212887715607, 35.264167319517355], [-118.93212887715607, 35.28338622679152], [-118.95445990849682, 35.28338622679152], [-118.95445990849682, 35.264167319517355]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_128",
        name: "Valley View Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Carrots",
        variety: "Fresh Market",
        location: "Bakersfield East, Kern County, CA",
        emoji: "🥕",
        cropImage: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "69", // MOCK
        fieldCode: "KRN-206-128", // MOCK
        color: "#E67E22",
        lightColor: "#F3B581",
        cdl_code: 206
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.89733489952168, 35.48897565001658], [-118.87375018605637, 35.48897565001658], [-118.87375018605637, 35.50867439757531], [-118.89733489952168, 35.50867439757531], [-118.89733489952168, 35.48897565001658]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_129",
        name: "Mountain View Farms", // MOCK
        owner: "Heritage Farm Partners", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2023, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "115", // MOCK
        fieldCode: "KRN-1-129", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.04706532277736, 35.392147863840385], [-119.02380325358546, 35.392147863840385], [-119.02380325358546, 35.39857460800061], [-119.04706532277736, 35.39857460800061], [-119.04706532277736, 35.392147863840385]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_130",
        name: "Meadow Ridge Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2019, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "78", // MOCK
        fieldCode: "KRN-1-130", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.1365340000334, 35.5585825225744], [-119.1242634612109, 35.5585825225744], [-119.1242634612109, 35.57458428069343], [-119.1365340000334, 35.57458428069343], [-119.1365340000334, 35.5585825225744]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_131",
        name: "Valley View Orchards", // MOCK
        owner: "Johnson Family Farms", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Bakersfield North, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "143", // MOCK
        fieldCode: "KRN-2-131", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.15267056680464, 35.433578555877766], [-119.13461021393293, 35.433578555877766], [-119.13461021393293, 35.443883967139165], [-119.15267056680464, 35.443883967139165], [-119.15267056680464, 35.433578555877766]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_132",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Central Valley Orchards", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Bakersfield North, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "141", // MOCK
        fieldCode: "KRN-2-132", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.99495259070349, 35.49623792042552], [-118.9775087141656, 35.49623792042552], [-118.9775087141656, 35.512272899355615], [-118.99495259070349, 35.512272899355615], [-118.99495259070349, 35.49623792042552]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_133",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Golden State Agriculture", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Bakersfield North, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "107", // MOCK
        fieldCode: "KRN-2-133", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.98180129696533, 35.50677365601304], [-118.96877596762812, 35.50677365601304], [-118.96877596762812, 35.52448902043042], [-118.98180129696533, 35.52448902043042], [-118.98180129696533, 35.50677365601304]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_134",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Bakersfield North, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Ready to Harvest", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "208", // MOCK
        fieldCode: "KRN-2-134", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.03463725130551, 35.45467736869526], [-119.02566002643827, 35.45467736869526], [-119.02566002643827, 35.46170754541859], [-119.03463725130551, 35.46170754541859], [-119.03463725130551, 35.45467736869526]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_135",
        name: "Pioneer Estate Orchards", // MOCK
        owner: "Kern Agricultural Co.", // MOCK
        crop: "Cotton",
        variety: "Upland",
        location: "Bakersfield North, Kern County, CA",
        emoji: "☁️",
        cropImage: "https://images.unsplash.com/photo-1616430285889-7ea8b0aac19e", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Harvested", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "181", // MOCK
        fieldCode: "KRN-2-135", // MOCK
        color: "#FFE5CC",
        lightColor: "#FFF2E6",
        cdl_code: 2
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.0811262025755, 35.54530256026431], [-119.05822400339936, 35.54530256026431], [-119.05822400339936, 35.556593079950964], [-119.0811262025755, 35.556593079950964], [-119.0811262025755, 35.54530256026431]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_136",
        name: "Sierra Farms Ranch", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Alfalfa",
        variety: "Hay",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌱",
        cropImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "131", // MOCK
        fieldCode: "KRN-36-136", // MOCK
        color: "#76D7C4",
        lightColor: "#ABE7DC",
        cdl_code: 36
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.1181147419292, 35.40116883966193], [-119.10166134959705, 35.40116883966193], [-119.10166134959705, 35.420637303828535], [-119.1181147419292, 35.420637303828535], [-119.1181147419292, 35.40116883966193]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_137",
        name: "Green Valley Orchards", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Growing", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "53", // MOCK
        fieldCode: "KRN-1-137", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.09073022867258, 35.51838407368352], [-119.0708397085902, 35.51838407368352], [-119.0708397085902, 35.534645249142486], [-119.09073022867258, 35.534645249142486], [-119.09073022867258, 35.51838407368352]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_138",
        name: "Oak Creek Orchards", // MOCK
        owner: "Sierra Farming LLC", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2021, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "85", // MOCK
        fieldCode: "KRN-1-138", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.1497236366805, 35.544873887758115], [-119.13100390954375, 35.544873887758115], [-119.13100390954375, 35.56273724516309], [-119.1497236366805, 35.56273724516309], [-119.1497236366805, 35.544873887758115]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_139",
        name: "Green Valley Farms", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Alfalfa",
        variety: "Hay",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌱",
        cropImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449", // MOCK
        yearPlanted: 2022, // MOCK
        harvestCycle: "Just Planted", // MOCK
        growthDuration: "Perennial", // MOCK
        acres: "111", // MOCK
        fieldCode: "KRN-36-139", // MOCK
        color: "#76D7C4",
        lightColor: "#ABE7DC",
        cdl_code: 36
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-118.98212044854826, 35.458403404588594], [-118.96389078043903, 35.458403404588594], [-118.96389078043903, 35.46829225889023], [-118.98212044854826, 35.46829225889023], [-118.98212044854826, 35.458403404588594]]]
      }
    },
    {
      type: "Feature",
      properties: {
        id: "field_140",
        name: "Meadow Ridge Orchards", // MOCK
        owner: "Westside Growers Inc.", // MOCK
        crop: "Corn",
        variety: "Field Corn",
        location: "Bakersfield North, Kern County, CA",
        emoji: "🌽",
        cropImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076", // MOCK
        yearPlanted: 2020, // MOCK
        harvestCycle: "Bud Break", // MOCK
        growthDuration: "Annual", // MOCK
        acres: "56", // MOCK
        fieldCode: "KRN-1-140", // MOCK
        color: "#FFD700",
        lightColor: "#FFEB80",
        cdl_code: 1
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-119.04181858135797, 35.5586416238448], [-119.02690508391274, 35.5586416238448], [-119.02690508391274, 35.570865958122305], [-119.04181858135797, 35.570865958122305], [-119.04181858135797, 35.5586416238448]]]
      }
    }
  ]
};

// USDA CDL Standard Color Mappings
export const cropColors: CropColors = {
  Almonds: { fill: '#D4A574', stroke: '#8B7355' },
  Pistachios: { fill: '#7FB069', stroke: '#556B2F' },
  Grapes: { fill: '#9B59B6', stroke: '#6A1B9A' },
  Citrus: { fill: '#FFA500', stroke: '#FF8C00' },
  Alfalfa: { fill: '#76D7C4', stroke: '#148F77' },
  "Double Crop": { fill: '#F4E4C1', stroke: '#DAA520' },
  Cotton: { fill: '#FFE5CC', stroke: '#D68910' },
  Potatoes: { fill: '#C39BD3', stroke: '#76448A' },
  Corn: { fill: '#FFD700', stroke: '#FFA000' },
  Tomatoes: { fill: '#FF4757', stroke: '#D32F2F' },
  "Winter Wheat": { fill: '#F4E4C1', stroke: '#DAA520' },
  Pomegranates: { fill: '#E74C3C', stroke: '#922B21' },
  Carrots: { fill: '#E67E22', stroke: '#A04000' },
  Onions: { fill: '#8B4513', stroke: '#654321' },
  default: { fill: '#7FB069', stroke: '#556B2F' }
};

// Default map center: Central Kern County
export const defaultMapCenter: Coordinates = [-119.20, 35.50];
export const defaultMapZoom: number = 10;