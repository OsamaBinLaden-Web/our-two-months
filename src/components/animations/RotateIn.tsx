import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RotateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const RotateIn = ({ children, className = "", delay = 0 }: RotateInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
      animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RotateIn;
