import { MapViewType, LayerSettings } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface LayerDropdownProps {
  isOpen: boolean;
  mapView: MapViewType;
  layerSettings: LayerSettings;
  onMapViewChange: (view: MapViewType) => void;
  onLayerToggle: (layer: keyof LayerSettings) => void;
  onClose: () => void;
}

export default function LayerDropdown({ 
  isOpen, 
  mapView, 
  layerSettings, 
  onMapViewChange, 
  onLayerToggle,
  onClose 
}: LayerDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-transparent z-40"
        onClick={onClose}
      />
      
      {/* Dropdown Panel */}
      <AnimatePresence>
        <motion.div 
          className="absolute top-[196px] right-4 w-[180px] bg-white/95 backdrop-blur-md z-50 shadow-xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Map View Options */}
          <div className="border-b border-slate-200">
            <MapViewOption
              label="Standard"
              isSelected={mapView === 'standard'}
              onClick={() => onMapViewChange('standard')}
            />
            <MapViewOption
              label="Satellite"
              isSelected={mapView === 'satellite'}
              onClick={() => onMapViewChange('satellite')}
            />
            <MapViewOption
              label="Terrain"
              isSelected={mapView === 'terrain'}
              onClick={() => onMapViewChange('terrain')}
            />
          </div>

          {/* Layer Toggle */}
          <button 
            onClick={() => onLayerToggle('cropFields')}
            className={`w-full px-3 py-2.5 flex items-center gap-2 hover:bg-slate-50 transition-colors ${
              layerSettings.cropFields ? 'bg-orange-50' : ''
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${
              layerSettings.cropFields ? 'bg-orange-500' : 'bg-slate-300'
            }`} />
            <p className="text-sm text-slate-900">Show Crops</p>
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

interface MapViewOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function MapViewOption({ label, isSelected, onClick }: MapViewOptionProps) {
  return (
    <button 
      onClick={onClick}
      className={`w-full px-3 py-2.5 flex items-center gap-2 hover:bg-slate-50 transition-colors ${
        isSelected ? 'bg-orange-50' : ''
      }`}
    >
      <div className={`w-2 h-2 rounded-full ${
        isSelected ? 'bg-orange-500' : 'bg-slate-300'
      }`} />
      <p className="text-sm text-slate-900">{label}</p>
    </button>
  );
}
