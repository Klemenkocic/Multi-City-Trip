export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose cities and dates',
      description: 'Tell us where you want to go and when. Madrid → Barcelona → Valencia? Tokyo → Kyoto → Osaka? Your call.',
    },
    {
      number: '2',
      title: 'Select what to include',
      description: 'Pick flights, hotels, transport (trains, buses, rental cars), and activities—or all of the above. We show you options, you decide what fits.',
    },
    {
      number: '3',
      title: 'ViaVia coordinates everything',
      description: 'We handle the timing math. Making sure your train leaves after your flight lands, and your hotel is ready when you arrive. Everything aligned, everything connected.',
    },
    {
      number: '4',
      title: 'One checkout for your entire trip',
      description: 'Flights, hotels, transport, activities—all in one checkout. One payment. One confirmation. One place to manage it all. 50+ hours of planning → 15 minutes.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-primary-peach">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-dark mb-16 text-center">
          How ViaVia works
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif text-white font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-gray-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

