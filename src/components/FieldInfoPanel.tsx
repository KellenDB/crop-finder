import React from 'react';
import { CropProperties } from '../types';

interface FieldInfoPanelProps {
  field: CropProperties | null;
  darkMode: boolean;
  onClose: () => void;
}

export default function FieldInfoPanel({ field, darkMode, onClose }: FieldInfoPanelProps) {
  if (!field) return null;

  return (
    <div className={`absolute bottom-0 left-0 right-0 z-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    } rounded-t-3xl shadow-2xl slide-up`}>
      <div className="p-6">
        {/* Drag Handle */}
        <div className="flex justify-center mb-4">
          <div className={`w-12 h-1 rounded-full ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`} />
        </div>

        {/* Field Info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-5xl">{field.emoji}</span>
            <div>
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {field.crop}
              </h2>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {field.variety}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
            } hover:opacity-80 transition-opacity`}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          <div className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <span className="font-semibold">Farm:</span>
            <span>{field.name}</span>
          </div>
          <div className={`flex items-center gap-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <span className="font-semibold">Location:</span>
            <span>{field.location}</span>
          </div>
          {field.acres && (
            <div className={`flex items-center gap-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="font-semibold">Size:</span>
              <span>{field.acres} acres</span>
            </div>
          )}
          {field.planted && (
            <div className={`flex items-center gap-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="font-semibold">Planted:</span>
              <span>{field.planted}</span>
            </div>
          )}
        </div>

        <button className="w-full mt-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}