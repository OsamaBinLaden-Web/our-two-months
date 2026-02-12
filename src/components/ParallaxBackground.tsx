import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.25, 0.2, 0.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.08]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-15, 30]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large soft orb - top left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        style={{ y: y1, scale: scale1, opacity: opacity1, rotate: rotate1 }}
      />
      {/* Medium orb - right */}
      <motion.div
        className="absolute top-1/4 -right-20 w-[350px] h-[350px] rounded-full bg-accent/20 blur-3xl"
        style={{ y: y2, scale: scale2, opacity: opacity2, rotate: rotate2 }}
      />
      {/* Small orb - bottom left */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[250px] h-[250px] rounded-full bg-primary/8 blur-2xl"
        style={{ y: y3, opacity: opacity1 }}
      />
      {/* Accent orb - bottom right */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/15 blur-3xl"
        style={{ y: y1, scale: scale2, opacity: opacity2 }}
      />
    </div>
  );
};

export default ParallaxBackground;
