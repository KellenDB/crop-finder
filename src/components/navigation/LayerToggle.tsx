import { Layers } from 'lucide-react';

interface LayerToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function LayerToggle({ onClick, isOpen }: LayerToggleProps) {
  return (
    <div className="absolute top-32 right-4 z-10">
      <button 
        className={`w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
          isOpen ? 'bg-white' : 'hover:bg-white'
        }`}
        onClick={onClick}
        aria-label="Toggle layers"
      >
        <Layers className="w-5 h-5 text-slate-700" />
      </button>
    </div>
  );
}
