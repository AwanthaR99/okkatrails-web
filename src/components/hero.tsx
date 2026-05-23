'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

const heroSlides = [
  {
    image: '/hero-cab-jungle.jpeg',
    tagline: 'UNTAMED WILDERNESS',
    title: 'The Real Sri Lankan Off-Road Safari',
    desc: 'Traverse the deep, untouched muddy trails of Monaragala and Yala borders in a fully custom Toyota Hilux.'
  },
  {
    image: '/kumbukkan-oya-swim.jpeg',
    tagline: 'PURE SERENITY',
    title: 'Swim in the Hidden Pools of Kumbukkan Oya',
    desc: 'Immerse yourself in crystal clear natural river streams hidden deep inside pristine tropical jungles.'
  },
  {
    image: '/bonfire-watchtower.jpeg',
    tagline: 'EXCLUSIVE NIGHTS',
    title: 'Bonfires & Watchtower Stays Under the Stars',
    desc: 'Roast fresh corn by the lake, sleep in an authentic jungle watchtower, and experience raw nature.'
  },
  {
    image: '/gem-mining.jpeg',
    tagline: 'ANCIENT TREASURES',
    title: 'Authentic Gem Mining Experience',
    desc: 'Step into a traditional 6-foot deep Sri Lankan gem pit and experience the thrill of finding raw precious stones.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // සෑම තත්පර 5කට වරක්ම පින්තූරය auto-change වෙන්න
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-brand-forest overflow-hidden">
      
      {/* 🏞️ Background Image Slider (Crossfade - FIXED) */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: current === index ? 0.6 : 0, 
            scale: current === index ? 1 : 1.05 
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: current === index ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority // සියලුම පින්තූර preload කිරීම සඳහා
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* 🌑 Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-transparent to-brand-forest/40 z-10 pointer-events-none" />

      {/* ✍️ Content Overlays */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl pointer-events-auto">
            
            {/* Animated Tagline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tagline-${current}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-4"
              >
                <Compass size={14} className="animate-spin-slow" />
                <span>{heroSlides[current].tagline}</span>
              </motion.div>
            </AnimatePresence>

            {/* Animated Main Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-brand-sand tracking-tight mb-6 uppercase leading-none"
              >
                {heroSlides[current].title}
              </motion.h1>
            </AnimatePresence>

            {/* Animated Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-brand-sand/80 font-light mb-8 max-w-2xl leading-relaxed"
              >
                {heroSlides[current].desc}
              </motion.p>
            </AnimatePresence>

            {/* Non-moving Static CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#packages"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-forest font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl hover:bg-brand-sand hover:text-brand-forest transition-all duration-300 group"
              >
                <span>Explore Expeditions</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 🧭 Bottom Custom Slide Indicators */}
      <div className="absolute bottom-12 right-6 sm:right-12 z-30 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              index === current ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-sand/40'
            }`}
          />
        ))}
      </div>

    </div>
  );
}