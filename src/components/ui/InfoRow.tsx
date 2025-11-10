import { LucideIcon } from 'lucide-react';

interface InfoRowProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}

export default function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="px-3 py-2 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="w-3.5 h-3.5 text-slate-500" />
        <p className="text-xs text-slate-500">{label}</p>
      </div>
      <p className="text-sm text-slate-900">{value}</p>
    </div>
  );
}
