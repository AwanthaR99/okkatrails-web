import { CheckCircle2, XCircle, Clock, MapPin, Tent, Pickaxe } from 'lucide-react';
// ඔයාගේ BookingFormCard එක තියෙන තැන අනුව මේ ලින්ක් එක වෙනස් වෙන්න ඕන. 
// මම උපකල්පනය කළා ඒක components ෆෝල්ඩර් එකේ තියෙනවා කියලා.
import BookingFormCard from '@/components/BookingFormCard'; 

export default function ExplorersEssencePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 bg-emerald-950">
          {/* අර 404 ආපු පින්තූරය public/images/lake-camp.jpeg විදිහට තියෙන්න ඕන */}
          <div className="w-full h-full bg-[url('/lake-camp.jpeg')] bg-cover bg-center opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex gap-2 mb-4">
            <span className="bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">2 Days / 1 Night</span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">Popular</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">The Explorer’s Essence</h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            A deep dive into Monaragala’s hidden wealth. Descend into active gem pits and spend the night by the serene Okkampitiya lake with a fresh catch BBQ.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* LEFT COLUMN: Itinerary & Details (lg:w-2/3) */}
        <div className="lg:w-2/3 space-y-12">
          
          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-stone-200">
            <div className="flex flex-col gap-1">
              <Clock className="text-emerald-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Duration</span>
              <span className="font-semibold text-stone-900">2 Days / 1 Night</span>
            </div>
            <div className="flex flex-col gap-1">
              <MapPin className="text-emerald-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Location</span>
              <span className="font-semibold text-stone-900">Okkampitiya</span>
            </div>
            <div className="flex flex-col gap-1">
              <Pickaxe className="text-emerald-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Activity</span>
              <span className="font-semibold text-stone-900">Gem Mining</span>
            </div>
            <div className="flex flex-col gap-1">
              <Tent className="text-emerald-800" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Stay</span>
              <span className="font-semibold text-stone-900">Lakeside Camp</span>
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Your Expedition Itinerary</h2>
            
            <div className="space-y-6">
              {/* Day 1 Block */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg text-sm">Day 01</span>
                  Descent into the Earth & Lakeside Serenity
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">09:00 AM</span>
                    <p>VIP Airport/Hotel Pickup and transfer to Monaragala in a premium vehicle.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">01:00 PM</span>
                    <p>Authentic Sri Lankan "Heen Bath" lunch served on a lotus leaf.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">03:00 PM</span>
                    <p>Hands-on Gem Mining experience. Descend 15ft, pan the gravel, and interact with local miners.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">07:30 PM</span>
                    <p>Lakeside Camp setup followed by an open-fire BBQ dinner with fresh lake catch.</p>
                  </li>
                </ul>
              </div>

              {/* Day 2 Block */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg text-sm">Day 02</span>
                  Sunrise & Departure
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">06:30 AM</span>
                    <p>Morning lake fishing experience or relaxing nature walk along the banks.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">08:30 AM</span>
                    <p>Freshly brewed local coffee and traditional Sri Lankan breakfast.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">10:00 AM</span>
                    <p>Pack up and transition to your onward journey via VIP Drop-off.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Included / Excluded Grid */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              
              {/* Included */}
              <div className="space-y-4">
                <h3 className="font-bold text-emerald-800 mb-4">Included in price:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-emerald-600 shrink-0" size={20} /> VIP Car Transfers (Pickup & Drop)</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-emerald-600 shrink-0" size={20} /> Dedicated 4x4 Hilux for off-roading</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-emerald-600 shrink-0" size={20} /> All Meals (Full Board)</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-emerald-600 shrink-0" size={20} /> Gem Mining License & Fees</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-emerald-600 shrink-0" size={20} /> Professional Guide & Driver</li>
                </ul>
              </div>

              {/* Excluded */}
              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 mb-4">Not Included:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Personal Travel Insurance</li>
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Alcoholic Beverages</li>
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Tips and Gratuities</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Booking Form (lg:w-1/3) */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-24">
            
            {/* මෙතනින් තමයි ඔයා හදපු අලුත් WhatsApp Form එක ලෝඩ් වෙන්නේ */}
            <BookingFormCard />
            
          </div>
        </div>

      </div>
    </div>
  );
}