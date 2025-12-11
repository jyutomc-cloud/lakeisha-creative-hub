import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Heart, Shield, Sparkles, MapPin } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Pengalaman 10+ Tahun",
    description: "Berpengalaman melayani ribuan peserta dari berbagai sekolah dan keluarga."
  },
  {
    icon: Heart,
    title: "Pendampingan Profesional",
    description: "Tim instruktur berpengalaman dan ramah siap membantu setiap peserta."
  },
  {
    icon: Sparkles,
    title: "Hasil Karya Dibawa Pulang",
    description: "Setiap peserta membawa pulang hasil karya mereka sebagai kenang-kenangan."
  },
  {
    icon: Shield,
    title: "Tempat Aman & Nyaman",
    description: "Lingkungan workshop yang bersih, aman, dan kondusif untuk berkreasi."
  },
  {
    icon: Clock,
    title: "Waktu Fleksibel",
    description: "Jadwal kunjungan dapat disesuaikan dengan kebutuhan Anda."
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description: "Mudah diakses dan berada di kawasan wisata Bantul, Yogyakarta."
  },
];

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="keunggulan" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-3xl text-accent mb-4">Mengapa Kami?</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Keunggulan <span className="text-primary">Lakeisha Souvenir</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <advantage.icon className="w-7 h-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">{advantage.title}</h4>
              <p className="text-muted-foreground">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
