import { CheckCircle2, XCircle, Clock, MapPin, Tent, Sun } from 'lucide-react';
import BookingFormCard from '@/components/BookingFormCard';

export default function WildDivinePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 bg-stone-900">
          {/* public/images/wild-divine.jpeg කියලා පින්තූරයක් දාන්න */}
          <div className="w-full h-full bg-[url('/wild-divine.jpeg')] bg-cover bg-center opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex gap-2 mb-4">
            <span className="bg-[#4B5320] text-[#F4F1EA] text-xs font-bold px-3 py-1 rounded-full">3 Days / 2 Nights</span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">Nature & Culture</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">The Wild & Divine</h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Rejuvenate your soul with sunrise yoga on ancient rock plateaus and a guided heritage tour of Maligawila. Spend an unforgettable night guarding a traditional Chena farm inside an authentic watchtower.
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
              <Clock className="text-[#4B5320]" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Duration</span>
              <span className="font-semibold text-stone-900">3 Days / 2 Nights</span>
            </div>
            <div className="flex flex-col gap-1">
              <MapPin className="text-[#4B5320]" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Location</span>
              <span className="font-semibold text-stone-900">Maligawila & Forests</span>
            </div>
            <div className="flex flex-col gap-1">
              <Sun className="text-[#4B5320]" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Activity</span>
              <span className="font-semibold text-stone-900">Heritage & Yoga</span>
            </div>
            <div className="flex flex-col gap-1">
              <Tent className="text-[#4B5320]" size={24} />
              <span className="text-sm text-stone-500 font-medium mt-2">Stay</span>
              <span className="font-semibold text-stone-900">Eco Lodge & Watchtower</span>
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Your Expedition Itinerary</h2>
            
            <div className="space-y-6">
              
              {/* Day 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-[#4B5320] mb-4 flex items-center gap-3">
                  <span className="bg-[#4B5320]/10 text-[#4B5320] px-3 py-1 rounded-lg text-sm">Day 01</span>
                  Ancient Echoes & Sunset Serenity
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">10:00 AM</span>
                    <p>VIP Transfer to Monaragala and check-in to a luxury eco-lodge tucked in the jungle.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">03:00 PM</span>
                    <p>Guided exploration of the majestic Maligawila Buddha Statue and ancient ruins.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">06:00 PM</span>
                    <p>Sunset Yoga and meditation session on a natural rock plateau overlooking the valley.</p>
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-[#4B5320] mb-4 flex items-center gap-3">
                  <span className="bg-[#4B5320]/10 text-[#4B5320] px-3 py-1 rounded-lg text-sm">Day 02</span>
                  The Chena Farmer's Life
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">08:30 AM</span>
                    <p>Traditional village trek and authentic local breakfast.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">02:00 PM</span>
                    <p>Transition into a real Chena farming village. Learn ancient cultivation techniques.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">07:00 PM</span>
                    <p>Climb into the 'Pela' (Watchtower). Guard the crops from wild elephants while enjoying a wood-fire village dinner under the stars.</p>
                  </li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-[#4B5320] mb-4 flex items-center gap-3">
                  <span className="bg-[#4B5320]/10 text-[#4B5320] px-3 py-1 rounded-lg text-sm">Day 03</span>
                  Canopy Sunrise & Departure
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">06:00 AM</span>
                    <p>Wake up to a breathtaking sunrise from the watchtower and fresh herbal tea.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold text-stone-900 min-w-[80px]">10:30 AM</span>
                    <p>Freshen up and transfer back via VIP drop-off to your next destination.</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Included / Excluded Grid */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              
              <div className="space-y-4">
                <h3 className="font-bold text-[#4B5320] mb-4">Included in price:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-[#4B5320] shrink-0" size={20} /> VIP Car Transfers (Pickup & Drop)</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-[#4B5320] shrink-0" size={20} /> Luxury Eco-Lodge (Night 1) & Watchtower (Night 2)</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-[#4B5320] shrink-0" size={20} /> All Authentic Meals (Full Board)</li>
                  <li className="flex gap-3 text-stone-600"><CheckCircle2 className="text-[#4B5320] shrink-0" size={20} /> Yoga Instructor & Heritage Guide</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 mb-4">Not Included:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Personal Yoga Mats (provided, but can bring own)</li>
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Alcoholic Beverages</li>
                  <li className="flex gap-3 text-stone-500"><XCircle className="text-stone-300 shrink-0" size={20} /> Gratuities</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Booking Form */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-24">
            {/* අර කලින් හදපු පට්ට ෆෝම් එක මෙතනට ලෝඩ් වෙනවා */}
            <BookingFormCard />
          </div>
        </div>

      </div>
    </div>
  );
}