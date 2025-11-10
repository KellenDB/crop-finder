import { Bookmark, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

interface SaveButtonProps {
  isSaved: boolean;
  onToggle: () => void;
  animate?: boolean;
}

export default function SaveButton({ isSaved, onToggle, animate = false }: SaveButtonProps) {
  return (
    <motion.button 
      onClick={onToggle}
      className={`w-10 h-10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
        isSaved ? 'bg-green-600' : 'bg-white/90'
      }`}
      animate={animate ? {
        rotate: [0, -15, 15, -15, 15, -10, 10, -5, 5, 0],
        scale: [1, 1.3, 0.9, 1.3, 0.9, 1.2, 1]
      } : {}}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]
      }}
    >
      <div className="relative w-5 h-5">
        {/* Bookmark icon when not saved */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isSaved ? 0 : 1,
            scale: isSaved ? 0.5 : 1,
            rotate: isSaved ? -90 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Bookmark className="w-5 h-5 text-slate-600" />
        </motion.div>
        
        {/* Sprout icon when saved */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isSaved ? 1 : 0,
            scale: isSaved ? 1 : 0.5,
            rotate: isSaved ? 0 : 90
          }}
          transition={{ duration: 0.3 }}
        >
          <Sprout className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.button>
  );
}
