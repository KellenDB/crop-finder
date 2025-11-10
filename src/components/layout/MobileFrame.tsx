interface MobileFrameProps {
  children: React.ReactNode;
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
      {/* Mobile Device Frame */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-slate-900">
        {/* Screen Content */}
        <div className="relative w-full h-full bg-slate-100 overflow-hidden">
          {children}
          
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-[100] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
