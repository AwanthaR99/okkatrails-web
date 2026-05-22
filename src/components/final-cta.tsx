'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#112211] overflow-hidden py-24 sm:py-32">
      
      {/* 🏞️ Background Image Overlay with Dark Premium Vignette */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[url('/hero-cab-jungle.jpeg')] bg-cover bg-center mix-blend-overlay scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a140a] via-[#112211]/95 to-[#112211]/80 z-0" />

      {/* 🎇 Luxury Ambient Light Highlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
        
        {/* Soft Gold Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          <Sparkles size={12} />
          <span>Your Private 4x4 Fleet Awaits</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F4F1EA] uppercase tracking-tight leading-none max-w-4xl mx-auto"
        >
          Ready for the Ultimate <br />
          <span className="text-[#D4AF37]">Sri Lankan Adventure?</span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Uncover hidden gemstones, sleep under the stars, and explore the raw wilderness of Monaragala. Your private 4x4 expedition is just a click away.
        </motion.p>

        {/* 🛠️ ACTION BUTTONS GROUP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Primary Gold Booking Button */}
          <a
            href="#packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#112211] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#F4F1EA] hover:text-[#112211] transition-all duration-300 shadow-2xl active:scale-98 group cursor-pointer"
          >
            <span>Book Your Journey</span>
            <Calendar size={14} className="transition-transform group-hover:scale-110" />
          </a>

          {/* Secondary Outline WhatsApp Expert Button */}
          <a
            href="https://wa.me/94711210000"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-[#F4F1EA] border border-white/20 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/5 hover:border-[#D4AF37] transition-all duration-300 active:scale-98 cursor-pointer"
          >
            <MessageCircle size={14} className="text-emerald-400" />
            <span>Talk to an Expert</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}