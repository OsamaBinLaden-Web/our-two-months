import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ValentineGate from "@/components/ValentineGate";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import OurStory from "@/components/OurStory";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import FutureMessage from "@/components/FutureMessage";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  if (rejected) {
    return (
      <div className="min-h-screen bg-romantic flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="text-8xl mb-6">😢</div>
          <p className="font-display text-2xl text-foreground mb-4">Oh no...</p>
          <p className="font-body text-muted-foreground mb-8">
            That's okay, but I'll always be here waiting for you ❤️
          </p>
          <button
            onClick={() => setRejected(false)}
            className="text-primary underline font-body hover:text-deep-rose transition-colors"
          >
            Wait, let me reconsider...
          </button>
        </motion.div>
      </div>
    );
  }

  if (!accepted) {
    return <ValentineGate onAccept={() => setAccepted(true)} onReject={() => setRejected(true)} />;
  }

  return (
    <div className="min-h-screen bg-romantic relative overflow-hidden">
      <FloatingHearts />
      <MusicToggle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <PhotoGallery />
        <OurStory />
        <ReasonsILoveYou />
        <FutureMessage />
      </motion.div>
    </div>
  );
};

export default Index;
