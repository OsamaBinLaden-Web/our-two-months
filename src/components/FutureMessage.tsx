import { motion } from "framer-motion";

const FutureMessage = () => {
  return (
    <section className="py-24 px-4 bg-valentine">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="text-5xl mb-6">🌅</div>

        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
          Here's to <span className="text-gradient-rose italic">Forever</span>
        </h2>

        <div className="glass-card p-8 md:p-10 mb-8">
          <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6">
            Two months ago, I found you. Or maybe we found each other. Either way, 
            my life has been so much brighter since then.
          </p>
          <p className="font-body text-lg text-foreground/85 leading-relaxed mb-6">
            I don't know what the future holds, but I know I want you in it. 
            Every morning, every silly argument, every late night call, 
            every quiet moment where we just exist together. I want all of it.
          </p>
          <p className="font-body text-lg text-foreground/85 leading-relaxed">
            Thank you for choosing me. Thank you for being patient with me. 
            Thank you for being you. I can't wait to see where this goes.
          </p>
        </div>

        <p className="font-display text-2xl text-gradient-rose italic">
          With all my love, Pranav ❤️
        </p>

        <div className="mt-8 flex justify-center gap-2">
          {["💕", "🥰", "💗", "✨", "💝"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FutureMessage;
