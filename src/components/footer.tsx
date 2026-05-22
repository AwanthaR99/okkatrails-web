'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-20 pb-8 px-6 md:px-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        
        {/* 🗺️ COLUMN 1: BRAND INFO & IDENTITY */}
        <div className="space-y-6">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 brightness-0 invert">
              <Image
                src="/logo.png"
                alt="OKKATRAILS Official Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-widest text-[#D4AF37] leading-none">OKKA</span>
              <span className="text-[10px] tracking-widest text-stone-200 font-light">TRAILS</span>
            </div>
          </a>
          <p className="text-xs font-bold text-stone-300 tracking-wider uppercase">
            Eco-Adventure & Gems • Sri Lanka
          </p>
          <p className="text-xs font-light leading-relaxed text-stone-400 max-w-sm">
            Crafting raw, authentic, and luxury off-road expeditions into the heart of Sri Lanka's untouched wilderness. Deep interior explorations built for the elite nomad.
          </p>
        </div>

        {/* 🔗 COLUMN 2: QUICK LINKS */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Quick Navigation</h4>
          <ul className="space-y-2.5 text-xs font-light">
            {[
              { label: "Home", href: "/" },
              { label: "Tour Packages", href: "#packages" },
              { label: "Create Your Trail (Custom)", href: "#packages" },
              { label: "The Experience (Activities)", href: "/experience" },
              { label: "Flight & Safety Guarantee", href: "/safety-policy" },
              { label: "About Our Monaragala Team", href: "/about" }
            ].map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-stone-100 hover:translate-x-1 transition-all inline-block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🧭 COLUMN 3: OUR EXPEDITIONS */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Our Expeditions</h4>
          <ul className="space-y-2.5 text-xs font-light">
            {[
              { name: "The Explorer’s Essence", duration: "2D / 1N", href: "/packages/explorers-essence" },
              { name: "The Wild & Divine", duration: "3D / 2N", href: "/packages/wild-divine" },
              { name: "The Hardcore Nomad", duration: "4D / 3N", href: "/packages/hardcore-nomad" },
              { name: "The Premium Solitude", duration: "VIP Custom", href: "/packages/premium-solitude" }
            ].map((exp, i) => (
              <li key={i}>
                <a href={exp.href} className="hover:text-stone-100 flex items-center justify-between group/list">
                  <span>{exp.name}</span>
                  <span className="text-[10px] text-[#D4AF37]/60 group-hover/list:text-[#D4AF37] font-mono">{exp.duration}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 📍 COLUMN 4: CONTACT & SUPPORT */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">Contact & Support</h4>
          <ul className="space-y-3 text-xs font-light">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <span>Okkampitiya, Monaragala, Sri Lanka.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#D4AF37] shrink-0" />
              <a href="https://wa.me/94711210000" target="_blank" rel="noopener noreferrer" className="hover:text-stone-100 transition-colors">+94 71 121 0000</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="mailto:info@okkatrails.com" className="hover:text-stone-100 transition-colors font-medium">info@okkatrails.com</a>
                <a href="mailto:okkatrails@gmail.com" className="hover:text-stone-100 transition-colors opacity-60">okkatrails@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* 🔒 THE BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright Texts */}
        <div className="text-[11px] font-light opacity-60 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-bold text-stone-300">OKKATRAILS</span>. All Rights Reserved.
        </div>

        {/* Legal Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-light opacity-70">
          <a href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
          <a href="/safety-policy" className="hover:text-[#D4AF37] transition-colors">Liability Waiver</a>
        </div>

        {/* Social Media Icons Group */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a href="#" className="p-2 bg-stone-900 text-stone-400 hover:text-[#D4AF37] hover:bg-stone-850 rounded-full transition-all" aria-label="Instagram">
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="p-2 bg-stone-900 text-stone-400 hover:text-[#D4AF37] hover:bg-stone-850 rounded-full transition-all" aria-label="Facebook">
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          {/* Youtube */}
          <a href="#" className="p-2 bg-stone-900 text-stone-400 hover:text-[#D4AF37] hover:bg-stone-850 rounded-full transition-all" aria-label="Youtube">
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          
          {/* TikTok Custom SVG Icon */}
          <a href="#" className="p-2 bg-stone-900 text-stone-400 hover:text-[#D4AF37] hover:bg-stone-850 rounded-full transition-all" aria-label="TikTok">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.73 4.11 1.08.1 2.29.5 3.3 1.01V9.28c-1.23-.17-2.42-.6-3.41-1.39-.08 2.11-.13 4.21-.2 6.31-.18 2.41-1.21 4.72-3.15 6.17-2.11 1.7-5.11 2.21-7.64 1.34-2.81-.88-5.06-3.41-5.3-6.36-.31-3.32 1.39-6.66 4.38-8.1 1.25-.63 2.68-.9 4.08-.84 0 1.51-.01 3.01-.01 4.52-1.23-.22-2.58.07-3.52.92-.98.84-1.37 2.24-1.02 3.48.33 1.3 1.48 2.29 2.82 2.41 1.5.21 3.04-.49 3.65-1.89.23-.48.31-1 .31-1.52-.03-3.84-.01-7.68-.02-11.51z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}