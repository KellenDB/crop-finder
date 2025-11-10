import { Menu } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
      {/* Hamburger Menu */}
      <button 
        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-slate-700" />
      </button>
    </div>
  );
}
