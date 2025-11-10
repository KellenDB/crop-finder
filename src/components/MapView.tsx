import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { cropColors, defaultMapCenter, defaultMapZoom } from '../data/cropData';
import { CropDataCollection, CropProperties, Coordinates } from '../types';

// IMPORTANT: Replace with your actual Mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsYnJ5YW4iLCJhIjoiY21oczk1ODljMWY2ajJqcTR6OHE2bzUwMiJ9.XIHmQ_yTo9__hebWySTucA';

interface MapViewProps {
  cropData: CropDataCollection;
  darkMode: boolean;
  onFieldSelect: (field: CropProperties) => void;
  userLocation: Coordinates | null;
  setUserLocation: (location: Coordinates) => void;
}

export default function MapView({
  cropData,
  darkMode,
  onFieldSelect,
  userLocation,
  setUserLocation
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
      style: darkMode ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/satellite-streets-v12',
      center: defaultMapCenter,
      zoom: defaultMapZoom
    });

    mapRef.current = map;

    const onLoad = () => {
      setMapLoaded(true);

      // Add crop field polygons source (only if not already present)
      if (!map.getSource('crop-fields')) {
        map.addSource('crop-fields', {
          type: 'geojson',
          data: cropData
        } as mapboxgl.GeoJSONSourceRaw);
      }

      // Add fill layer (only if not present)
      if (!map.getLayer('crop-fields-fill')) {
        map.addLayer({
          id: 'crop-fields-fill',
          type: 'fill',
          source: 'crop-fields',
          paint: {
            'fill-color': [
              'match',
              ['get', 'crop'],
              'Almond', cropColors.Almond.fill,
              'Orange', cropColors.Orange.fill,
              'Wheat', cropColors.Wheat.fill,
              'Grapes', cropColors.Grapes.fill,
              'Sunflower', cropColors.Sunflower.fill,
              'Avocado', cropColors.Avocado.fill,
              'Strawberry', cropColors.Strawberry.fill,
              'Tomato', cropColors.Tomato.fill,
              cropColors.default.fill
            ],
            'fill-opacity': 0.3
          }
        });
      }

      if (!map.getLayer('crop-fields-outline')) {
        map.addLayer({
          id: 'crop-fields-outline',
          type: 'line',
          source: 'crop-fields',
          paint: {
            'line-color': [
              'match',
              ['get', 'crop'],
              'Almond', cropColors.Almond.stroke,
              'Orange', cropColors.Orange.stroke,
              'Wheat', cropColors.Wheat.stroke,
              'Grapes', cropColors.Grapes.stroke,
              'Sunflower', cropColors.Sunflower.stroke,
              'Avocado', cropColors.Avocado.stroke,
              'Strawberry', cropColors.Strawberry.stroke,
              'Tomato', cropColors.Tomato.stroke,
              cropColors.default.stroke
            ],
            'line-width': 2
          }
        });
      }

      // click handler for polygons
      map.on('click', 'crop-fields-fill', (e) => {
        if (e.features && e.features.length > 0) {
          onFieldSelect(e.features[0].properties as CropProperties);
        }
      });

      // change cursor on hover
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

          // Add user location marker
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
    // Intentionally empty dependency array: initialize once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update map style when dark mode changes (and re-add source/layers after style load)
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;

    const map = mapRef.current;
    const newStyle = darkMode ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/satellite-streets-v12';

    // setStyle replaces sources/layers, so re-add on 'style.load'
    map.setStyle(newStyle);

    const onStyleLoad = () => {
      // add source if missing
      if (!map.getSource('crop-fields')) {
        map.addSource('crop-fields', {
          type: 'geojson',
          data: cropData
        } as mapboxgl.GeoJSONSourceRaw);
      }

      // add layers if missing
      if (!map.getLayer('crop-fields-fill')) {
        map.addLayer({
          id: 'crop-fields-fill',
          type: 'fill',
          source: 'crop-fields',
          paint: {
            'fill-color': [
              'match',
              ['get', 'crop'],
              'Almond', cropColors.Almond.fill,
              'Orange', cropColors.Orange.fill,
              'Wheat', cropColors.Wheat.fill,
              'Grapes', cropColors.Grapes.fill,
              'Sunflower', cropColors.Sunflower.fill,
              'Avocado', cropColors.Avocado.fill,
              'Strawberry', cropColors.Strawberry.fill,
              'Tomato', cropColors.Tomato.fill,
              cropColors.default.fill
            ],
            'fill-opacity': 0.3
          }
        });
      }

      if (!map.getLayer('crop-fields-outline')) {
        map.addLayer({
          id: 'crop-fields-outline',
          type: 'line',
          source: 'crop-fields',
          paint: {
            'line-color': [
              'match',
              ['get', 'crop'],
              'Almond', cropColors.Almond.stroke,
              'Orange', cropColors.Orange.stroke,
              'Wheat', cropColors.Wheat.stroke,
              'Grapes', cropColors.Grapes.stroke,
              'Sunflower', cropColors.Sunflower.stroke,
              'Avocado', cropColors.Avocado.stroke,
              'Strawberry', cropColors.Strawberry.stroke,
              'Tomato', cropColors.Tomato.stroke,
              cropColors.default.stroke
            ],
            'line-width': 2
          }
        });
      }
    };

    map.once('style.load', onStyleLoad);

    return () => {
      map.off('style.load', onStyleLoad);
    };
  }, [darkMode, mapLoaded, cropData]);

  // Update markers and GeoJSON source when cropData changes
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    const map = mapRef.current;

    // Remove existing non-user markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers for each feature (centroid-ish)
    cropData.features.forEach(feature => {
      // handle geometry shape: assume Polygon in GeoJSON (coordinates: [ [ [lng, lat], ... ] ])
      const coords = feature.geometry.type === 'Polygon'
        ? (feature.geometry.coordinates[0] as [number, number][])
        : feature.geometry.type === 'MultiPolygon'
        ? (feature.geometry.coordinates[0][0] as unknown as [number, number][])
        : null;

      if (!coords || coords.length === 0) return;

      const center: [number, number] = [
        coords.reduce((sum, coord) => sum + coord[0], 0) / coords.length,
        coords.reduce((sum, coord) => sum + coord[1], 0) / coords.length
      ];

      const el = document.createElement('div');
      el.className = 'crop-marker';
      el.innerHTML = feature.properties.emoji ?? '';
      el.addEventListener('click', () => {
        onFieldSelect(feature.properties);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat(center)
        .addTo(map);

      markersRef.current.push(marker);
    });

    // Safely update the GeoJSON source data only if source supports setData
    const src = map.getSource('crop-fields');
    // 'setData' is present on GeoJSONSource; guard by checking the property
    if (src && typeof (src as any).setData === 'function') {
      (src as mapboxgl.GeoJSONSource).setData(cropData);
    }

    // cleanup on unmount of this effect: remove markers we created
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, [cropData, mapLoaded, onFieldSelect]);

  // Function to recenter map on user location
  const recenterMap = () => {
    if (mapRef.current && userLocation) {
      mapRef.current.flyTo({
        center: userLocation,
        zoom: 14,
        duration: 1000
      });
    }
  };

  return (
    <>
      <div ref={mapContainerRef} className="absolute inset-0" />

      {/* Floating Action Buttons */}
      <div className="absolute right-4 bottom-32 z-10 flex flex-col gap-2">
        {userLocation && (
          <button
            onClick={recenterMap}
            className={`p-3 rounded-full shadow-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } hover:opacity-80 transition-opacity`}
            title="Center on my location"
            aria-label="Center on my location"
          >
            🎯
          </button>
        )}
      </div>
    </>
  );
}
