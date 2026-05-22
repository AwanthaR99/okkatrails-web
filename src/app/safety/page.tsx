import { ShieldCheck, AlertCircle, FileText, Car, HeartPulse, Compass, Tent } from 'lucide-react';

export default function SafetyPolicyPage() {
  return (
    <div className="pt-24 pb-24 bg-stone-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="text-sm font-bold tracking-widest text-[#8A9A40] uppercase bg-[#8A9A40]/10 px-4 py-2 rounded-full inline-block">
            Our Commitment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Uncompromising Safety <br/> in the Wild.</h1>
          <p className="text-lg text-stone-400">
            Going off-the-grid shouldn't mean compromising your well-being. At Okka Trails, we combine rugged adventure with world-class safety standards, ensuring you experience Sri Lanka's wildest corners with absolute peace of mind.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Policies Grid (Enhanced Details) */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Point 1 */}
            <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-[#8A9A40]/50 transition-colors">
              <HeartPulse className="text-[#8A9A40] mb-4" size={28} />
              <h4 className="text-lg font-bold text-white mb-2">Wilderness First-Aid</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Our lead guides are certified in wilderness first-aid and CPR. We carry comprehensive medical kits tailored for deep-jungle expeditions.</p>
            </div>

            {/* Point 2 */}
            <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-[#8A9A40]/50 transition-colors">
              <Car className="text-[#8A9A40] mb-4" size={28} />
              <h4 className="text-lg font-bold text-white mb-2">Premium 4x4 Fleet</h4>
              <p className="text-stone-400 text-sm leading-relaxed">We use specially modified, highly maintained luxury 4x4 vehicles equipped with heavy-duty recovery gear to navigate any terrain safely.</p>
            </div>

            {/* Point 3 */}
            <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-[#8A9A40]/50 transition-colors">
              <AlertCircle className="text-[#8A9A40] mb-4" size={28} />
              <h4 className="text-lg font-bold text-white mb-2">Satellite & Evac Protocols</h4>
              <p className="text-stone-400 text-sm leading-relaxed">No signal? No problem. We carry satellite communication devices and have pre-mapped emergency evacuation routes with local authorities.</p>
            </div>

            {/* Point 4 */}
            <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-[#8A9A40]/50 transition-colors">
              <Tent className="text-[#8A9A40] mb-4" size={28} />
              <h4 className="text-lg font-bold text-white mb-2">Sanitized Premium Gear</h4>
              <p className="text-stone-400 text-sm leading-relaxed">All camping equipment, sleeping bags, and dining setups are strictly sanitized. We provide safe, purified drinking water throughout the journey.</p>
            </div>

            {/* Point 5 */}
            <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-[#8A9A40]/50 transition-colors">
              <Compass className="text-[#8A9A40] mb-4" size={28} />
              <h4 className="text-lg font-bold text-white mb-2">Wildlife Safety</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Our trackers have decades of experience reading elephant behavior and jungle signs. We observe wildlife ethically and safely from designated distances.</p>
            </div>

            {/* Point 6 */}
            <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 hover:border-[#8A9A40]/50 transition-colors">
              <FileText className="text-[#8A9A40] mb-4" size={28} />
              <h4 className="text-lg font-bold text-white mb-2">Fair Cancellations</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Plans change. We offer flexible rescheduling and 100% refunds up to 14 days before your expedition. No hidden fees, no hassle.</p>
            </div>

          </div>
          
          {/* Right Side: Premium Safety Image */}
          <div className="lg:w-2/5 w-full h-[600px] rounded-[2rem] relative overflow-hidden border border-stone-700 shadow-2xl group sticky top-24">
            <div className="absolute inset-0 bg-[url('/safety.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
            
            {/* Image Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-[#8A9A40]" size={32} />
                <h3 className="text-2xl font-bold text-white">Certified Secure</h3>
              </div>
              <p className="text-stone-300 text-sm">Every trail, camp, and vehicle is vetted daily by our local Monaragala tracking experts.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}