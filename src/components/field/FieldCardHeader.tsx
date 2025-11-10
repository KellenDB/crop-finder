import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface FieldCardHeaderProps {
  cropName: string;
  variety: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onClose: () => void;
}

export default function FieldCardHeader({ 
  cropName, 
  variety, 
  isExpanded, 
  onToggleExpand, 
  onClose 
}: FieldCardHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-2 mb-2">
      <div>
        <h3 className="text-slate-900 font-semibold">{cropName} / {variety}</h3>
      </div>
      <div className="flex items-center gap-1 flex-shrink-0">
        <button 
          onClick={onToggleExpand}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          )}
        </button>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-slate-500" />
        </button>
      </div>
    </div>
  );
}
