import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo Lakeisha Souvenir!%0A%0ANama: ${formData.name}%0ANo. HP: ${formData.phone}%0APesan: ${formData.message}`;
    window.open(`https://wa.me/6289536650988?text=${whatsappMessage}`, '_blank');
    toast({
      title: "Pesan Terkirim!",
      description: "Anda akan dialihkan ke WhatsApp untuk melanjutkan percakapan.",
    });
  };

  const whatsappLink = "https://wa.me/6289536650988?text=Halo%20Lakeisha%20Souvenir%2C%20saya%20ingin%20bertanya%20tentang%20paket%20wisata%20edukasi.";

  return (
    <section id="kontak" className="section-padding bg-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        style={{ y }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-3xl text-accent mb-4">Hubungi Kami</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Lokasi & <span className="text-primary">Kontak</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map - Lokasi asli Lakeisha Souvenir di Kajen, Bangunjiwo, Kasihan, Bantul */}
            <div className="rounded-2xl overflow-hidden shadow-card mb-6 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0447744744856!2d110.33089517590449!3d-7.822899377423988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9a1a27b9c5b%3A0x6e6b6c9e6c6b6c9e!2sKajen%2C%20Bangunjiwo%2C%20Kec.%20Kasihan%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1702300000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Lakeisha Souvenir"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                  <p className="text-muted-foreground">
                    Lakeisha Souvenir, Kajen, Bangunjiwo, Kec. Kasihan, Bantul, DI Yogyakarta 55184
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telepon / WhatsApp</h4>
                  <a href="tel:+6289536650988" className="text-accent hover:underline font-semibold">
                    0895 3665 09988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Jam Operasional</h4>
                  <p className="text-muted-foreground">
                    Setiap Hari: 08.00 - 17.00 WIB<br />
                    <span className="text-sm">(Kunjungan dengan reservasi)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border/50 shadow-card"
          >
            <h4 className="font-display text-2xl font-bold text-foreground mb-6">Kirim Pesan</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Kirim Pesan
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">Atau hubungi langsung via WhatsApp</p>
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  📱 Chat WhatsApp Sekarang
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
