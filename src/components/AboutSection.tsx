import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Users, GraduationCap, Leaf } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Kreatif",
    description: "Eksplorasi seni tanpa batas"
  },
  {
    icon: Users,
    title: "Untuk Semua Usia",
    description: "Dari anak-anak hingga dewasa"
  },
  {
    icon: GraduationCap,
    title: "Edukatif",
    description: "Belajar sambil bermain"
  },
  {
    icon: Leaf,
    title: "Berkelanjutan",
    description: "Menghargai budaya lokal"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="tentang" className="section-padding bg-gradient-warm relative overflow-hidden" ref={ref}>
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container-custom relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="font-script text-2xl md:text-3xl text-accent mb-2 md:mb-4">Tentang Kami</h2>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-8">
            Rumah Kreativitas <span className="text-primary">Keluarga Indonesia</span>
          </h3>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Lakeisha Souvenir</strong> adalah destinasi wisata edukasi yang berlokasi di Bantul, Yogyakarta. 
            Kami menyediakan pengalaman seni tangan tradisional yang autentik, mulai dari membuat gerabah, 
            mewarnai keramik, hingga membatik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="w-7 h-7 md:w-10 md:h-10 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-display text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">{feature.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
