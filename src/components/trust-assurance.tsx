'use client';

import { motion } from 'framer-motion';
import { 
  PlaneLanding, 
  RefreshCcw, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  ChevronRight, 
  Clock8
} from 'lucide-react';

export default function TrustAssurance() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#F4F1EA]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-[#064e3b] text-stone-100 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-emerald-800 relative overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />

        {/* 🛡️ SECTION HEADER */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 text-[#D4AF37] border border-emerald-500/30 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <ShieldCheck size={14} />
            <span>Okka Trails Guaranteed</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none">
            Worry-Free Adventures. <br />
            <span className="text-emerald-400">Guaranteed.</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Your journey to Monaragala should be filled with excitement, not anxiety. Here is how we protect your time and safety at every turn.
          </p>
        </div>

        {/* 🎛️ THE 2-COLUMN TRUST GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* ✈️ LEFT SIDE: FLIGHT DELAY SYSTEM */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Clock8 size={24} strokeWidth={2.5} />
                <h3 className="text-xl font-bold tracking-wide uppercase">Flight Delay? No Problem.</h3>
              </div>
              <p className="text-stone-300 font-light leading-relaxed">
                Long-haul flights can be unpredictable. If your flight is delayed, our <strong>Dynamic Auto-Balance System</strong> automatically recalibrates your entire itinerary. No rush, no penalties—just 100% experience delivery.
              </p>
            </div>

            {/* 📊 MINI-INFOGRAPHIC FLOW */}
            <div className="bg-emerald-950/50 border border-emerald-500/20 p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center">
                    <PlaneLanding size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase opacity-60">Delay</span>
                </div>

                <ChevronRight className="text-emerald-500/30" />

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center animate-spin-slow">
                    <RefreshCcw size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase opacity-60">Auto-Adjust</span>
                </div>

                <ChevronRight className="text-emerald-500/30" />

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase opacity-60">100% Tour</span>
                </div>

              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/10 text-center">
                <span className="text-[11px] italic text-emerald-400/80">"Never lose a single moment you paid for."</span>
              </div>
            </div>
          </div>

          {/* 🩺 RIGHT SIDE: SAFETY STANDARDS */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Stethoscope size={24} strokeWidth={2.5} />
                <h3 className="text-xl font-bold tracking-wide uppercase">Uncompromising Safety.</h3>
              </div>
              <p className="text-stone-300 font-light leading-relaxed">
                Your safety is our absolute priority. Every OKKATRAILS expedition is backed by comprehensive Public Liability Insurance and certified local experts. We take care of the risks, so you can focus on the thrill.
              </p>
            </div>

            {/* SAFETY CHECKLIST UI */}
            <div className="space-y-3">
              {[
                "Public Liability Insurance Coverage",
                "Certified First-Aid Trained Hosts",
                "Satellite-linked Emergency Comms",
                "Full Pre-Expedition Safety Briefings"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-500/10">
                  <div className="bg-emerald-500/20 p-1 rounded-md">
                    <ShieldCheck size={14} className="text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-stone-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🔗 CTA AT THE BOTTOM */}
        <div className="relative z-10 mt-16 pt-8 border-t border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-stone-400 max-w-sm text-center sm:text-left font-light">
            Need more details? Review our comprehensive <a href="/policy" className="text-brand-gold underline underline-offset-4">Safety Waiver & Flight Policy</a>.
          </p>
          <button className="bg-[#D4AF37] text-emerald-950 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-stone-100 transition-all duration-300 shadow-xl active:scale-95">
            Book With Confidence
          </button>
        </div>

      </motion.div>
    </section>
  );
}