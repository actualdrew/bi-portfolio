"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SciFiLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="relative min-h-screen bg-[#050712] text-white overflow-hidden">

      {/* --- GLOBAL BACKGROUND LAYERS --- */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 55%),
            radial-gradient(circle at bottom, rgba(14,165,233,0.12), transparent 55%),
            linear-gradient(transparent 0, rgba(15,23,42,0.9) 40%, #020617 100%)
          `,
        }}
      />

      {/* --- ANIMATED GRID --- */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:80px_80px] animate-[gridShift_40s_linear_infinite]" />
      </div>

      {/* --- AMBIENT GLOW PULSE --- */}
      <motion.div
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none fixed inset-0 z-0 bg-cyan-500/5 blur-3xl"
      />

      {/* --- PAGE TRANSITION WRAPPER --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* --- GLOBAL KEYFRAMES --- */}
      <style jsx global>{`
        @keyframes gridShift {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-20px, -10px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </main>
  );
}
