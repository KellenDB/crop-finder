import clsx from 'clsx';
import { CropProperties } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'harvest' | 'info' | 'default';
  harvestCycle?: CropProperties['harvestCycle'];
}

const getHarvestCycleColor = (cycle: CropProperties['harvestCycle']) => {
  switch(cycle) {
    case 'Just Planted': return 'bg-blue-100 text-blue-700';
    case 'Growing': return 'bg-green-100 text-green-700';
    case 'Bud Break': return 'bg-purple-100 text-purple-700';
    case 'Ready to Harvest': return 'bg-orange-100 text-orange-700';
    case 'Harvested': return 'bg-gray-100 text-gray-700';
    default: return 'bg-slate-100 text-slate-700';
  }
};

export default function Badge({ children, variant = 'default', harvestCycle }: BadgeProps) {
  const className = clsx(
    'px-3 py-1.5 rounded-lg text-xs font-medium',
    {
      [getHarvestCycleColor(harvestCycle!)]: variant === 'harvest' && harvestCycle,
      'bg-blue-100 text-blue-700': variant === 'info',
      'bg-slate-100 text-slate-700': variant === 'default',
    }
  );

  return (
    <span className={className}>
      {children}
    </span>
  );
}
