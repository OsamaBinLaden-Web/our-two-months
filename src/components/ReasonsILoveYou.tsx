import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeContent from "@/components/animations/FadeContent";
import MagnetEffect from "@/components/animations/MagnetEffect";

const reasons = [
  "The way you scrunch your nose when you laugh. It's the most adorable thing I've ever seen.",
  "The comfort I feel when I'm with you. Like I can just be myself, no pretending.",
  "The way you look at me when you think I'm not noticing. I always notice.",
  "Simply because you're you, and there's nobody else I'd rather be with.",
  "How you always know when something's off with me, even when I try to hide it.",
  "Your taste in music. You introduced me to songs that are now my favorites.",
];

const ReasonsILoveYou = () => {
  return (
    <section id="reasons" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeContent blur>
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-4">
            <SplitText text="Reasons I Love You 💝" splitBy="words" duration={0.1} />
          </h2>
        </FadeContent>
        <FadeContent blur delay={0.3}>
          <p className="font-body text-center text-muted-foreground mb-14">
            <BlurText text="I could write a thousand more but here are a few" delay={0.4} />
          </p>
        </FadeContent>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((reason, i) => (
            <FadeContent key={i} delay={i * 0.12} blur direction={i % 2 === 0 ? "left" : "right"} distance={50}>
              <MagnetEffect strength={0.15}>
                <motion.div
                  className="glass-card p-6 group cursor-default h-full"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="text-primary text-xl mt-0.5 shrink-0"
                      whileHover={{ scale: 1.4, rotate: 20 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      ♥
                    </motion.span>
                    <p className="font-body text-foreground/90 leading-relaxed">
                      {reason}
                    </p>
                  </div>
                </motion.div>
              </MagnetEffect>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
