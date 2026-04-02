import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Infinity, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Zax", href: "/zax" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <Infinity className="w-12 h-12 text-brand-gold animate-pulse" />
              <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full group-hover:bg-brand-gold/40 transition-all" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black tracking-tighter text-brand-white uppercase italic">Zax</span>
              <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase ml-0.5">Boost</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.href ? "text-brand-gold" : "text-brand-white/80 hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/distributor" className="bg-brand-gold text-brand-dark px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(252,184,29,0.3)]">
              Become a Distributor
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-dark border-b border-brand-gold/10 px-4 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest ${
                location.pathname === link.href ? "text-brand-gold" : "text-brand-white hover:text-brand-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/distributor" onClick={() => setIsMenuOpen(false)} className="bg-brand-gold text-brand-dark px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest text-center">
            Become a Distributor
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
