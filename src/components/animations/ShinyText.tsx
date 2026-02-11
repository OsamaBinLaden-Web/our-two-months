import { motion } from "framer-motion";

interface ShinyTextProps {
  text: string;
  className?: string;
}

const ShinyText = ({ text, className = "" }: ShinyTextProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, hsl(var(--foreground)) 40%, hsl(var(--primary)) 50%, hsl(var(--foreground)) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
