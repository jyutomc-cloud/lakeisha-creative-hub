import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Users, Percent, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const familyPackages = [
  { name: "Membuat Gerabah", price: "20.000", per: "/orang" },
  { name: "Mewarnai Gerabah", price: "20.000", per: "/orang" },
  { name: "Mewarnai Caping", price: "30.000", per: "/orang" },
  { name: "Membatik", price: "40.000", per: "/orang" },
];

const schoolPackages = [
  { name: "Membuat Gerabah", price: "20.000", per: "/anak" },
  { name: "Mewarnai Gerabah", price: "20.000", per: "/anak" },
  { name: "Mewarnai Caping", price: "30.000", per: "/anak" },
  { name: "Membatik", price: "40.000", per: "/anak" },
];

const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"keluarga" | "sekolah">("keluarga");

  const packages = activeTab === "keluarga" ? familyPackages : schoolPackages;

  const whatsappLink = "https://wa.me/6289536650988?text=Halo%20Lakeisha%20Souvenir%2C%20saya%20ingin%20bertanya%20tentang%20paket%20wisata%20edukasi.";

  return (
    <section id="paket" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-3xl text-accent mb-4">Paket Layanan</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Pilih Paket <span className="text-primary">Terbaik</span> Anda
          </h3>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-xl bg-muted p-1.5">
            <button
              onClick={() => setActiveTab("keluarga")}
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                activeTab === "keluarga"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              🏠 Paket Keluarga
            </button>
            <button
              onClick={() => setActiveTab("sekolah")}
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                activeTab === "sekolah"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              🎒 Paket Sekolah
            </button>
          </div>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "keluarga" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">{pkg.name}</h4>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">Rp</span>
                <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                <span className="text-sm text-muted-foreground">{pkg.per}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Promo & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          <div className="bg-accent/10 rounded-2xl p-6 border-2 border-accent/30">
            <div className="flex items-center gap-3 mb-3">
              <Percent className="w-8 h-8 text-accent" />
              <h4 className="font-display text-xl font-bold text-foreground">Promo Spesial!</h4>
            </div>
            <p className="text-foreground">
              Ambil <strong>2 Paket sekaligus</strong>, diskon jadi <strong className="text-accent text-xl">Rp 30.000{activeTab === "sekolah" ? "/Anak" : "/Orang"}</strong>
            </p>
          </div>

          {activeTab === "sekolah" && (
            <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-8 h-8 text-primary" />
                <h4 className="font-display text-xl font-bold text-foreground">Minimal Peserta</h4>
              </div>
              <p className="text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Minimal <strong className="text-primary text-xl">30 Orang</strong> untuk paket sekolah
              </p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button variant="whatsapp" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              📞 Pesan Sekarang via WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
