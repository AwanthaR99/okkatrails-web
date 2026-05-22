import { CheckCircle2, XCircle, Clock, MapPin, Tent, Flame } from 'lucide-react';
import BookingFormCard from '@/components/BookingFormCard';

export default function HardcoreNomadPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 bg-stone-950">
          {/* public/images/hardcore-nomad.jpeg කියලා පින්තූරයක් දාන්න */}
          <div className="w-full h-full bg-[url('/hardcore-nomad.jpeg')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex gap-2 mb-4">
            <span className="bg-red-900/80 text-white text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">4 Days / 3 Nights</span>
            <span className="bg-stone-800/50 backdrop-blur-sm text-stone-200 text-xs font-semibold px-3 py-1 rounded-full border border-stone-500/30">Deep Adventure</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase">The Hardcore Nomad</h1>
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl font-light">
            Built for true thrill-seekers. Features a high-adrenaline Night Foot Safari with powerful torches, deep jungle off-roading, and multiple immersive wilderness campsites.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* LEFT COLUMN: Itinerary & Details */}
        <div className="lg:w-2/3 space-y-12">
          
          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-stone-200">
            <div className="flex flex-col gap-1">
              <Clock className="text-red-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Duration</span>
              <span className="font-semibold text-stone-900">4 Days / 3 Nights</span>
            </div>
            <div className="flex flex-col gap-1">
              <MapPin className="text-red-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Location</span>
              <span className="font-semibold text-stone-900">Deep Wilderness</span>
            </div>
            <div className="flex flex-col gap-1">
              <Flame className="text-red-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Activity</span>
              <span className="font-semibold text-stone-900">Night Safari</span>
            </div>
            <div className="flex flex-col gap-1">
              <Tent className="text-red-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Stay</span>
              <span className="font-semibold text-stone-900">Mobile Camps</span>
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="text-3xl font-black text-stone-900 mb-6 uppercase tracking-tight">Expedition Blueprint</h2>
            
            <div className="space-y-6">
              
              {/* Day 1 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <span className="bg-red-950 text-red-400 px-3 py-1 rounded-lg text-sm font-mono tracking-widest">DAY 01</span>
                  Off-Road Insertion & Base Camp
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">09:00</span>
                    <p>Pickup in a customized 4x4 Hilux. Immediate off-road transition into the Monaragala wilderness.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">14:00</span>
                    <p>Arrive at the first remote location. Learn to set up a mobile jungle camp and start an open fire.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">19:00</span>
                    <p>Bushcraft dinner cooked entirely over the campfire. Briefing on deep jungle safety.</p>
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl">High Adrenaline</div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <span className="bg-red-950 text-red-400 px-3 py-1 rounded-lg text-sm font-mono tracking-widest">DAY 02</span>
                  The Night Foot Safari
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">10:00</span>
                    <p>Jungle trekking and tracking. Learn to identify animal footprints and territory markers.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">16:00</span>
                    <p>Relocate camp closer to the wildlife corridor. Rest and gear prep.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-red-600 min-w-[80px] font-mono text-sm mt-0.5">22:00</span>
                    <p className="font-medium text-stone-800">The Ultimate Thrill: Step into the pitch-black wilderness on foot with powerful torches, safely guided by our indigenous trackers.</p>
                  </li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <span className="bg-red-950 text-red-400 px-3 py-1 rounded-lg text-sm font-mono tracking-widest">DAY 03</span>
                  The Watchtower Extraction
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">09:00</span>
                    <p>Break down camp and extract to an active Chena cultivation village.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">18:00</span>
                    <p>Ascend the traditional 20ft Watchtower (Pela). Guard the borders against wild elephants with the local farmers.</p>
                  </li>
                </ul>
              </div>

              {/* Day 4 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <span className="bg-red-950 text-red-400 px-3 py-1 rounded-lg text-sm font-mono tracking-widest">DAY 04</span>
                  River Wash & Return to Civilization
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">07:00</span>
                    <p>Morning bath in a safe, flowing jungle river to wash off the wild.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-stone-400 min-w-[80px] font-mono text-sm mt-0.5">11:00</span>
                    <p>Final traditional feast before VIP transfer back to your hotel or airport.</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Included / Excluded Grid */}
          <div>
            <h2 className="text-2xl font-black text-stone-900 mb-6 uppercase tracking-tight">Expedition Provisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-900 p-8 rounded-2xl shadow-xl border border-stone-800">
              
              <div className="space-y-4">
                <h3 className="font-bold text-stone-200 mb-4 uppercase tracking-widest text-xs">Included:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-400"><CheckCircle2 className="text-red-500 shrink-0" size={20} /> Extreme 4x4 Off-roading Transport</li>
                  <li className="flex gap-3 text-stone-400"><CheckCircle2 className="text-red-500 shrink-0" size={20} /> Pro Camping Gear & Torches</li>
                  <li className="flex gap-3 text-stone-400"><CheckCircle2 className="text-red-500 shrink-0" size={20} /> Expert Trackers & Armed Safety</li>
                  <li className="flex gap-3 text-stone-400"><CheckCircle2 className="text-red-500 shrink-0" size={20} /> All Heavy-Duty Meals (Full Board)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-stone-500 mb-4 uppercase tracking-widest text-xs">Not Included:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-600"><XCircle className="text-stone-700 shrink-0" size={20} /> Personal Trekking Boots/Apparel</li>
                  <li className="flex gap-3 text-stone-600"><XCircle className="text-stone-700 shrink-0" size={20} /> Extreme Sports Insurance</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Booking Form */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-24">
            <BookingFormCard />
          </div>
        </div>

      </div>
    </div>
  );
}