import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { cropColors, defaultMapCenter, defaultMapZoom } from '../../data/cropData';
import { CropDataCollection, CropProperties, Coordinates, MapViewType } from '../../types';

// IMPORTANT: Replace with your actual Mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsYnJ5YW4iLCJhIjoiY21oczk1ODljMWY2ajJqcTR6OHE2bzUwMiJ9.XIHmQ_yTo9__hebWySTucA';

interface MapViewProps {
  cropData: CropDataCollection;
  onFieldSelect: (field: CropProperties) => void;
  userLocation: Coordinates | null;
  setUserLocation: (location: Coordinates) => void;
  mapView: MapViewType;
  showCropFields: boolean;
}

const getMapStyle = (view: MapViewType): string => {
  switch(view) {
    case 'satellite':
      return 'mapbox://styles/mapbox/satellite-streets-v12';
    case 'terrain':
      return 'mapbox://styles/mapbox/outdoors-v12';
    case 'standard':
    default:
      return 'mapbox://styles/mapbox/streets-v12';
  }
};

// Helper to generate Mapbox expression for crop colors
const getCropColorExpression = (type: 'fill' | 'stroke') => {
  const expr: any[] = ['match', ['get', 'crop']];
  Object.keys(cropColors).forEach(crop => {
    if (crop !== 'default') {
      expr.push(crop, type === 'fill' ? cropColors[crop].fill : cropColors[crop].stroke);
    }
  });
  expr.push(type === 'fill' ? cropColors.default.fill : cropColors.default.stroke);
  return expr;
};

export default function MapView({
  cropData,
  onFieldSelect,
  userLocation,
  setUserLocation,
  mapView,
  showCropFields
}: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map (runs once)
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: getMapStyle(mapView),
      center: defaultMapCenter,
      zoom: defaultMapZoom
    });

    mapRef.current = map;

    const onLoad = () => {
      setMapLoaded(true);

      // Add crop field polygons source
      if (!map.getSource('crop-fields')) {
        map.addSource('crop-fields', {
          type: 'geojson',
          data: cropData
        } as mapboxgl.GeoJSONSourceRaw);
      }

      // Add fill layer
      if (!map.getLayer('crop-fields-fill')) {
        map.addLayer({
          id: 'crop-fields-fill',
          type: 'fill',
          source: 'crop-fields',
          paint: {
            'fill-color': getCropColorExpression('fill'),
            'fill-opacity': showCropFields ? 0.3 : 0
          }
        });
      }

      if (!map.getLayer('crop-fields-outline')) {
        map.addLayer({
          id: 'crop-fields-outline',
          type: 'line',
          source: 'crop-fields',
          paint: {
            'line-color': getCropColorExpression('stroke'),
            'line-width': 2,
            'line-opacity': showCropFields ? 1 : 0
          }
        });
      }

      // Click handler
      map.on('click', 'crop-fields-fill', (e) => {
        if (e.features && e.features.length > 0) {
          onFieldSelect(e.features[0].properties as CropProperties);
        }
      });

      // Cursor
      map.on('mouseenter', 'crop-fields-fill', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'crop-fields-fill', () => {
        map.getCanvas().style.cursor = '';
      });
    };

    map.on('load', onLoad);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const coords: Coordinates = [position.coords.longitude, position.coords.latitude];
          setUserLocation(coords);

          const el = document.createElement('div');
          el.className = 'user-location-marker';
          el.innerHTML = '📍';

          new mapboxgl.Marker(el)
            .setLngLat(coords)
            .addTo(map);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }

    return () => {
      map.off('load', onLoad);
      if (map) map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update map style when mapView changes
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;

    const map = mapRef.current;
    const newStyle = getMapStyle(mapView);

    map.setStyle(newStyle);

    const onStyleLoad = () => {
      // Re-add source and layers
      if (!map.getSource('crop-fields')) {
        map.addSource('crop-fields', {
          type: 'geojson',
          data: cropData
        } as mapboxgl.GeoJSONSourceRaw);
      }

      if (!map.getLayer('crop-fields-fill')) {
        map.addLayer({
          id: 'crop-fields-fill',
          type: 'fill',
          source: 'crop-fields',
          paint: {
            'fill-color': getCropColorExpression('fill'),
            'fill-opacity': showCropFields ? 0.3 : 0
          }
        });
      }

      if (!map.getLayer('crop-fields-outline')) {
        map.addLayer({
          id: 'crop-fields-outline',
          type: 'line',
          source: 'crop-fields',
          paint: {
            'line-color': getCropColorExpression('stroke'),
            'line-width': 2,
            'line-opacity': showCropFields ? 1 : 0
          }
        });
      }
    };

    map.once('style.load', onStyleLoad);

    return () => {
      map.off('style.load', onStyleLoad);
    };
  }, [mapView, mapLoaded, cropData, showCropFields]);

  // Update layer visibility when showCropFields changes
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    
    const map = mapRef.current;
    
    if (map.getLayer('crop-fields-fill')) {
      map.setPaintProperty('crop-fields-fill', 'fill-opacity', showCropFields ? 0.3 : 0);
    }
    
    if (map.getLayer('crop-fields-outline')) {
      map.setPaintProperty('crop-fields-outline', 'line-opacity', showCropFields ? 1 : 0);
    }
  }, [showCropFields, mapLoaded]);

  return <div ref={mapContainerRef} className="absolute inset-0" />;
}
