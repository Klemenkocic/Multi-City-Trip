'use client';

import { useState } from 'react';

interface BookingFlowProps {
  onClose?: () => void;
}

export default function BookingFlow({ onClose }: BookingFlowProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cities: '',
    startDate: '',
    endDate: '',
    travelers: '1',
    includeFlights: true,
    includeHotels: true,
    includeTrains: true,
    includeActivities: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStep(2);
    setIsProcessing(false);
    
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'booking_flow_start', {
        form_id: 'cta-plan-trip',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  if (step === 2) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h3 className="text-3xl font-serif italic text-gray-dark mb-4">
            Thanks for your feedback.
          </h3>
          <p className="text-lg text-gray-medium mb-2">
            Your input helps us validate what travelers actually need.
          </p>
          <p className="text-primary-orange italic mb-8">
            We're building this. Your voice matters.
          </p>
          {onClose && (
            <button
              onClick={onClose}
              className="bg-primary-orange text-white px-6 py-3 rounded-lg font-serif hover:bg-opacity-90 transition-all"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full my-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-gray-dark mb-2">
              Tell us about your trip
            </h2>
            <p className="text-gray-medium">
              We're building this. Help us understand what you need for your multi-city trips.
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-medium hover:text-gray-dark text-2xl"
            >
              ×
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cities" className="block text-gray-dark font-serif mb-2">
              Cities (e.g., Madrid → Barcelona → Valencia) *
            </label>
            <input
              type="text"
              id="cities"
              name="cities"
              required
              value={formData.cities}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
              placeholder="Madrid → Barcelona → Valencia"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-gray-dark font-serif mb-2">
                Start date *
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-gray-dark font-serif mb-2">
                End date *
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
              />
            </div>
          </div>

          <div>
            <label htmlFor="travelers" className="block text-gray-dark font-serif mb-2">
              Number of travelers *
            </label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              required
              min="1"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange font-serif"
            />
          </div>

          <div>
            <label className="block text-gray-dark font-serif mb-4">
              What to include
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="includeFlights"
                  checked={formData.includeFlights}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary-orange focus:ring-primary-orange rounded"
                />
                <span className="text-gray-dark font-serif">Flights</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="includeHotels"
                  checked={formData.includeHotels}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary-orange focus:ring-primary-orange rounded"
                />
                <span className="text-gray-dark font-serif">Hotels</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="includeTrains"
                  checked={formData.includeTrains}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary-orange focus:ring-primary-orange rounded"
                />
                <span className="text-gray-dark font-serif">Trains & Buses</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="includeActivities"
                  checked={formData.includeActivities}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary-orange focus:ring-primary-orange rounded"
                />
                <span className="text-gray-dark font-serif">Activities</span>
              </label>
            </div>
          </div>

          {isProcessing ? (
            <div className="text-center py-4">
              <p className="text-primary-orange italic text-lg">
                Mapping out the vibes...
              </p>
              <p className="text-gray-medium mt-2">
                Crunching connections...
              </p>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-serif hover:bg-opacity-90 transition-all"
            >
              Plotting something good...
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

