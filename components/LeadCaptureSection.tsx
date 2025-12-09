'use client';

import { useState } from 'react';

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    email: '',
    homeCountry: '',
    nextDestination: '',
    travelMonth: '',
    budget: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_id: 'form-early-access-section',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-primary-peach">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">✈️</div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-dark mb-4">
            Thanks for your input.
          </h2>
          <p className="text-lg text-gray-medium mb-6">
            We'll keep you updated as we build. Your feedback helps us validate what travelers actually need.
          </p>
          <p className="text-primary-orange italic">
            We're listening. Let's build something good.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-primary-peach">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-gray-dark mb-4 text-center">
          Help us build this
        </h2>
        <p className="text-lg text-gray-medium mb-2 text-center">
          We're validating demand for one-checkout multi-city trips. Your input helps us decide what to build first.
        </p>
        <p className="text-sm text-gray-medium mb-8 text-center italic">
          Planning to launch in Europe 2026, but we want to hear from travelers everywhere.
        </p>

        <form id="form-early-access-section" onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
          <div>
            <label htmlFor="email-section" className="block text-gray-dark font-serif mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email-section"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="homeCountry-section" className="block text-gray-dark font-serif mb-2">
              Home country
            </label>
            <input
              type="text"
              id="homeCountry-section"
              name="homeCountry"
              value={formData.homeCountry}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
              placeholder="e.g., Germany, USA, UK"
            />
          </div>

          <div>
            <label htmlFor="nextDestination-section" className="block text-gray-dark font-serif mb-2">
              Next destination(s)
            </label>
            <input
              type="text"
              id="nextDestination-section"
              name="nextDestination"
              value={formData.nextDestination}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
              placeholder="e.g., Madrid → Barcelona → Valencia"
            />
          </div>

          <div>
            <label htmlFor="travelMonth-section" className="block text-gray-dark font-serif mb-2">
              Month of travel
            </label>
            <select
              id="travelMonth-section"
              name="travelMonth"
              value={formData.travelMonth}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
            >
              <option value="">Select a month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget-section" className="block text-gray-dark font-serif mb-2">
              Rough budget
            </label>
            <select
              id="budget-section"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
            >
              <option value="">Select a range</option>
              <option value="under-1000">Under €1,000</option>
              <option value="1000-2000">€1,000 - €2,000</option>
              <option value="2000-3000">€2,000 - €3,000</option>
              <option value="3000-5000">€3,000 - €5,000</option>
              <option value="over-5000">Over €5,000</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-serif hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending your feedback...' : "Share your thoughts"}
          </button>
        </form>
      </div>
    </section>
  );
}

