import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "chars" | "words";
}

const SplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  tag: Tag = "p",
  splitBy = "chars",
}: SplitTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const items = splitBy === "chars" ? text.split("") : text.split(" ");

  return (
    <Tag ref={ref} className={`${className} inline-flex flex-wrap`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * duration,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: splitBy === "words" ? "pre" : undefined }}
        >
          {splitBy === "words" ? `${item}\u00A0` : item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;
