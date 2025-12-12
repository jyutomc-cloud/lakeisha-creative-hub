import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, title: "Membuat Gerabah", description: "Anak-anak belajar membentuk tanah liat" },
  { src: gallery2, title: "Waktu Istirahat", description: "Menikmati snack bersama teman-teman" },
  { src: gallery3, title: "Kreasi Gerabah", description: "Siswa membentuk karya dari tanah liat" },
  { src: gallery4, title: "Mewarnai Gerabah", description: "Menghias gerabah dengan warna-warni" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="galeri" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Parallax decorative */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container-custom relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-script text-2xl md:text-3xl text-accent mb-2 md:mb-4">Galeri</h2>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Dokumentasi <span className="text-primary">Kegiatan</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-0'} opacity-100 md:opacity-0`} />
              <div className={`absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 transition-all duration-300 md:translate-y-4 md:opacity-0 ${hoveredIndex === index ? 'md:translate-y-0 md:opacity-100' : ''}`}>
                <h4 className="font-display text-xs sm:text-sm md:text-lg font-semibold text-primary-foreground line-clamp-1">{image.title}</h4>
                <p className="text-xs text-primary-foreground/80 hidden sm:block">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
