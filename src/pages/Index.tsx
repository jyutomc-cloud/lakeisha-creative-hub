import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <GallerySection />
      <VideoSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
