import { motion } from "framer-motion";

interface MotionSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function MotionSection({ children, delay = 0 }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
