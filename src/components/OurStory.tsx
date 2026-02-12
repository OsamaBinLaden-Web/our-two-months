import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeContent from "@/components/animations/FadeContent";

const moments = [
  { date: "December 10, 2024", title: "The day it all began", emoji: "💕" },
  { date: "December 2024", title: "Getting to know each other", emoji: "💬" },
  { date: "January 2025", title: "Our first month together", emoji: "🎉" },
  { date: "January/February 2025", title: "Study dates and stolen glances", emoji: "📚" },
  { date: "February 11, 2025", title: "Two months of us!", emoji: "❤️" },
];

const OurStory = () => {
  return (
    <section id="story" className="py-20 px-4 bg-valentine">
      <div className="max-w-3xl mx-auto">
        <FadeContent blur>
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-4">
            <SplitText text="Our Story So Far 💫" splitBy="words" duration={0.1} />
          </h2>
        </FadeContent>
        <FadeContent blur delay={0.3}>
          <p className="font-body text-center text-muted-foreground mb-14 max-w-md mx-auto">
            <BlurText text="Two months might sound short, but with you it feels like I've found something that'll last forever" delay={0.4} />
          </p>
        </FadeContent>

        <div className="space-y-8">
          {moments.map((moment, i) => (
            <FadeContent
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.15}
              blur
              distance={60}
            >
              <motion.div
                className="glass-card p-6"
                whileHover={{
                  scale: 1.03,
                  x: i % 2 === 0 ? 10 : -10,
                  boxShadow: "0 15px 35px -10px hsl(var(--primary) / 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {moment.emoji}
                </motion.div>
                <p className="font-body text-sm text-primary mb-1">{moment.date}</p>
                <h3 className="font-display text-xl text-foreground">{moment.title}</h3>
              </motion.div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
