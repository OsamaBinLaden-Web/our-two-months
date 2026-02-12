import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Camera, BookOpen, Sparkles, Mail } from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: Heart },
  { id: "gallery", label: "Moments", icon: Camera },
  { id: "story", label: "Our Story", icon: BookOpen },
  { id: "reasons", label: "Love", icon: Sparkles },
  { id: "future", label: "Future", icon: Mail },
];

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-card px-2 py-2 flex gap-1"
        >
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-body transition-colors duration-200 ${
                activeSection === id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <Icon size={14} />
              </span>
              <span className="relative z-10 hidden sm:inline">{label}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
