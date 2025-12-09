export default function ExampleTrip() {
  const tripSteps = [
    {
      type: 'flight',
      city: 'London',
      description: 'Flight in',
      time: '10:00 AM',
      icon: '✈️',
      color: 'bg-primary-blue-light',
    },
    {
      type: 'hotel',
      city: 'London',
      description: '3 nights',
      time: 'Check-in 2:00 PM',
      icon: '🏨',
      color: 'bg-primary-purple-light',
    },
    {
      type: 'train',
      city: 'London → Paris',
      description: 'Eurostar',
      time: '2h 20m',
      icon: '🚂',
      color: 'bg-primary-green-light',
      note: 'This connection is looking crisp.',
    },
    {
      type: 'hotel',
      city: 'Paris',
      description: '2 nights',
      time: 'Check-in 3:00 PM',
      icon: '🏨',
      color: 'bg-primary-purple-light',
    },
    {
      type: 'train',
      city: 'Paris → Amsterdam',
      description: 'Thalys',
      time: '3h 20m',
      icon: '🚂',
      color: 'bg-primary-green-light',
      note: 'Plenty of breathing room between connections.',
    },
    {
      type: 'hotel',
      city: 'Amsterdam',
      description: '2 nights',
      time: 'Check-in 2:00 PM',
      icon: '🏨',
      color: 'bg-primary-purple-light',
    },
    {
      type: 'flight',
      city: 'Amsterdam',
      description: 'Flight out',
      time: '11:00 AM',
      icon: '✈️',
      color: 'bg-primary-blue-light',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-peach">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-dark mb-4 text-center">
          Example trip
        </h2>
        <p className="text-xl text-gray-medium mb-12 text-center">
          London → Paris → Amsterdam
        </p>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-lightest">
          <div className="relative">
            {tripSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 relative pb-8 last:pb-0">
                <div className="flex flex-col items-center relative">
                  <div className={`flex-shrink-0 w-14 h-14 ${step.color} rounded-full flex items-center justify-center text-2xl relative z-10`}>
                    {step.icon}
                  </div>
                  {index < tripSteps.length - 1 && (
                    <div className="absolute left-7 top-14 w-0.5 h-full bg-gray-lighter"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-serif text-gray-dark mb-1">
                        {step.city}
                      </h3>
                      <p className="text-gray-medium">
                        {step.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-medium font-serif">
                        {step.time}
                      </p>
                    </div>
                  </div>
                  {step.note && (
                    <p className="text-primary-orange italic mt-2 text-sm">
                      {step.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-lightest text-center">
            <p className="text-lg text-gray-medium italic mb-2">
              All booked in one checkout. One payment. One confirmation.
            </p>
            <p className="text-primary-orange font-serif text-xl">
              50+ hours of planning → 15 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

