import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeContent from "@/components/animations/FadeContent";
import MagnetEffect from "@/components/animations/MagnetEffect";

interface ValentineGateProps {
  onAccept: () => void;
  onReject: () => void;
}

const ValentineGate = ({ onAccept, onReject }: ValentineGateProps) => {
  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center px-4 relative overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="heart-particle fixed text-primary/20 pointer-events-none select-none"
          style={{
            left: `${15 + i * 15}%`,
            fontSize: `${20 + i * 5}px`,
            animationDuration: `${8 + i * 2}s`,
            animationDelay: `${i * 1.5}s`,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        >
          ♥
        </motion.div>
      ))}

      <FadeContent blur duration={1} className="glass-card p-8 md:p-12 max-w-md w-full text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl mb-6"
        >
          💝
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
          <SplitText text="Hey, beautiful" splitBy="chars" duration={0.04} />
        </h1>

        <p className="font-body text-muted-foreground mb-8 text-lg">
          <BlurText text="I have a question for you..." delay={0.6} />
        </p>

        <FadeContent delay={1.2} blur>
          <p className="font-display text-2xl md:text-3xl text-gradient-rose mb-10 italic">
            Will you be my Valentine?
          </p>
        </FadeContent>

        <FadeContent delay={1.6} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagnetEffect strength={0.4}>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.9 }}
                onClick={onAccept}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-lg shadow-romantic transition-shadow"
              >
                Yes! ❤️
              </motion.button>
            </MagnetEffect>
            <MagnetEffect strength={0.4}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onReject}
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-body text-lg hover:bg-accent transition-colors"
              >
                No 😢
              </motion.button>
            </MagnetEffect>
          </div>
        </FadeContent>

        <FadeContent delay={2} blur>
          <p className="mt-6 text-sm text-muted-foreground font-body">
            from Pranav, with love 💕
          </p>
        </FadeContent>
      </FadeContent>
    </div>
  );
};

export default ValentineGate;
