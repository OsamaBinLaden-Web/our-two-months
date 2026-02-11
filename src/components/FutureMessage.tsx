import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeContent from "@/components/animations/FadeContent";
import ShinyText from "@/components/animations/ShinyText";

const FutureMessage = () => {
  return (
    <section className="py-24 px-4 bg-valentine">
      <div className="max-w-2xl mx-auto text-center">
        <FadeContent blur>
          <motion.div
            className="text-5xl mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌅
          </motion.div>
        </FadeContent>

        <FadeContent blur delay={0.2}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            <SplitText text="Here's to " splitBy="words" delay={0.3} duration={0.1} />
            <span className="text-gradient-rose italic">
              <SplitText text="Forever" splitBy="chars" delay={0.6} duration={0.06} />
            </span>
          </h2>
        </FadeContent>

        <FadeContent blur delay={0.5} direction="up">
          <div className="glass-card p-8 md:p-10 mb-8">
            <FadeContent delay={0.7} blur>
              <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6">
                <BlurText text="Two months ago, I found you. Or maybe we found each other. Either way, my life has been so much brighter since then." delay={0.8} />
              </p>
            </FadeContent>
            <FadeContent delay={1} blur>
              <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6">
                <BlurText text="I don't know what the future holds, but I know I want you in it. Every morning, every silly argument, every late night call, every quiet moment where we just exist together. I want all of it." delay={1.1} />
              </p>
            </FadeContent>
            <FadeContent delay={1.3} blur>
              <p className="font-body text-lg text-foreground/85 leading-relaxed">
                <BlurText text="Thank you for choosing me. Thank you for being patient with me. Thank you for being you. I can't wait to see where this goes." delay={1.4} />
              </p>
            </FadeContent>
          </div>
        </FadeContent>

        <FadeContent blur delay={1.6}>
          <p className="font-display text-2xl">
            <ShinyText text="With all my love, Pranav ❤️" className="text-gradient-rose italic" />
          </p>
        </FadeContent>

        <FadeContent delay={1.8}>
          <div className="mt-8 flex justify-center gap-2">
            {["💕", "🥰", "💗", "✨", "💝"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                whileHover={{ scale: 1.5 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default FutureMessage;
