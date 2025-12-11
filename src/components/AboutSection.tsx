import { motion } from "framer-motion";
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

  return (
    <section id="tentang" className="section-padding bg-gradient-warm" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-script text-3xl text-accent mb-4">Tentang Kami</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Rumah Kreativitas <span className="text-primary">Keluarga Indonesia</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Lakeisha Souvenir</strong> adalah destinasi wisata edukasi yang berlokasi di Bantul, Yogyakarta. 
            Kami menyediakan pengalaman seni tangan tradisional yang autentik, mulai dari membuat gerabah, 
            mewarnai keramik, hingga membatik. Dengan pendampingan profesional dan suasana yang menyenangkan, 
            kami mengajak keluarga dan sekolah untuk menjelajahi warisan budaya Indonesia sambil menciptakan 
            kenangan indah bersama.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
