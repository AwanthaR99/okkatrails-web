'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Trees } from 'lucide-react';
import Link from 'next/link';

export default function AboutHook() {
  return (
    <section className="py-24 sm:py-32 bg-brand-sand text-brand-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ✍️ Left Side: Typography & Brand Hook (6 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Soft Premium Subtitle */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-2 text-brand-olive font-bold text-xs uppercase tracking-widest"
            >
              <Trees size={16} className="text-brand-gold" />
              <span>The Okkamapitiya Vibe</span>
            </motion.div>

            {/* Powerful Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none"
            >
              Beyond the Usual Beaches, <br />
              <span className="text-brand-olive">Welcome to the Raw Interior.</span>
            </motion.h2>

            {/* Content Strong Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-brand-forest/80 font-light leading-relaxed max-w-xl"
            >
              We believe Sri Lanka’s true soul isn't found along the tourist-heavy coastlines. 
              OKKATRAILS takes you deep into the heart of Monaragala’s untouched gem veins, ancient hidden history, and raw, untamed wilderness. This is an exclusive passage to experiences that can’t be googled—crafted purely for the modern nomad.
            </motion.p>

            {/* Quick Core Pillars Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-forest/10"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-forest text-brand-gold rounded-xl">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">100% Authentic</h4>
                  <p className="text-xs opacity-70 mt-0.5">Real gem pits, real jungle watchtowers, local insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-forest text-brand-gold rounded-xl">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">Luxury-Grade Safety</h4>
                  <p className="text-xs opacity-70 mt-0.5">Premium custom utility vehicles and certified local hosts.</p>
                </div>
              </div>
            </motion.div>

            {/* Read More / Story Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-olive hover:text-brand-gold transition-colors group"
              >
                <span>Our Full Monaragala Story</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>

          {/* 📸 Right Side: High-Quality Portrait Image Showcase (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Luxury Gold Border Frame */}
            <div className="absolute -inset-3 border border-brand-gold/30 rounded-2xl translate-x-3 translate-y-3 hidden sm:block z-0" />
            
            {/* The Main Portrait Image Container */}
            <div className="relative aspect-[3/4] w-full bg-brand-forest rounded-2xl overflow-hidden shadow-2xl z-10 group">
              <Image
                src="/lake.jpg" // ඔයාගේ Portrait warm-toned පින්තූරයේ නම මෙතනට දාන්න මචන්
                alt="Authentic Sri Lankan Gem Mining Experience"
                fill
                sizes="(max-w-7xl) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
              />
              
              {/* Subtle Warm Elegant Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Floating Image Label */}
              <div className="absolute bottom-6 left-6 text-brand-sand z-20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">Live Experience</p>
                <p className="font-serif text-lg italic font-light tracking-wide">Tradition deeper than 6-feet.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}