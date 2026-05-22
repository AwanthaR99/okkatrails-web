import { CheckCircle2, XCircle, Clock, MapPin, Wine, Crown } from 'lucide-react';
import BookingFormCard from '@/components/BookingFormCard';

export default function PremiumSolitudePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center pb-0">
        <div className="absolute inset-0 bg-stone-950">
          {/* public/images/premium-solitude.jpeg (Luxury Villa/Jeep image) */}
          <div className="w-full h-full bg-[url('/premium-solitude.jpeg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-[#F4F1EA]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full mt-20">
          <div className="flex justify-center gap-2 mb-6">
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
              VIP Custom Itinerary
            </span>
            <span className="bg-white/5 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
              Utmost Privacy
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
            The Premium <br/><span className="text-[#D4AF37] italic font-serif">Solitude</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            A completely private, high-end expedition focused on absolute isolation. Featuring dedicated 4x4 fleets, luxury boutique stays, and a VIP private safari in Yala National Park.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 relative -mt-20 z-20">
        
        {/* LEFT COLUMN: Itinerary & Details */}
        <div className="lg:w-2/3 space-y-12 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100">
          
          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-stone-100">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                <Clock size={24} />
              </div>
              <span className="text-xs text-stone-500 font-bold uppercase tracking-widest mt-2">Duration</span>
              <span className="font-semibold text-stone-900">3+ Nights</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                <Crown size={24} />
              </div>
              <span className="text-xs text-stone-500 font-bold uppercase tracking-widest mt-2">Style</span>
              <span className="font-semibold text-stone-900">VIP Luxury</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                <MapPin size={24} />
              </div>
              <span className="text-xs text-stone-500 font-bold uppercase tracking-widest mt-2">Locations</span>
              <span className="font-semibold text-stone-900">Monaragala & Yala</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                <Wine size={24} />
              </div>
              <span className="text-xs text-stone-500 font-bold uppercase tracking-widest mt-2">Dining</span>
              <span className="font-semibold text-stone-900">Private Chef</span>
            </div>
          </div>

          {/* Description Block */}
          <div>
            <h2 className="text-3xl font-black text-stone-900 mb-6 uppercase tracking-tight">The Ultimate Privilege</h2>
            <p className="text-stone-600 leading-relaxed text-lg font-light mb-8">
              This isn't just a tour; it's a statement. The Premium Solitude is designed for individuals who demand raw adventure without sacrificing five-star comforts. We clear the crowds, curate the finest private accommodations, and place a dedicated team at your disposal.
            </p>
            
            <div className="space-y-6">
              
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 border-l-4 border-l-[#D4AF37]">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Dedicated 4x4 Fleet</h3>
                <p className="text-stone-600">From the moment you land, a premium modified 4x4 vehicle with a discrete, highly trained driver and guide is exclusively yours for the entire duration.</p>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 border-l-4 border-l-[#D4AF37]">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Private Yala Safari</h3>
                <p className="text-stone-600">Bypass the standard tourist queues. Experience the world-renowned Yala National Park in absolute privacy with elite trackers dedicated solely to finding leopards for you.</p>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 border-l-4 border-l-[#D4AF37]">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Boutique Luxury Stays</h3>
                <p className="text-stone-600">Retreat to hidden, high-end boutique villas nestled in the jungle. Enjoy air-conditioned comfort, private infinity pools, and dining prepared by personal chefs.</p>
              </div>

            </div>
          </div>

          {/* Included / Excluded Grid */}
          <div className="pt-8 border-t border-stone-100">
            <h2 className="text-2xl font-black text-stone-900 mb-8 uppercase tracking-tight">VIP Inclusions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex gap-3 text-stone-700 font-medium"><CheckCircle2 className="text-[#D4AF37] shrink-0" size={20} /> VIP Airport Helicopter / Luxury Car Pickup</li>
                  <li className="flex gap-3 text-stone-700 font-medium"><CheckCircle2 className="text-[#D4AF37] shrink-0" size={20} /> 5-Star Boutique Villa Accommodations</li>
                  <li className="flex gap-3 text-stone-700 font-medium"><CheckCircle2 className="text-[#D4AF37] shrink-0" size={20} /> Private Chef & Custom Menus</li>
                  <li className="flex gap-3 text-stone-700 font-medium"><CheckCircle2 className="text-[#D4AF37] shrink-0" size={20} /> Exclusive Full-Day Yala Safari</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-stone-400 mb-4 uppercase tracking-widest text-xs">Exclusions:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> International Flights</li>
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Premium Imported Liquors (Can be arranged)</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Booking Form */}
        <div className="lg:w-1/3 relative z-30">
          <div className="sticky top-28 shadow-2xl rounded-3xl">
            {/* Form එකට උඩින් Premium Badge එකක් */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#112211] text-[#D4AF37] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest z-10 shadow-lg whitespace-nowrap">
              Bespoke Experience
            </div>
            <BookingFormCard />
          </div>
        </div>

      </div>
    </div>
  );
}