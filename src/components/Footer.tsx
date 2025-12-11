import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl font-bold mb-2">LAKEISHA</h3>
            <p className="font-script text-xl text-accent mb-4">Souvenir</p>
            <p className="text-primary-foreground/80 leading-relaxed">
              Pusat Pelatihan Seni & Wisata Edukasi untuk keluarga dan sekolah di Yogyakarta.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-xl font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              {[
                { name: "Tentang Kami", id: "tentang" },
                { name: "Paket Layanan", id: "paket" },
                { name: "Galeri", id: "galeri" },
                { name: "Keunggulan", id: "keunggulan" },
                { name: "Kontak", id: "kontak" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-xl font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/80">
              📞 0895 3665 09988<br />
              📍 Kajen, Bangunjiwo, Kasihan, Bantul
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 flex items-center justify-center gap-1">
            © {currentYear} Lakeisha Souvenir. Dibuat dengan{" "}
            <Heart className="w-4 h-4 text-accent fill-accent" /> di Yogyakarta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
