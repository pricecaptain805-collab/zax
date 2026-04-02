import { motion } from "motion/react";
import { Zap, Globe, Shield, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />
              <div className="grid grid-cols-2 gap-6">
                <img src="https://picsum.photos/seed/pakistan1/500/700" alt="Zaxboost Event" className="rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/pakistan2/500/700" alt="Zaxboost Lifestyle" className="rounded-[40px] mt-12 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Our Story
              </div>
              <h2 className="text-6xl lg:text-8xl font-black uppercase mb-10 leading-[0.9] italic tracking-tighter">
                Born in Pakistan, <br />
                <span className="text-brand-gold">Fueled by Ambition</span>
              </h2>
              <p className="text-xl text-brand-white/50 mb-10 leading-relaxed font-medium">
                Zaxboost is more than just a drink. It's a movement. We started with a simple mission: 
                to provide the youth of Pakistan with a world-class stimulant that matches their energy.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Globe, text: "Global Standards" },
                  { icon: Shield, text: "Premium Quality" },
                  { icon: Target, text: "Pure Focus" },
                  { icon: Zap, text: "Instant Charge" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                      <item.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-[10px] text-brand-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
