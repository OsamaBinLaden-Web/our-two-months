import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeContent from "@/components/animations/FadeContent";
import ShinyText from "@/components/animations/ShinyText";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-valentine relative overflow-hidden">
      {/* Animated background orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            left: `${20 + i * 25}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="text-center max-w-2xl relative z-10">
        <FadeContent blur duration={0.8}>
          <motion.div
            className="text-5xl mb-6"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        </FadeContent>

        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 leading-tight">
          <SplitText text="Two Months of " splitBy="words" delay={0.3} duration={0.12} />
          <span className="text-gradient-rose italic">
            <SplitText text="Us" splitBy="chars" delay={0.8} />
          </span>
        </h1>

        <p className="font-body text-xl text-muted-foreground mb-2">
          <BlurText text="Since December 10, 2025" delay={1} />
        </p>

        <FadeContent delay={1.5} blur>
          <motion.div
            className="mt-10"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-muted-foreground text-2xl">↓</span>
          </motion.div>
        </FadeContent>
      </div>
    </section>
  );
};

export default HeroSection;
