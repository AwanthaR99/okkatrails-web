'use client';

import { motion } from 'react-redux'; // වැරදීමකින් හෝ වෙනත් ලයිබ්‍රරි ආවොත්, අපි සාමාන්‍ය motion ගනිමු
import { motion as framerMotion } from 'framer-motion';
import { MapPin, Compass, Car, Navigation, ArrowRight } from 'lucide-react';

const nearbyHubs = [
  { name: "Ella", distance: "45 km", duration: "1.5 Hrs Drive", desc: "From misty tea mountains down to the raw wilderness." },
  { name: "Arugam Bay", distance: "70 km", duration: "2 Hrs Drive", desc: "From the world-class surf waves straight into the deep jungle." },
  { name: "Yala National Park", distance: "Bordering", duration: "Direct 4x4 Access", desc: "Pitching our high-end tents right on the safe park boundaries." }
];

export default function LocationMap() {
  return (
    <section className="py-24 bg-brand-forest text-brand-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ✍️ LEFT COLUMN: TYPOGRAPHY & HUB MILESTONES (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <framerMotion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest"
              >
                <Navigation size={14} className="animate-pulse" />
                <span>Strategic Location</span>
              </framerMotion.div>
              <framerMotion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none"
              >
                Where is <br />
                <span className="text-brand-gold">Monaragala?</span>
              </framerMotion.h2>
            </div>

            <framerMotion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base opacity-80 font-light leading-relaxed"
            >
              Perfectly located between the misty mountains of <span className="font-semibold text-white">Ella</span> and the iconic surf waves of <span className="font-semibold text-white">Arugam Bay</span>. OKKATRAILS sits right in the untouched transit corridor, making it an effortless addition to your Sri Lankan journey.
            </framerMotion.p>

            {/* Hub Cards List */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {nearbyHubs.map((hub, index) => (
                <framerMotion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-3 bg-brand-gold text-brand-forest rounded-lg h-fit">
                    <Car size={18} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between w-full gap-4">
                      <h4 className="font-bold text-base tracking-wide text-white group-hover:text-brand-gold transition-colors">{hub.name}</h4>
                      <span className="text-xs font-mono font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-md">
                        {hub.duration}
                      </span>
                    </div>
                    <p className="text-xs opacity-70 font-light leading-relaxed">{hub.desc}</p>
                  </div>
                </framerMotion.div>
              ))}
            </div>
          </div>

          {/* 🗺️ RIGHT COLUMN: THE INTERACTIVE VISUAL MAP SHOWCASE (7 Columns) */}
          <framerMotion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[500px]"
          >
            {/* Embedded Luxury Graphic Vibe */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] z-0" />

            {/* Map Header Overlay */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-brand-gold rounded-full animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-sand/80">Okkampitiya HQ Active Map</span>
              </div>
              <span className="text-xs font-mono opacity-50">6.7351° N, 81.3324° E</span>
            </div>

            {/* 📍 Interactive Map Graphic Box */}
            <div className="relative flex-1 w-full bg-[#162a16] rounded-2xl overflow-hidden border border-white/5 shadow-inner flex items-center justify-center p-8 group min-h-[350px]">
              
              {/* Map Route Graphic Nodes (Styled Using CSS Grid/Flex for Minimalist Vibe) */}
              <div className="relative w-full max-w-md h-64 flex flex-col justify-between items-center z-10">
                
                {/* Node: Ella */}
                <div className="absolute top-0 left-4 flex items-center gap-2 bg-brand-forest/90 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg">
                  <MapPin size={14} className="text-brand-sand" />
                  <span className="text-xs font-bold">Misty Ella</span>
                </div>

                {/* Route Line Left */}
                <div className="absolute top-8 left-16 w-24 h-16 border-l-2 border-b-2 border-dashed border-brand-gold/30 rounded-bl-3xl z-0" />

                {/* Node: OKKATRAILS HQ (Center Core) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <div className="relative inline-block p-4 bg-brand-gold text-brand-forest rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-bounce mb-2">
                    <Compass size={28} className="animate-spin-slow" />
                  </div>
                  <div className="bg-brand-gold text-brand-forest px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                    OKKATRAILS HQ
                  </div>
                  <span className="text-[10px] opacity-60 mt-1 block">Okkampitiya, Monaragala</span>
                </div>

                {/* Route Line Right */}
                <div className="absolute bottom-10 right-16 w-24 h-16 border-r-2 border-t-2 border-dashed border-brand-gold/30 rounded-tr-3xl z-0" />

                {/* Node: Arugam Bay */}
                <div className="absolute bottom-0 right-4 flex items-center gap-2 bg-brand-forest/90 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg">
                  <MapPin size={14} className="text-blue-400" />
                  <span className="text-xs font-bold">Arugam Bay Surf</span>
                </div>

                {/* Node: Yala Border */}
                <div className="absolute bottom-0 left-8 flex items-center gap-2 bg-brand-forest/90 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg">
                  <MapPin size={14} className="text-brand-gold" />
                  <span className="text-xs font-bold">Yala Boundaries</span>
                </div>

              </div>

            </div>

            {/* Embedded Live Google Maps Direct Route Opener Button */}
            <div className="relative z-10 mt-6 flex justify-end">
              <a 
                href="https://maps.google.com/?q=Okkampitiya,Monaragala" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors group"
              >
                <span>Open in Google Maps</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </framerMotion.div>

        </div>
      </div>
    </section>
  );
}