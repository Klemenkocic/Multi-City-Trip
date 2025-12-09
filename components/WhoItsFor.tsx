export default function WhoItsFor() {
  const personas = [
    {
      emoji: '👫',
      title: 'Couples',
      description: 'Planning a romantic multi-city getaway. Multiple cities, one checkout.',
    },
    {
      emoji: '👥',
      title: 'Friends trips',
      description: "Coordinating a group trip with multiple stops. Everyone's preferences, one booking.",
    },
    {
      emoji: '🧳',
      title: 'Solo travelers',
      description: 'Taking the long way through 3–6 cities. Your entire trip, one checkout.',
    },
    {
      emoji: '🌍',
      title: 'City hoppers',
      description: 'People who want to experience multiple destinations in one trip, not just one resort.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-dark mb-12 text-center">
          Who it's for
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div key={index} className="bg-primary-peach rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">{persona.emoji}</div>
              <h3 className="text-xl font-serif text-gray-dark mb-2">
                {persona.title}
              </h3>
              <p className="text-gray-medium">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

