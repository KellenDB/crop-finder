import { useState, useMemo } from 'react';
import MobileFrame from './components/layout/MobileFrame';
import BottomPanel from './components/layout/BottomPanel';
import MapView from './components/map/MapView';
import TopBar from './components/navigation/TopBar';
import SearchBar from './components/navigation/SearchBar';
import LayerToggle from './components/navigation/LayerToggle';
import LayerDropdown from './components/navigation/LayerDropdown';
import SlideOutMenu from './components/navigation/SlideOutMenu';
import FieldCard from './components/field/FieldCard';
import { mockCropData } from './data/cropData';
import { CropProperties, Coordinates, MapViewType, LayerSettings } from './types';
import './styles/index.css';

function App() {
  // State
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>('field-001');
  const [savedFields, setSavedFields] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOnlySaved, setShowOnlySaved] = useState(false);
  const [layersOpen, setLayersOpen] = useState(false);
  const [mapView, setMapView] = useState<MapViewType>('standard');
  const [layerSettings, setLayerSettings] = useState<LayerSettings>({
    cropFields: true
  });
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter crop data based on search query and saved filter
  const filteredCropData = useMemo(() => {
    let filtered = mockCropData.features;

    // Filter by saved fields if enabled
    if (showOnlySaved) {
      filtered = filtered.filter(feature => savedFields.includes(feature.properties.id));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(feature => {
        const props = feature.properties;
        return (
          props.crop.toLowerCase().includes(query) ||
          props.name.toLowerCase().includes(query) ||
          props.location.toLowerCase().includes(query) ||
          props.variety.toLowerCase().includes(query)
        );
      });
    }

    return {
      ...mockCropData,
      features: filtered
    };
  }, [searchQuery, showOnlySaved, savedFields]);

  // Get selected field data
  const selectedField = mockCropData.features.find(
    f => f.properties.id === selectedFieldId
  )?.properties || null;

  // Handlers
  const handleFieldSelect = (field: CropProperties) => {
    setSelectedFieldId(field.id);
  };

  const handleToggleSave = (fieldId: string) => {
    setSavedFields(prev => 
      prev.includes(fieldId) 
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const handleLayerToggle = (layer: keyof LayerSettings) => {
    setLayerSettings(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }));
  };

  const handleMyFarmClick = () => {
    setShowOnlySaved(!showOnlySaved);
  };

  return (
    <MobileFrame>
      {/* Map */}
      <MapView
        cropData={filteredCropData}
        onFieldSelect={handleFieldSelect}
        userLocation={userLocation}
        setUserLocation={setUserLocation}
        mapView={mapView}
        showCropFields={layerSettings.cropFields}
      />

      {/* Top Navigation */}
      <TopBar onMenuClick={() => setMenuOpen(true)} />
      
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <LayerToggle 
        onClick={() => setLayersOpen(!layersOpen)}
        isOpen={layersOpen}
      />

      <LayerDropdown
        isOpen={layersOpen}
        mapView={mapView}
        layerSettings={layerSettings}
        onMapViewChange={setMapView}
        onLayerToggle={handleLayerToggle}
        onClose={() => setLayersOpen(false)}
      />

      {/* Slide Out Menu */}
      <SlideOutMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        savedFields={savedFields}
        cropFields={mockCropData.features.map(f => f.properties)}
        onFieldSelect={setSelectedFieldId}
        onMyFarmClick={handleMyFarmClick}
        showOnlySaved={showOnlySaved}
      />

      {/* Bottom Panel with Field Card */}
      <BottomPanel 
        regionLabel="Riverside, California"
        fieldCount={filteredCropData.features.length}
      >
        {selectedField && (
          <FieldCard
            key={selectedField.id}
            field={selectedField}
            isSaved={savedFields.includes(selectedField.id)}
            onToggleSave={handleToggleSave}
            onClose={() => setSelectedFieldId(null)}
          />
        )}
      </BottomPanel>
    </MobileFrame>
  );
}

export default App;
