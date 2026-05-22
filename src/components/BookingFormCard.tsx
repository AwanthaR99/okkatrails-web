'use client';

import { useState } from 'react';
import { submitBooking } from '@/app/actions/bookingAction';

export default function BookingFormCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
  });

  const basePrice = 350;
  const totalPrice = basePrice * parseInt(formData.guests || '0');

  async function handleAction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = new FormData(e.currentTarget);
    const result = await submitBooking(form);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    }
  }

  // --- Success UI (WhatsApp Redirect) ---
  if (isSuccess) {
    const waMessage = encodeURIComponent(
      `Hi OKKATRAILS,\n\nI just submitted a booking request via your website.\n\n*Name:* ${formData.name}\n*Date:* ${formData.date}\n*Guests:* ${formData.guests}\n*Package:* The Explorer's Essence\n\nPlease confirm availability.`
    );
    // මෙතන ඔයාගේ WhatsApp නම්බර් එක දාන්න (උදා: 94711210000)
    const waLink = `https://wa.me/94711210000?text=${waMessage}`;

    return (
      <div className="bg-white p-8 rounded-2xl shadow-2xl border border-stone-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-brand-forest mb-2">Request Received!</h3>
        <p className="text-stone-600 mb-6">
          We've processed your request. For the fastest response to confirm your expedition, send us a quick WhatsApp message.
        </p>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
        >
          Chat on WhatsApp Now
        </a>
      </div>
    );
  }

  // --- Normal Booking Form UI ---
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-stone-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-brand-forest">Book This Expedition</h3>
        <p className="text-stone-500 text-sm mt-1">Starting from $350 per person</p>
      </div>

      <form onSubmit={handleAction} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Check-in Date</label>
          <input 
            type="date" name="date" required
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-olive focus:border-brand-olive outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Number of Guests</label>
          <select 
            name="guests" required
            onChange={(e) => setFormData({...formData, guests: e.target.value})}
            value={formData.guests}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-olive outline-none"
          >
            <option value="1">1 Explorer</option>
            <option value="2">2 Explorers</option>
            <option value="3">3 Explorers</option>
            <option value="4">4 Explorers</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
          <input 
            type="text" name="name" required placeholder="John Doe"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-olive outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
          <input 
            type="email" name="email" required placeholder="john@example.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-olive outline-none"
          />
        </div>

        <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
          <span className="text-stone-600 font-medium">Total Estimate</span>
          <span className="text-2xl font-bold text-brand-forest">${totalPrice}</span>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-olive hover:bg-brand-forest text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
        >
          {isSubmitting ? 'Processing...' : 'Request to Book'}
        </button>
      </form>
    </div>
  );
}