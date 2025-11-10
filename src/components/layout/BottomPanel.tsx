import { AnimatePresence } from 'framer-motion';

interface BottomPanelProps {
  children: React.ReactNode;
  regionLabel?: string;
  fieldCount?: number;
}

export default function BottomPanel({ children, regionLabel, fieldCount }: BottomPanelProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
      {/* Region Label */}
      {regionLabel && (
        <div className="mb-3 px-2">
          <p className="text-white text-sm drop-shadow-lg">
            {regionLabel} • <span className="text-white/80">{fieldCount} fields</span>
          </p>
        </div>
      )}

      {/* Card Container */}
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </div>
  );
}
