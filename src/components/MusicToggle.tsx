import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a public YouTube audio source isn't possible directly.
    // Place your audio file at public/music/kadhal-en-kaviye.mp3
    const audio = new Audio("/music/kadhal-en-kaviye.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Auto-play attempt on first load
    const tryAutoPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
        setHasInteracted(true);
      } catch {
        // Autoplay blocked, user needs to click
      }
    };
    tryAutoPlay();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    setHasInteracted(true);
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-card/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-romantic border border-border/50 hover:scale-110 transition-transform"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <span className="text-lg">🎵</span>
      ) : (
        <span className="text-lg opacity-50">🔇</span>
      )}
    </motion.button>
  );
};

export default MusicToggle;
