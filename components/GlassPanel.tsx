interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`
        relative rounded-2xl border border-cyan-500/30 
        bg-slate-900/70 backdrop-blur-xl p-6 
        shadow-[0_0_40px_rgba(15,118,178,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
