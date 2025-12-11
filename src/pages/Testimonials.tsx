import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Ibu Sari Wulandari",
    role: "Wali Murid SD Negeri 1 Yogyakarta",
    content: "Anak-anak sangat antusias saat workshop di Lakeisha! Pendampingnya sabar dan profesional. Hasil karya gerabah mereka sangat bagus dan bisa dibawa pulang. Pasti akan kembali lagi!",
    rating: 5,
    date: "November 2024"
  },
  {
    id: 2,
    name: "Bapak Ahmad Hidayat",
    role: "Kepala Sekolah SMP Muhammadiyah Bantul",
    content: "Kunjungan wisata edukasi yang sangat berkesan. Siswa-siswi belajar membatik dengan teknik tradisional. Fasilitas lengkap dan harga sangat terjangkau untuk rombongan sekolah.",
    rating: 5,
    date: "Oktober 2024"
  },
  {
    id: 3,
    name: "Keluarga Budi Santoso",
    role: "Pengunjung Keluarga dari Jakarta",
    content: "Liburan keluarga yang sempurna! Kami sekeluarga (4 orang) mencoba mewarnai gerabah dan hasilnya luar biasa. Tempat bersih, nyaman, dan instrukturnya ramah sekali.",
    rating: 5,
    date: "September 2024"
  },
  {
    id: 4,
    name: "Ibu Ratna Dewi",
    role: "Guru TK Pembina Sleman",
    content: "Paket untuk anak TK sangat cocok! Aktivitasnya menyenangkan dan aman untuk anak-anak kecil. Snack box-nya juga enak. Terima kasih Lakeisha!",
    rating: 5,
    date: "Agustus 2024"
  },
  {
    id: 5,
    name: "Komunitas Craft Jogja",
    role: "Kunjungan Komunitas",
    content: "Tempat yang sangat inspiratif untuk belajar seni tradisional. Kami belajar banyak tentang proses pembuatan gerabah dari awal hingga finishing. Recommended!",
    rating: 5,
    date: "Juli 2024"
  },
  {
    id: 6,
    name: "Bapak Joko Widodo",
    role: "Koordinator Outbound PT. Maju Jaya",
    content: "Team building perusahaan kami di sini sangat berkesan. Karyawan jadi lebih kompak setelah berkreasi bersama. Pelayanannya profesional dan fleksibel.",
    rating: 5,
    date: "Juni 2024"
  },
  {
    id: 7,
    name: "Ibu Maya Sari",
    role: "Pengunjung dari Surabaya",
    content: "Worth the trip dari Surabaya! Anak-anak happy banget bisa belajar membatik. Tempatnya asri dan tenang, cocok untuk healing sambil berkreasi.",
    rating: 5,
    date: "Mei 2024"
  },
  {
    id: 8,
    name: "SD Islam Al-Azhar Yogyakarta",
    role: "Kunjungan Sekolah",
    content: "Sudah 3 tahun berturut-turut kami mengadakan study tour di Lakeisha. Selalu puas dengan pelayanannya. Paket komplit dan edukatif!",
    rating: 5,
    date: "April 2024"
  },
];

const TestimonialsPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-terracotta"
          style={{ y: heroY }}
        />
        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Testimoni <span className="text-golden">Pengunjung</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Cerita dan pengalaman nyata dari keluarga, sekolah, dan komunitas yang telah berkunjung
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-card rounded-3xl p-10 shadow-elevated border border-border/50"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Membuat Kenangan Indah?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Bergabunglah dengan ribuan pengunjung yang telah merasakan pengalaman seru di Lakeisha Souvenir!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/#paket">Lihat Paket Kami</Link>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href="https://wa.me/6289536650988?text=Halo%20Lakeisha%20Souvenir%2C%20saya%20ingin%20bertanya%20tentang%20paket%20wisata%20edukasi." target="_blank" rel="noopener noreferrer">
                  Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-card border border-border/50 card-hover relative"
    >
      <Quote className="absolute top-4 right-4 w-10 h-10 text-accent/20" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-golden fill-golden" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        <p className="text-xs text-accent mt-1">{testimonial.date}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialsPage;
