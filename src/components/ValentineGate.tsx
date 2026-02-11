import { motion } from "framer-motion";

interface ValentineGateProps {
  onAccept: () => void;
  onReject: () => void;
}

const ValentineGate = ({ onAccept, onReject }: ValentineGateProps) => {
  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle floating hearts in background */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="heart-particle fixed text-primary/20 pointer-events-none select-none"
          style={{
            left: `${15 + i * 15}%`,
            fontSize: `${20 + i * 5}px`,
            animationDuration: `${8 + i * 2}s`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          ♥
        </div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card p-8 md:p-12 max-w-md w-full text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl mb-6"
        >
          💝
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
          Hey, beautiful
        </h1>

        <p className="font-body text-muted-foreground mb-8 text-lg">
          I have a question for you...
        </p>

        <p className="font-display text-2xl md:text-3xl text-gradient-rose mb-10 italic">
          Will you be my Valentine?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAccept}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-lg shadow-romantic hover:shadow-lg transition-shadow"
          >
            Yes! ❤️
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReject}
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-body text-lg hover:bg-accent transition-colors"
          >
            No 😢
          </motion.button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground font-body">
          from Pranav, with love 💕
        </p>
      </motion.div>
    </div>
  );
};

export default ValentineGate;
