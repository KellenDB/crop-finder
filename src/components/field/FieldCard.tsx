import { useState } from 'react';
import { CropProperties } from '../../types';
import ImageWithFallback from '../ui/ImageWithFallback';
import SaveButton from './SaveButton';
import FieldCardHeader from './FieldCardHeader';
import FieldCardDetails from './FieldCardDetails';
import { motion, AnimatePresence } from 'framer-motion';

interface FieldCardProps {
  field: CropProperties;
  isSaved: boolean;
  onToggleSave: (fieldId: string) => void;
  onClose: () => void;
}

export default function FieldCard({ field, isSaved, onToggleSave, onClose }: FieldCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [animateSave, setAnimateSave] = useState(false);

  const handleSaveToggle = () => {
    const willBeSaved = !isSaved;
    onToggleSave(field.id);
    
    if (willBeSaved) {
      setAnimateSave(true);
      setTimeout(() => setAnimateSave(false), 800);
    }
  };

  return (
    <motion.div 
      className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Crop Image */}
            <div className="relative h-32 overflow-hidden">
              <ImageWithFallback
                src={field.cropImage}
                alt={field.crop}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Save Button */}
              <div className="absolute top-3 right-3">
                <SaveButton 
                  isSaved={isSaved} 
                  onToggle={handleSaveToggle}
                  animate={animateSave}
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <FieldCardHeader
                cropName={field.crop}
                variety={field.variety}
                isExpanded={isExpanded}
                onToggleExpand={() => setIsExpanded(!isExpanded)}
                onClose={onClose}
              />
              <FieldCardDetails field={field} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={field.cropImage}
                    alt={field.crop}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-900 truncate font-semibold">{field.crop} / {field.variety}</h3>
                  <p className="text-sm text-slate-600 truncate">{field.name}</p>
                </div>
              </div>
              <FieldCardHeader
                cropName=""
                variety=""
                isExpanded={isExpanded}
                onToggleExpand={() => setIsExpanded(!isExpanded)}
                onClose={onClose}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
