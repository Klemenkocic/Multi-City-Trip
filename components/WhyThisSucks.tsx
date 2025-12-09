export default function WhyThisSucks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-dark mb-12 text-center">
          Why this sucks today
        </h2>
        
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-peach rounded-full flex items-center justify-center">
              <span className="text-2xl">😫</span>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-gray-dark mb-2">
                50+ hours across 10+ platforms
              </h3>
              <p className="text-lg text-gray-medium leading-relaxed">
                Multi-city travelers spend 50+ hours manually coordinating bookings across 10+ platforms. Only 2% complete their trip booking—the rest simplify or abandon. Your browser tabs look like a travel agency exploded.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-peach rounded-full flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-gray-dark mb-2">
                Misaligned timings
              </h3>
              <p className="text-lg text-gray-medium leading-relaxed">
                Your flight lands at 2pm, but your train leaves at 1:30pm. Your hotel check-in is at 3pm, but you arrive at 10am. You're constantly doing mental math to make sure everything connects.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-peach rounded-full flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-gray-dark mb-2">
                Everything scattered across platforms
              </h3>
              <p className="text-lg text-gray-medium leading-relaxed">
                Booking across 5–10 different platforms means 5–10 different confirmation emails, 5–10 different cancellation policies, and 5–10 different ways things can go wrong. No single place to manage your entire trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

