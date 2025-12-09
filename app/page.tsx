'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import WhyThisSucks from '@/components/WhyThisSucks';
import HowItWorks from '@/components/HowItWorks';
import WhoItsFor from '@/components/WhoItsFor';
import ExampleTrip from '@/components/ExampleTrip';
import LeadCapture from '@/components/LeadCapture';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import FounderStory from '@/components/FounderStory';
import BookingFlow from '@/components/BookingFlow';

export default function Home() {
  const [showBookingFlow, setShowBookingFlow] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero
        onPlanTrip={() => setShowBookingFlow(true)}
        onEarlyAccess={() => setShowLeadCapture(true)}
      />
      <WhyThisSucks />
      <HowItWorks />
      <WhoItsFor />
      <ExampleTrip />
      <LeadCaptureSection />
      <FounderStory />
      {showBookingFlow && (
        <BookingFlow onClose={() => setShowBookingFlow(false)} />
      )}
      {showLeadCapture && (
        <LeadCapture onClose={() => setShowLeadCapture(false)} />
      )}
    </main>
  );
}

