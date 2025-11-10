import { X, User, Settings as SettingsIcon, ChevronRight, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CropProperties } from '../../types';
import ImageWithFallback from '../ui/ImageWithFallback';

interface SlideOutMenuProps {
  isOpen: boolean;
  onClose: () => void;
  savedFields: string[];
  cropFields: CropProperties[];
  onFieldSelect: (fieldId: string) => void;
  onMyFarmClick: () => void;
  showOnlySaved: boolean;
}

export default function SlideOutMenu({ 
  isOpen, 
  onClose, 
  savedFields, 
  cropFields,
  onFieldSelect,
  onMyFarmClick,
  showOnlySaved
}: SlideOutMenuProps) {
  if (!isOpen) return null;

  const handleFieldClick = (fieldId: string) => {
    onFieldSelect(fieldId);
    onClose();
  };

  const handleMyFarmClick = () => {
    onMyFarmClick();
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        <motion.div 
          className="absolute inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        />
      </AnimatePresence>
      
      {/* Menu Panel */}
      <AnimatePresence>
        <motion.div 
          className="absolute top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl"
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Menu Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Menu</h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 hover:bg-slate-100 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col">
            {/* My Farm Section */}
            <div className="border-b border-slate-200">
              <button 
                onClick={handleMyFarmClick}
                className={`w-full px-4 py-4 flex items-center gap-3 hover:bg-slate-50 transition-colors ${
                  showOnlySaved ? 'bg-orange-50' : ''
                }`}
              >
                <Sprout className={`w-5 h-5 ${
                  showOnlySaved ? 'fill-green-600 text-green-600' : 'text-green-600'
                }`} />
                <div className="flex-1 text-left">
                  <p className="text-slate-900 font-medium">My Farm</p>
                  <p className="text-xs text-slate-500">{savedFields.length} saved crops</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              
              {/* Saved Crops List */}
              {savedFields.length > 0 && (
                <div className="px-4 pb-3">
                  {savedFields.map(fieldId => {
                    const field = cropFields.find(f => f.id === fieldId);
                    if (!field) return null;
                    return (
                      <button
                        key={fieldId}
                        onClick={() => handleFieldClick(fieldId)}
                        className="w-full mb-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center gap-3 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={field.cropImage}
                            alt={field.crop}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm text-slate-900 font-medium">{field.crop}</p>
                          <p className="text-xs text-slate-500">{field.name}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
              
              {savedFields.length === 0 && (
                <div className="px-4 pb-3">
                  <p className="text-xs text-slate-400 text-center py-2">No saved crops yet</p>
                </div>
              )}
            </div>

            {/* My Account */}
            <button className="w-full px-4 py-4 flex items-center gap-3 hover:bg-slate-50 transition-colors border-b border-slate-200">
              <User className="w-5 h-5 text-slate-700" />
              <p className="text-slate-900">My Account</p>
            </button>

            {/* Settings */}
            <button className="w-full px-4 py-4 flex items-center gap-3 hover:bg-slate-50 transition-colors">
              <SettingsIcon className="w-5 h-5 text-slate-700" />
              <p className="text-slate-900">Settings</p>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
