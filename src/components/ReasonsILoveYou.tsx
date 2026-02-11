import { motion } from "framer-motion";

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
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-4">
            Reasons I Love You 💝
          </h2>
          <p className="font-body text-center text-muted-foreground mb-14">
            I could write a thousand more but here are a few
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-6 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary text-xl mt-0.5 shrink-0">♥</span>
                <p className="font-body text-foreground/90 leading-relaxed">
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
