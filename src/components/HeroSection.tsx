import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heroBg}
          alt="Lakeisha Souvenir Workshop"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-script text-lg sm:text-2xl md:text-3xl text-golden mb-2 sm:mb-4"
        >
          Pusat Pelatihan Seni & Wisata Edukasi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight"
        >
          LAKEISHA
          <span className="block text-accent">SOUVENIR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-10 font-light max-w-2xl mx-auto"
        >
          Wujudkan Kreativitas, Abadikan Kenangan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Button
            variant="hero"
            size="lg"
            className="text-sm sm:text-base"
            onClick={() => scrollToSection("paket")}
          >
            Lihat Paket Keluarga
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="text-sm sm:text-base"
            onClick={() => scrollToSection("paket")}
          >
            Lihat Paket Sekolah
          </Button>
        </motion.div>
      </motion.div>

      {/* Bouncing Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection("tentang")}
      >
        <ChevronDown className="w-10 h-10 text-primary-foreground bounce-arrow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
