'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // <--- මේක අලුතෙන් එකතු කළා
import { Calendar, ArrowRight, CheckCircle2, Sparkles, Gem, Tent, Sprout, Eye, Sun } from 'lucide-react';

const packages = [
  {
    badge: "2 Days / 1 Night | Popular",
    title: "The Explorer’s Essence",
    desc: "The ultimate introduction to Monaragala. Go 15ft underground into active gem mines, pan for real stones, and camp beside the serene Okkampitiya lake with a fresh catch open-fire BBQ.",
    price: "$350",
    link: "/packages/explorers-essence"
  },
  {
    badge: "3 Days / 2 Nights | Nature & Culture",
    title: "The Wild & Divine",
    desc: "Rejuvenate your soul with sunrise yoga on ancient rock plateaus and a guided heritage tour of Maligawila. Spend an unforgettable night guarding a traditional Chena farm inside an authentic watchtower (Pela).",
    price: "$550",
    link: "/packages/wild-divine"
  },
  {
    badge: "4 Days / 3 Nights | Deep Adventure",
    title: "The Hardcore Nomad",
    desc: "Built for true thrill-seekers. Features a high-adrenaline Night Foot Safari with powerful torches to track wilderness life, a full agricultural Chena experience, and multiple immersive campsites.",
    price: "$750",
    link: "/packages/hardcore-nomad"
  },
  {
    badge: "3+ Nights Custom | VIP Luxury",
    title: "The Premium Solitude",
    desc: "A completely private, high-end expedition focused on utmost privacy. Includes a dedicated 4x4 Hilux fleet, premium luxury boutique villa stays, private dining, and a VIP private Yala National Park safari.",
    price: "$950",
    link: "/packages/premium-solitude"
  }
];

const customActivities = [
  { id: "gem", label: "Hands-on Gem Mining & Panning", icon: Gem },
  { id: "lake", label: "Serene Lakeside Camping & Lake Fishing", icon: Tent },
  { id: "chena", label: "Chena Farming & Traditional Watchtower Overnight", icon: Sprout },
  { id: "safari", label: "Thrilling Night Foot Safari", icon: Eye },
  { id: "yoga", label: "Ancient Rock Yoga & Maligawila Heritage Tour", icon: Sun },
];

export default function FeaturedPackages() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const toggleActivity = (id: string) => {
    if (selectedActivities.includes(id)) {
      setSelectedActivities(selectedActivities.filter(a => a !== id));
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  // WhatsApp Link Generation Logic
  const getWhatsAppLink = () => {
    const phoneNumber = "94711210000"; 
    
    if (selectedActivities.length === 0) {
      return `https://wa.me/${phoneNumber}?text=Hi%20OKKATRAILS!%20I'm%20interested%20in%20building%20a%20custom%20trail.`;
    }

    const selectedLabels = customActivities
      .filter(act => selectedActivities.includes(act.id))
      .map(act => act.label)
      .join('%0A-%20'); 

    const message = `Hi OKKATRAILS! I want to build a custom trail with these activities:%0A-%20${selectedLabels}%0A%0APlease let me know the possibilities.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="packages" className="py-24 bg-[#F4F1EA] text-[#112211]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 🗺️ SECTION HEADER */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B5320] block mb-2">
            Curated Expeditions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Featured Trails
          </h2>
        </div>

        {/* 💻 4-COLUMN EXPEDITIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#112211]/5 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-[#4B5320] bg-[#4B5320]/5 px-3 py-1 rounded-md inline-block">
                  {pkg.badge}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#112211] group-hover:text-[#4B5320] transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-sm opacity-75 font-light leading-relaxed">
                  {pkg.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#112211]/5 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs opacity-60 font-medium">Investment</span>
                  <span className="text-xl font-black text-[#112211]">
                    {pkg.price} <span className="text-xs font-light opacity-60">/ pax</span>
                  </span>
                </div>
                
                {/* 🚀 THE MAGIC FIX: Back to Next.js <Link> with scroll control */}
                <Link
                  href={pkg.link}
                  scroll={true}
                  className="w-full flex items-center justify-center gap-2 bg-[#112211] text-[#F4F1EA] py-3 rounded-xl text-xs font-bold uppercase tracking-wider group-hover:bg-[#4B5320] transition-colors"
                >
                  <span>View Full Itinerary</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎛️ NEW SECTION: CREATE YOUR OWN TRAIL BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1, margin: "50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#064e3b] min-h-[500px] flex items-center"
        >
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/hero-cab-jungle.jpeg')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#112211] via-[#112211]/95 to-transparent z-0" />

          <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-[#F4F1EA]">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                <Sparkles size={14} />
                <span>Tailor-Made Expeditions</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                Design Your <br />Dream Expedition
              </h3>
              <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed">
                Don't want a fixed schedule? Mix and match our exclusive experiences to build your own tailor-made Monaragala journey. Select your favorite activities on the right and start your path.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]/80">
                Select Experiences ({selectedActivities.length} Chosen)
              </div>
              
              <div className="space-y-3">
                {customActivities.map((act) => {
                  const isChecked = selectedActivities.includes(act.id);
                  const ActIcon = act.icon;
                  return (
                    <div
                      key={act.id}
                      onClick={() => toggleActivity(act.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 select-none ${
                        isChecked 
                          ? 'bg-[#4B5320] border-[#D4AF37] text-[#F4F1EA] shadow-lg' 
                          : 'bg-white/5 border-white/10 text-[#F4F1EA] hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <ActIcon size={18} className={isChecked ? 'text-[#D4AF37]' : 'opacity-60'} />
                        <span className="text-sm font-medium tracking-wide">{act.label}</span>
                      </div>
                      <CheckCircle2 
                        size={18} 
                        className={`transition-colors ${isChecked ? 'text-[#D4AF37]' : 'opacity-20 text-white'}`} 
                        fill={isChecked ? "currentColor" : "none"}
                        color={isChecked ? "#4B5320" : "currentColor"}
                      />
                    </div>
                  );
                })}
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#112211] font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-[#F4F1EA] hover:text-[#112211] transition-all duration-300 shadow-xl"
              >
                <span>Build My Custom Trail</span>
                <Calendar size={14} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}