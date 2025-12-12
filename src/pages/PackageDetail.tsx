import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Check, Clock, Users, Star, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const packagesData = {
  "membuat-gerabah": {
    name: "Membuat Gerabah",
    price: "20.000",
    image: gallery1,
    description: "Pengalaman unik merasakan langsung proses pembuatan gerabah tradisional dari tanah liat. Peserta akan belajar teknik dasar membentuk tanah liat menjadi berbagai bentuk keramik yang indah.",
    duration: "45-60 menit",
    includes: [
      "Bahan tanah liat berkualitas",
      "Peralatan lengkap (meja putar, spatula, dll)",
      "Pendampingan instruktur berpengalaman",
      "Hasil karya boleh dibawa pulang",
      "Sertifikat keikutsertaan",
    ],
    benefits: [
      "Melatih motorik halus dan kreativitas",
      "Mengenal budaya lokal dan kerajinan tradisional",
      "Cocok untuk segala usia",
      "Pengalaman edukatif yang menyenangkan",
    ],
    gallery: [gallery1, gallery2],
  },
  "mewarnai-gerabah": {
    name: "Mewarnai Gerabah",
    price: "20.000",
    image: gallery2,
    description: "Kegiatan kreatif mewarnai gerabah yang sudah jadi dengan berbagai warna cat akrilik. Peserta bebas berkreasi sesuai imajinasi untuk menciptakan karya unik.",
    duration: "30-45 menit",
    includes: [
      "Gerabah siap warnai (pilihan bentuk)",
      "Cat akrilik berbagai warna",
      "Kuas dan perlengkapan melukis",
      "Pendampingan instruktur",
      "Hasil karya boleh dibawa pulang",
    ],
    benefits: [
      "Mengembangkan kreativitas dan imajinasi",
      "Melatih kesabaran dan fokus",
      "Aktivitas santai dan menyenangkan",
      "Hasil karya menjadi kenang-kenangan",
    ],
    gallery: [gallery2, gallery3],
  },
  "mewarnai-caping": {
    name: "Mewarnai Caping",
    price: "30.000",
    image: gallery3,
    description: "Aktivitas seru menghias caping (topi petani tradisional) dengan berbagai warna dan motif. Caping yang sudah diwarnai bisa langsung dipakai atau dijadikan hiasan.",
    duration: "45-60 menit",
    includes: [
      "Caping anyaman bambu berkualitas",
      "Cat akrilik warna lengkap",
      "Kuas berbagai ukuran",
      "Contoh motif dan inspirasi desain",
      "Pendampingan instruktur",
      "Hasil karya boleh dibawa pulang",
    ],
    benefits: [
      "Mengenal budaya pertanian tradisional",
      "Mengekspresikan kreativitas secara bebas",
      "Hasil karya fungsional (bisa dipakai)",
      "Aktivitas yang cocok untuk semua usia",
    ],
    gallery: [gallery3, gallery4],
  },
  "membatik": {
    name: "Membatik",
    price: "40.000",
    image: gallery4,
    description: "Belajar seni batik tradisional dengan teknik cap atau tulis. Peserta akan memahami proses pewarnaan kain menggunakan lilin (malam) dan pewarna alami maupun sintetis.",
    duration: "60-90 menit",
    includes: [
      "Kain mori ukuran 50x50 cm",
      "Alat canting dan cap batik",
      "Lilin (malam) batik",
      "Pewarna tekstil berkualitas",
      "Bimbingan langkah demi langkah",
      "Hasil karya boleh dibawa pulang",
    ],
    benefits: [
      "Melestarikan warisan budaya UNESCO",
      "Memahami filosofi motif batik",
      "Melatih ketelitian dan kesabaran",
      "Menciptakan karya seni bernilai tinggi",
    ],
    gallery: [gallery4, gallery1],
  },
};

type PackageSlug = keyof typeof packagesData;

const PackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  
  const packageInfo = slug ? packagesData[slug as PackageSlug] : null;

  if (!packageInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Paket tidak ditemukan</h1>
          <Link to="/#paket">
            <Button variant="default">Kembali ke Daftar Paket</Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/6289536650988?text=Halo%20Lakeisha%20Souvenir%2C%20saya%20ingin%20memesan%20paket%20${encodeURIComponent(packageInfo.name)}.`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <img 
            src={packageInfo.image} 
            alt={packageInfo.name}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-custom">
            <Link 
              to="/#paket"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Paket</span>
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-2"
            >
              {packageInfo.name}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-baseline gap-2"
            >
              <span className="text-primary-foreground/80">Mulai dari</span>
              <span className="text-3xl md:text-4xl font-bold text-golden">Rp {packageInfo.price}</span>
              <span className="text-primary-foreground/80">/orang</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tentang Paket Ini</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {packageInfo.description}
                </p>
              </motion.div>

              {/* Duration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
              >
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <span className="text-muted-foreground">Durasi:</span>
                  <span className="font-semibold text-foreground ml-2">{packageInfo.duration}</span>
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Yang Termasuk</h2>
                <ul className="space-y-3">
                  {packageInfo.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Manfaat</h2>
                <ul className="space-y-3">
                  {packageInfo.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Galeri Kegiatan</h2>
                <div className="grid grid-cols-2 gap-4">
                  {packageInfo.gallery.map((img, index) => (
                    <div key={index} className="rounded-xl overflow-hidden aspect-video">
                      <img 
                        src={img} 
                        alt={`${packageInfo.name} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-card sticky top-24 border border-border/50"
              >
                <div className="text-center mb-6">
                  <span className="text-muted-foreground">Harga</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-sm text-muted-foreground">Rp</span>
                    <span className="text-4xl font-bold text-primary">{packageInfo.price}</span>
                    <span className="text-muted-foreground">/orang</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">{packageInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Cocok untuk semua usia</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Bantul, Yogyakarta</span>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-xl p-4 mb-6 border border-accent/30">
                  <p className="text-sm text-foreground text-center">
                    💡 <strong>Promo:</strong> Ambil 2 paket sekaligus, diskon jadi <span className="text-accent font-bold">Rp 30.000</span>/orang!
                  </p>
                </div>

                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Pesan Sekarang
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Hubungi kami untuk reservasi dan informasi lebih lanjut
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetail;
