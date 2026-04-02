import { Infinity, Zap, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Zax", href: "/zax" },
  ];

  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-brand-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Infinity className="w-10 h-10 text-brand-gold" />
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tighter text-brand-white uppercase italic">Zax</span>
                <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase ml-0.5">Boost</span>
              </div>
            </div>
            <p className="text-brand-white/40 max-w-sm mb-8 leading-relaxed">
              The ultimate stimulant drink designed for the bold. 
              Join the revolution and charge your life with Zaxboost.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-brand-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors cursor-pointer">
                  <Zap className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-white font-black uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-brand-white/40 hover:text-brand-gold transition-colors font-bold uppercase text-sm tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-black uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-white/40">
                <Mail className="w-4 h-4" />
                <span className="font-bold text-sm">hello@zaxboost.com</span>
              </li>
              <li className="text-brand-white/40 font-bold text-sm">
                Z-486, BYJ CHS, <br /> Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-white/20 text-xs font-bold uppercase tracking-widest">
            © 2026 Zaxboost. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-brand-white/20 hover:text-brand-white text-xs font-bold uppercase tracking-widest">Privacy Policy</Link>
            <Link to="#" className="text-brand-white/20 hover:text-brand-white text-xs font-bold uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
