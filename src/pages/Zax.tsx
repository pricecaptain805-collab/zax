import { motion } from "motion/react";
import { Zap, Trophy, Users, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Zax() {
  const ingredients = [
    { title: "Ginseng", desc: "Natural root extract for mental clarity and focus.", icon: Zap },
    { title: "Taurine", desc: "Essential amino acid for physical endurance.", icon: Trophy },
    { title: "B-Vitamins", desc: "B6 & B12 complex for sustained energy release.", icon: Users },
    { title: "Caffeine", desc: "200mg of pure energy to keep you moving.", icon: Zap },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            The Science of Energy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl lg:text-9xl font-black uppercase mb-6 italic tracking-tighter"
          >
            The Formula
          </motion.h2>
          <p className="text-brand-dark/40 font-black tracking-[0.2em] uppercase max-w-lg mx-auto">
            A precision-engineered blend designed to push your boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[40px] bg-brand-dark text-brand-white hover:bg-brand-gold hover:text-brand-dark transition-all duration-700 group flex flex-col justify-between aspect-square"
            >
              <item.icon className="w-14 h-14 mb-8 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-3xl font-black uppercase italic mb-4">{item.title}</h3>
                <p className="opacity-60 font-medium leading-relaxed text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-5xl font-black uppercase italic mb-12 tracking-tight">Nutritional <br /> Breakdown</h3>
            <div className="space-y-2">
              {[
                { label: "Energy", value: "192.4KJ (46Kcal)" },
                { label: "Protein", value: "0g" },
                { label: "Carbohydrates", value: "11g" },
                { label: "Sugars", value: "11g" },
                { label: "Fat", value: "0g" },
                { label: "Taurine", value: "20mg" },
                { label: "Caffeine", value: "20mg" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-5 border-b border-brand-dark/10 group">
                  <span className="font-black uppercase tracking-[0.2em] text-xs opacity-40 group-hover:opacity-100 transition-opacity">{item.label}</span>
                  <span className="font-black text-xl italic">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="bg-brand-dark rounded-[50px] p-16 text-brand-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck className="w-40 h-40" />
              </div>
              <CheckCircle2 className="w-16 h-16 text-brand-gold mb-10" />
              <h4 className="text-4xl font-black uppercase italic mb-8">Uncompromising <br /> Quality</h4>
              <p className="text-brand-white/50 mb-12 leading-relaxed text-lg font-medium">
                Every can of Zaxboost is a testament to our commitment to excellence. 
                Produced in ISO-certified facilities with pharmaceutical-grade ingredients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-2xl mb-1 italic">ISO</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40">9001 Certified</div>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                  <div className="text-brand-gold font-black text-2xl mb-1 italic">HACCP</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Safety Standards</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
