import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Zap, ChevronRight, Play, Trophy, Users, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

interface StackedSectionProps {
  children: React.ReactNode;
  index: number;
  total: number;
}

const StackedSection: React.FC<StackedSectionProps> = ({ children, index, total }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <motion.section
      ref={ref}
      style={{ 
        scale, 
        opacity,
        zIndex: index,
        top: `${index * 20 + 80}px` 
      }}
      className="sticky h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      <div className="w-full h-full relative">
        {children}
      </div>
    </motion.section>
  );
};

export default function Home() {
  const sections = [
    {
      id: "hero",
      content: (
        <div className="relative w-full h-full flex items-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,184,29,0.05)_0%,transparent_70%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-gold/5 border border-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  <Zap className="w-3.5 h-3.5 fill-brand-gold" />
                  The Next Generation Stimulant
                </div>
                <h1 className="text-7xl lg:text-[120px] font-black text-brand-white uppercase leading-[0.85] mb-8 italic tracking-tighter">
                  Chill <br />
                  <span className="text-brand-gold">Charge</span>
                </h1>
                <p className="text-xl text-brand-white/50 max-w-md mb-12 leading-relaxed font-medium">
                  Engineered in Pakistan. Crafted for the ambitious. 
                  Experience the ultimate surge of focus and power.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/zax" className="group relative bg-brand-gold text-brand-dark px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] overflow-hidden transition-all">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Formula <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                  <button className="group flex items-center gap-4 text-brand-white font-black text-sm uppercase tracking-[0.2em] hover:text-brand-gold transition-colors">
                    <div className="w-14 h-14 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                    Watch Film
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative perspective-1000"
              >
                <div className="relative w-full max-w-lg aspect-[4/5] mx-auto">
                  <div className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full animate-pulse" />
                  <div className="relative h-full w-full bg-gradient-to-br from-brand-white/10 to-transparent rounded-[40px] border border-brand-white/10 p-1 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/zaxboost/1000/1200')] bg-cover bg-center opacity-60 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    
                    <div className="absolute bottom-12 left-12 right-12">
                      <div className="text-6xl font-black text-brand-gold italic mb-2">250ML</div>
                      <div className="h-1 w-20 bg-brand-gold mb-4" />
                      <div className="text-2xl font-black text-brand-white uppercase tracking-[0.2em]">STIMULANT DRINK</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      )
    },
    {
      id: "formula",
      content: (
        <div className="w-full h-full bg-brand-white flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: "Ginseng", desc: "Sharpen your focus with high-potency root extracts.", icon: Zap, color: "bg-brand-dark" },
                { title: "Taurine", desc: "Maximize physical output and muscle endurance.", icon: Trophy, color: "bg-brand-gold" },
                { title: "B-Vitamins", desc: "Sustained energy without the dreaded crash.", icon: Users, color: "bg-brand-dark" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className={`p-16 rounded-[40px] ${item.color === 'bg-brand-gold' ? 'bg-brand-gold text-brand-dark' : 'bg-brand-dark text-brand-white'} flex flex-col justify-between aspect-square group hover:scale-[1.02] transition-all duration-500`}
                >
                  <item.icon className="w-16 h-16 mb-8 group-hover:rotate-12 transition-transform" />
                  <div>
                    <h3 className="text-4xl font-black uppercase italic mb-6">{item.title}</h3>
                    <p className="text-lg font-medium opacity-70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "lifestyle",
      content: (
        <div className="w-full h-full relative flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://picsum.photos/seed/action/1920/1080" 
              alt="Lifestyle" 
              className="w-full h-full object-cover grayscale opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h2 className="text-6xl lg:text-8xl font-black text-brand-white uppercase leading-none mb-8 italic">
                Fuel Your <br />
                <span className="text-brand-gold">Hustle</span>
              </h2>
              <p className="text-xl text-brand-white/60 mb-12 leading-relaxed font-medium">
                Whether you're hitting the gym, the books, or the streets, 
                Zaxboost provides the clean energy you need to dominate.
              </p>
              <Link to="/events" className="inline-flex items-center gap-4 px-10 py-5 rounded-full border-2 border-brand-gold text-brand-gold font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-dark transition-all">
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-brand-dark">
      <div className="relative">
        {sections.map((section, index) => (
          <StackedSection 
            key={section.id} 
            index={index} 
            total={sections.length}
          >
            {section.content}
          </StackedSection>
        ))}
      </div>
      
      {/* Final CTA Section - Not stacked */}
      <section className="relative py-32 bg-brand-gold text-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-6xl lg:text-9xl font-black uppercase mb-12 italic tracking-tighter">
            Ready to <br /> Boost?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link to="/distributor" className="bg-brand-dark text-brand-gold px-12 py-6 rounded-full font-black text-lg uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl">
              Become a Partner
            </Link>
            <Link to="/zax" className="text-brand-dark font-black text-lg uppercase tracking-[0.2em] hover:underline">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
