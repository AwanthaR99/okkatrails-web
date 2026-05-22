'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tourPackages = [
    { name: "The Explorer's Essence", duration: "2D / 1N", href: "/packages/explorers-essence" },
    { name: "The Wild & Divine", duration: "3D / 2N", href: "/packages/wild-divine" },
    { name: "The Hardcore Nomad", duration: "4D / 3N", href: "/packages/hardcore-nomad" },
    { name: "The Premium Solitude", duration: "VIP Custom", href: "/packages/premium-solitude" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-forest/95 backdrop-blur-md shadow-2xl py-3 text-brand-sand'
          : 'bg-gradient-to-b from-brand-forest/80 to-transparent py-6 text-brand-sand'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* 🗺️ Premium Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="OKKATRAILS Logo"
                  fill
                  sizes="48px"
                  className="object-contain brightness-0 invert" 
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest leading-none text-brand-gold">
                  OKKA
                </span>
                <span className="text-xs tracking-widest font-light text-brand-sand/90">
                  TRAILS
                </span>
              </div>
            </a>
          </div>

          {/* 💻 Desktop Modern Premium Links */}
          <div className="hidden md:flex items-center space-x-10 font-medium tracking-wide text-sm">
            <a href="/" className="relative py-2 text-brand-sand hover:text-brand-gold transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full">
              Home
            </a>
            
            {/* Smooth Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className="flex items-center gap-1 text-brand-sand hover:text-brand-gold transition-colors cursor-pointer">
                Tour Packages <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown ? 'rotate-180 text-brand-gold' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-brand-forest text-brand-sand rounded-2xl shadow-2xl p-4 mt-2 border border-brand-sand/10"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-brand-gold/60 px-3 mb-2">
                      Curated Journeys
                    </div>
                    {tourPackages.map((pkg, i) => (
                      <a
                        key={i}
                        href={pkg.href}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-brand-olive hover:text-brand-sand transition-all duration-200 group/item"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{pkg.name}</span>
                          <span className="text-xs text-brand-sand/60 group-hover/item:text-brand-gold">{pkg.duration}</span>
                        </div>
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-brand-gold" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/experience" className="relative py-2 text-brand-sand hover:text-brand-gold transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full">
              The Experience
            </a>
            {/* මෙතනයි වෙනස් කළේ (Desktop) */}
            <a href="/safety" className="relative py-2 text-brand-sand hover:text-brand-gold transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full">
              Safety & Policy
            </a>
            <a href="/about" className="relative py-2 text-brand-sand hover:text-brand-gold transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full">
              About Us
            </a>
          </div>

          {/* ⚡ Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Premium Currency Selector */}
            <button className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-sand hover:text-brand-gold border border-brand-sand/30 hover:border-brand-gold px-3.5 py-2 rounded-full cursor-pointer transition-colors">
              <Globe size={13} />
              <span>USD</span>
              <ChevronDown size={12} />
            </button>

            {/* Premium Gold CTA Button */}
            <a 
              href="https://wa.me/94771234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-gold text-brand-forest rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-brand-sand hover:text-brand-forest active:translate-y-0"
            >
              Book Now
            </a>
          </div>

          {/* 📱 Mobile Toggle */}
          <div className="md:hidden flex items-center text-brand-sand">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-forest text-brand-sand border-t border-brand-sand/10 shadow-2xl"
          >
            <div className="px-6 py-8 space-y-5 text-base font-medium">
              <a href="/" onClick={() => setIsOpen(false)} className="block py-1 hover:text-brand-gold transition-colors">Home</a>
              
              <div className="py-2 border-y border-brand-sand/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold/60 block">Our Journeys</span>
                <div className="pl-2 grid grid-cols-1 gap-3">
                  {tourPackages.map((pkg, i) => (
                    <a
                      key={i}
                      href={pkg.href}
                      onClick={() => setIsOpen(false)}
                      className="flex justify-between items-center text-sm text-brand-sand/90"
                    >
                      <span>{pkg.name}</span>
                      <span className="text-xs text-brand-gold font-mono">{pkg.duration}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a href="/experience" onClick={() => setIsOpen(false)} className="block py-1 hover:text-brand-gold transition-colors">The Experience</a>
              {/* මෙතනයි වෙනස් කළේ (Mobile) */}
              <a href="/safety" onClick={() => setIsOpen(false)} className="block py-1 hover:text-brand-gold transition-colors">Safety & Policy</a>
              <a href="/about" onClick={() => setIsOpen(false)} className="block py-1 hover:text-brand-gold transition-colors">About Us</a>
              
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between border border-brand-sand/25 px-4 py-3 rounded-xl">
                  <span className="text-sm flex items-center gap-2 font-light"><Globe size={16} /> Base Currency</span>
                  <span className="text-sm font-bold text-brand-gold">USD ($)</span>
                </div>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold text-brand-forest text-center py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider active:scale-98 transition-transform shadow-lg"
                >
                  Initiate Booking
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}