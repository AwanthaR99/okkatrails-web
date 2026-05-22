import { Target, Leaf, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* 1. Hero Section (Image Background) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-stone-900 flex items-center justify-center text-center px-6">
        {/* ඔයාගේ ලස්සන කැලේක පින්තූරයක් මෙතනට දාන්න */}
        <div className="absolute inset-0 bg-[url('/wild-divine.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-[#8A9A40] uppercase mb-4 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Redefining Adventure in <br className="hidden md:block"/> Sri Lanka's Wildest Corners.
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
            Born out of a deep love for the unexplored, Okka Trails connects you with the raw, unfiltered soul of Monaragala.
          </p>
        </div>
      </section>

      {/* 2. The Story Section (Split Layout) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Our Roots run deep in the Uva Province.</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Founded by a passionate team of adventurers and locals right here in Monaragala, we recognized that the true beauty of Sri Lanka isn't found on crowded tourist paths. It's hidden in the dense, impenetrable jungles and the majestic historical ruins that only locals know.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We believe that true luxury lies in the exclusivity of the experience. We pair the rugged, unyielding nature of the wild with uncompromised comfort and safety, giving you an expedition unlike any other.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-[4/5] w-full rounded-2xl bg-stone-200 overflow-hidden relative shadow-lg">
               {/* මේකට ලස්සන Team එකේ හරි Local Guide කෙනෙක්ගෙ හරි පින්තූරයක් දාන්න */}
              <div className="absolute inset-0 bg-[url('/wild-divine.jpeg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-24 bg-white px-6 border-t border-stone-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Our Philosophy</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#4B5320]/10 text-[#4B5320] rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900">100% Eco-Conscious</h3>
            <p className="text-stone-600 leading-relaxed">We leave no footprint. Our tours are designed to protect and preserve the natural habitats of the wildlife we observe.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#4B5320]/10 text-[#4B5320] rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900">Exclusive Access</h3>
            <p className="text-stone-600 leading-relaxed">We take you where others can't. Enjoy private trails, hidden gem mines, and secret campsites far from the crowds.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#4B5320]/10 text-[#4B5320] rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-900">Local Empowerment</h3>
            <p className="text-stone-600 leading-relaxed">By partnering directly with village elders and local guides, every expedition directly supports the communities of Monaragala.</p>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 bg-[#4B5320] text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F4F1EA] mb-8">Ready to discover the unseen?</h2>
        <Link href="/" className="inline-block bg-[#F4F1EA] text-[#4B5320] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-xl">
          Explore Our Packages
        </Link>
      </section>

    </div>
  );
}