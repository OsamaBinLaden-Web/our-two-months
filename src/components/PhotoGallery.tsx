import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import FadeContent from "@/components/animations/FadeContent";
import RotateIn from "@/components/animations/RotateIn";
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";
import photo6 from "@/assets/photo6.jpeg";
import photo7 from "@/assets/photo7.jpeg";
import photo8 from "@/assets/photo8.jpeg";
import photo9 from "@/assets/photo9.jpeg";

const photos = [
  { src: photo1, caption: "Us being goofy ✌️" },
  { src: photo2, caption: "Pizza date vibes 🍕" },
  { src: photo3, caption: "College days together 📚" },
  { src: photo4, caption: "Your expressions kill me 😂" },
  { src: photo5, caption: "The cutest human ever 🥺" },
  { src: photo6, caption: "Study buddies for life 📖" },
  { src: photo7, caption: "That smile on a video call 💛" },
  { src: photo8, caption: "Back to back, like always 🤝" },
  { src: photo9, caption: "My favorite face in the world 🥰" },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeContent blur>
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">
            <SplitText text="Our Moments" splitBy="chars" duration={0.04} />
          </h2>
        </FadeContent>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <RotateIn key={i} delay={i * 0.1} className="break-inside-avoid">
              <motion.div
                className="glass-card overflow-hidden p-2 group cursor-pointer"
                whileHover={{
                  scale: 1.04,
                  rotate: Math.random() > 0.5 ? 2 : -2,
                  boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </RotateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
