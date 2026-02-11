import { motion } from "framer-motion";

const moments = [
  {
    date: "December 10, 2024",
    title: "The day it all began",
    description: "I still remember that feeling when we made it official. My heart was racing and I couldn't stop smiling for days.",
    emoji: "💕",
  },
  {
    date: "December 2024",
    title: "Getting to know each other",
    description: "Those early days of long conversations, staying up late texting, learning all the little things about you that made me fall harder every day.",
    emoji: "💬",
  },
  {
    date: "January 2025",
    title: "Our first month together",
    description: "A whole month of us! Every moment felt new and exciting. I started realizing just how lucky I am to have you in my life.",
    emoji: "🎉",
  },
  {
    date: "January/February 2025",
    title: "Study dates and stolen glances",
    description: "Sitting next to you in college, pretending to focus on notes while sneaking looks at you. Those are some of my favorite memories.",
    emoji: "📚",
  },
  {
    date: "February 11, 2025",
    title: "Two months of us!",
    description: "Here we are, two months in, and I'm more sure about you than ever. This is just the beginning of our story.",
    emoji: "❤️",
  },
];

const OurStory = () => {
  return (
    <section className="py-20 px-4 bg-valentine">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-4">
            Our Story So Far 💫
          </h2>
          <p className="font-body text-center text-muted-foreground mb-14 max-w-md mx-auto">
            Two months might sound short, but with you it feels like I've found something that'll last forever
          </p>
        </motion.div>

        <div className="space-y-8">
          {moments.map((moment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="text-3xl mb-3">{moment.emoji}</div>
              <p className="font-body text-sm text-primary mb-1">{moment.date}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{moment.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{moment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
