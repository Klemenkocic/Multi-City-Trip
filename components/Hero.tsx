'use client';

import { useState } from 'react';

interface HeroProps {
  onPlanTrip: () => void;
  onEarlyAccess: () => void;
}

export default function Hero({ onPlanTrip, onEarlyAccess }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-primary-peach to-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo - Crossroads with arrows */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary-orange flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Center circle */}
              <circle cx="16" cy="16" r="3" fill="white" />
              {/* Arrows pointing in 4 directions */}
              <path
                d="M16 4L18 12L16 10L14 12L16 4Z"
                fill="white"
              />
              <path
                d="M28 16L20 18L22 16L20 14L28 16Z"
                fill="white"
              />
              <path
                d="M16 28L18 20L16 22L14 20L16 28Z"
                fill="white"
              />
              <path
                d="M4 16L12 18L10 16L12 14L4 16Z"
                fill="white"
              />
              {/* Connecting lines */}
              <line x1="16" y1="7" x2="16" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="16" x2="25" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16" y1="19" x2="16" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="7" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-primary-orange text-lg mb-4 font-serif italic">
          For people taking the long way on purpose
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-serif italic text-gray-dark mb-6 leading-tight">
          Book your entire multi-city trip in one checkout
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-medium mb-6 max-w-3xl mx-auto leading-relaxed">
          Madrid → Barcelona → Valencia. London → Paris → Amsterdam. All in 15 minutes, in one checkout.
        </p>

        {/* Validation banner */}
        <div className="bg-primary-blue-light border-2 border-primary-blue rounded-lg px-6 py-4 mb-12 max-w-2xl mx-auto">
          <p className="text-gray-dark font-serif text-lg mb-2">
            <strong>We're building this.</strong> Do you actually want it?
          </p>
          <p className="text-gray-medium text-sm">
            We're validating demand for one-checkout multi-city trips. Tell us what you think—your feedback shapes what we build.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            id="cta-plan-trip"
            onClick={onPlanTrip}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-serif hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Tell us what you need
          </button>
          <button
            onClick={onEarlyAccess}
            className="bg-white text-primary-orange border-2 border-primary-orange px-8 py-4 rounded-lg text-lg font-serif hover:bg-primary-peach transition-all"
          >
            Get early access
          </button>
        </div>

        {/* Route Visualization */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-lightest">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {/* Flight In */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-blue-light rounded-full flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#0071EB"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-medium">Flight</span>
              </div>

              <div className="text-2xl text-gray-light">→</div>

              {/* Hotel */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-purple-light rounded-full flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 20v-6H4v6c0 1.1.9 2 2 2h4v-2zm0-10H4v4h6v-4zm10 10v-6h-6v6c0 1.1.9 2 2 2h4v-2zm0-10h-6v4h6v-4z" fill="#931FFF"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-medium">Hotel</span>
              </div>

              <div className="text-2xl text-gray-light">→</div>

              {/* Train */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-green-light rounded-full flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-4-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM6 11V6h12v5H6z" fill="#00A316"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-medium">Train</span>
              </div>

              <div className="text-2xl text-gray-light">→</div>

              {/* Hotel */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-purple-light rounded-full flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 20v-6H4v6c0 1.1.9 2 2 2h4v-2zm0-10H4v4h6v-4zm10 10v-6h-6v6c0 1.1.9 2 2 2h4v-2zm0-10h-6v4h6v-4z" fill="#931FFF"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-medium">Hotel</span>
              </div>

              <div className="text-2xl text-gray-light">→</div>

              {/* Activities */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-orange/20 rounded-full flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF5C29"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-medium">Activities</span>
              </div>

              <div className="text-2xl text-gray-light">→</div>

              {/* Flight Out */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-blue-light rounded-full flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#0071EB"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-medium">Flight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

