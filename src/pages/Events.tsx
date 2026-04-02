import { motion } from "motion/react";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

export default function Events() {
  const events = [
    { title: "Karachi Street Racing", date: "Oct 15, 2026", loc: "Sea View, Karachi", image: "https://picsum.photos/seed/racing/800/400" },
    { title: "Lahore Gaming Arena", date: "Nov 02, 2026", loc: "Expo Center, Lahore", image: "https://picsum.photos/seed/gaming/800/400" },
    { title: "Islamabad Music Fest", date: "Dec 12, 2026", loc: "F-9 Park, Islamabad", image: "https://picsum.photos/seed/music/800/400" },
    { title: "Peshawar Tech Summit", date: "Jan 20, 2027", loc: "University of Peshawar", image: "https://picsum.photos/seed/tech/800/400" },
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-gold text-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-brand-dark/10 text-brand-dark text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Live the Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl lg:text-[120px] font-black uppercase leading-[0.85] mb-8 italic tracking-tighter"
          >
            Upcoming <br /> Events
          </motion.h2>
          <p className="text-brand-dark/60 font-black uppercase tracking-[0.2em] text-sm">Join the Zaxboost revolution live across the nation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, i) => (
            <motion.div 
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] rounded-[50px] overflow-hidden mb-8 shadow-2xl">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                
                <div className="absolute top-8 left-8 bg-brand-white text-brand-dark px-6 py-3 rounded-2xl font-black text-sm italic shadow-xl">
                  {event.date}
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="text-brand-white">
                    <div className="flex items-center gap-2 text-brand-gold mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">{event.loc}</span>
                    </div>
                    <h3 className="text-4xl font-black uppercase italic leading-none">{event.title}</h3>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-brand-dark" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
