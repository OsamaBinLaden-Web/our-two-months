import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-4">
          Our Moments 📸
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Every photo with you tells a story I never want to stop reading
        </p>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid group"
            >
              <div className="glass-card overflow-hidden p-2">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <p className="font-body text-sm text-muted-foreground text-center mt-2 pb-1">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
