import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  fieldCount: number;
  currentLocation: string;
}

export default function Header({ 
  darkMode, 
  setDarkMode, 
  searchQuery, 
  setSearchQuery, 
  fieldCount, 
  currentLocation 
}: HeaderProps) {
  return (
    <div className={`absolute top-0 left-0 right-0 z-10 ${darkMode ? 'bg-gray-900' : 'bg-white'} bg-opacity-95 backdrop-blur-sm shadow-lg`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            🌾 CropFinder
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:opacity-80 transition-opacity`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search crops, farms, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:ring-2 focus:ring-orange-500`}
        />

        {/* Location Summary */}
        <div className={`mt-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          📍 {currentLocation} • {fieldCount} fields nearby
        </div>
      </div>
    </div>
  );
}