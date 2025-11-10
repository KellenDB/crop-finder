import { Edit2, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import InfoRow from '../ui/InfoRow';
import Badge from '../ui/Badge';
import { CropProperties } from '../../types';

interface FieldCardDetailsProps {
  field: CropProperties;
}

export default function FieldCardDetails({ field }: FieldCardDetailsProps) {
  return (
    <>
      {/* Field Name & Edit */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="text-slate-600 text-sm">{field.name}</p>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0">
          <Edit2 className="w-4 h-4 text-slate-500" />
        </button>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-3 text-slate-600">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{field.location}</span>
      </div>

      {/* Farm Owner Link */}
      <button className="w-full mb-3 px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center justify-between transition-colors">
        <div className="text-left">
          <p className="text-xs text-slate-500">Farm Owner</p>
          <p className="text-sm text-slate-900">{field.owner}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400" />
      </button>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <InfoRow 
          icon={Calendar} 
          label="Year Planted" 
          value={field.yearPlanted} 
        />
        <InfoRow 
          icon={Clock} 
          label="Growth Time" 
          value={field.growthDuration} 
        />
      </div>

      {/* Status Badges */}
      <div className="flex gap-2 flex-wrap">
        <Badge variant="harvest" harvestCycle={field.harvestCycle}>
          {field.harvestCycle}
        </Badge>
        <Badge variant="info">
          {field.acres} acres
        </Badge>
      </div>
    </>
  );
}
