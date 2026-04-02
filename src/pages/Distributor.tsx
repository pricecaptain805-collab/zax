import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Distributor() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-dark text-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Partnership
            </div>
            <h2 className="text-7xl lg:text-9xl font-black uppercase leading-[0.85] mb-10 italic tracking-tighter">
              Scale <br /> With <span className="text-brand-gold">Us</span>
            </h2>
            <p className="text-xl text-brand-white/50 mb-16 leading-relaxed font-medium max-w-md">
              Join the fastest-growing energy drink network in Pakistan. 
              We're looking for visionary partners to fuel the nation.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: "Email", value: "hello@zaxboost.com" },
                { icon: Phone, label: "Phone", value: "+92 21 32561234" },
              ].map((item) => (
                <div key={item.label} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-colors group">
                  <item.icon className="w-6 h-6 text-brand-gold mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{item.label}</div>
                  <div className="font-black text-sm break-words">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-brand-white text-brand-dark p-16 rounded-[60px] relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Send className="w-32 h-32" />
            </div>
            <h3 className="text-4xl font-black uppercase italic mb-10 tracking-tight">Inquiry Form</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Full Name</label>
                  <input type="text" className="w-full bg-brand-dark/5 border-b-2 border-brand-dark/10 px-0 py-3 focus:border-brand-gold focus:outline-none transition-colors font-bold" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Company</label>
                  <input type="text" className="w-full bg-brand-dark/5 border-b-2 border-brand-dark/10 px-0 py-3 focus:border-brand-gold focus:outline-none transition-colors font-bold" placeholder="Doe Ent." />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Email Address</label>
                <input type="email" className="w-full bg-brand-dark/5 border-b-2 border-brand-dark/10 px-0 py-3 focus:border-brand-gold focus:outline-none transition-colors font-bold" placeholder="john@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Message</label>
                <textarea className="w-full bg-brand-dark/5 border-b-2 border-brand-dark/10 px-0 py-3 focus:border-brand-gold focus:outline-none transition-colors h-32 font-bold resize-none" placeholder="Tell us about your network..."></textarea>
              </div>
              <button className="group w-full bg-brand-dark text-brand-gold py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                Send Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
