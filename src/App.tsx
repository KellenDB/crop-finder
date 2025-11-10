import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import FieldInfoPanel from './components/FieldInfoPanel';
import { mockCropData } from './data/cropData';
import { CropProperties, Coordinates } from './types';
import './styles/index.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedField, setSelectedField] = useState<CropProperties | null>(null);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter crop data based on search query
  const filteredCropData = useMemo(() => {
    if (!searchQuery) return mockCropData;

    const query = searchQuery.toLowerCase();
    const filteredFeatures = mockCropData.features.filter(feature => {
      const props = feature.properties;
      return (
        props.crop.toLowerCase().includes(query) ||
        props.name.toLowerCase().includes(query) ||
        props.location.toLowerCase().includes(query) ||
        (props.variety && props.variety.toLowerCase().includes(query))
      );
    });

    return {
      ...mockCropData,
      features: filteredFeatures
    };
  }, [searchQuery]);

  // Add dark mode class to html element
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`h-screen w-screen ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fieldCount={filteredCropData.features.length}
        currentLocation="Riverside, California"
      />

      <MapView
        cropData={filteredCropData}
        darkMode={darkMode}
        onFieldSelect={setSelectedField}
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />

      <FieldInfoPanel
        field={selectedField}
        darkMode={darkMode}
        onClose={() => setSelectedField(null)}
      />

      {/* Loading/Permission Message */}
      {!userLocation && (
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } p-6 rounded-lg shadow-xl text-center fade-in max-w-sm`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            📍 Allow location access to see crops near you
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            You can still explore the map without location services
          </p>
        </div>
      )}
    </div>
  );
}

export default App;