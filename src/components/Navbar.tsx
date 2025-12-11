import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", id: "hero", path: "/" },
  { name: "Tentang", id: "tentang", path: "/#tentang" },
  { name: "Paket", id: "paket", path: "/#paket" },
  { name: "Galeri", id: "galeri", path: "/#galeri" },
  { name: "Video", id: "video", path: "/#video" },
  { name: "Testimoni", id: "testimoni", path: "/testimoni" },
  { name: "Kontak", id: "kontak", path: "/#kontak" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    
    if (link.path.startsWith("/#")) {
      const sectionId = link.id;
      if (location.pathname === "/") {
        // Already on home page, scroll to section
        if (sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
      }
      // If not on home page, Link will navigate there and hash will handle scroll
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-baseline gap-1"
          >
            <span className={cn(
              "font-display text-2xl font-bold transition-colors",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}>
              LAKEISHA
            </span>
            <span className={cn(
              "font-script text-lg transition-colors",
              isScrolled ? "text-accent" : "text-golden"
            )}>
              Souvenir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link)}
                  className={cn(
                    "font-medium transition-colors hover:text-accent",
                    isScrolled ? "text-foreground" : "text-primary-foreground",
                    location.pathname === link.path && "text-accent"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 bg-background/98 backdrop-blur-md shadow-elevated md:hidden"
          >
            <ul className="py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link)}
                    className="w-full block text-left py-3 px-4 rounded-lg text-foreground font-medium hover:bg-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
