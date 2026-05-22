'use client';

import { motion } from 'framer-motion';
import { Gem, Tent, Sprout, ShieldAlert, Sun, Car, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    icon: Gem,
    catchyText: "Deep Earth Exploration",
    title: "Authentic Gem Mining & Panning",
    desc: "Step 15ft underground into an active gem pit. Learn ancestral extraction methods and pan the river gravel with local experts. Best part? Keep any gemstone you find!"
  },
  {
    icon: Tent,
    catchyText: "Stars, Catch & BBQ",
    title: "Premium Lakeside Camping",
    desc: "Spend your night in premium tents right on the edge of the serene Okkampitiya Lake. Try traditional fishing and enjoy your catch fresh on an open-fire BBQ with local drinks."
  },
  {
    icon: Sprout,
    catchyText: "Live like a Guardian",
    title: "Chena Farm Living & Watchtower Stays",
    desc: "Work the rich agricultural lands of a traditional 'Hena.' Harvest your own fresh food, eat an authentic 'Heen Bath' lunch on a lotus leaf, and sleep safely in an upgraded traditional watchtower (Pela)."
  },
  {
    icon: ShieldAlert, // Yala Border එක හැඟවීමට
    catchyText: "Sleep on the Wild Side",
    title: "Borderline Jungle Camping",
    desc: "Immerse yourself in the deep wilderness. Stay in luxury safari tents pitched right on the safe boundaries of Yala National Park, feeling the raw pulse of nature."
  },
  {
    icon: Sun,
    catchyText: "Spiritual Rejuvenation",
    title: "Sunrise Yoga & Divine Heritage",
    desc: "Connect with your inner peace during a guided morning Yoga and Meditation session on an ancient rock plateau. Follow it with a guided historical tour of the colossal 7th-century Maligawila Buddha Statue."
  },
  {
    icon: Car,
    catchyText: "No Crowds, Pure Freedom",
    title: "100% Private 4x4 Hilux Fleet",
    desc: "Say goodbye to crowded tour buses. Enjoy door-to-door VIP luxury car transfers combined with a dedicated private 4x4 Adventure Hilux entirely for your team throughout the expedition."
  }
];

export default function ExperienceGrid() {
  return (
    <section className="py-24 bg-[#F4F1EA] text-[#112211]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 🌟 Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#4B5320] bg-[#4B5320]/10 px-4 py-1.5 rounded-full"
          >
            The Okka Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight"
          >
            Why OKKATRAILS?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg opacity-80 font-light"
          >
            We don't just guide tours; we curate raw, high-end expedition milestones that stay with you forever.
          </motion.p>
        </div>

        {/* 💻 Modern 3-Column Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative border border-transparent hover:border-[#4B5320]/20 hover:-translate-y-2 transition-all duration-300 rounded-2xl bg-white p-8 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Catchy Short Text Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#112211] text-[#D4AF37] rounded-xl transition-transform duration-300 group-hover:scale-110">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B5320]/60 bg-[#4B5320]/5 px-3 py-1 rounded-md">
                      {exp.catchyText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[#4B5320] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm opacity-75 font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                {/* Subtle Luxury Corner Indicator */}
                <div className="mt-6 pt-4 border-t border-[#112211]/5 flex justify-end">
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}