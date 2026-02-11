import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-valentine relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          className="text-5xl mb-6"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 leading-tight">
          Two Months of <span className="text-gradient-rose italic">Us</span>
        </h1>

        <p className="font-body text-xl text-muted-foreground mb-2">
          Since December 10, 2024
        </p>


        <motion.div
          className="mt-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-muted-foreground text-2xl">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
