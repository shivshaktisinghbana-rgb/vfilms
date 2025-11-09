import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative flex items-center justify-center">
        <div className="w-72 h-72 rounded-full border-8 border-accent/15 shadow-inner" />
        <div className="absolute text-6xl md:text-8xl font-serif leading-tight text-ink transform -translate-y-2">V <span className="text-6xl md:text-8xl">Films</span></div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-serif text-ink leading-tight">Varnan is where stories find <br /> their voice and form</h1>
        <div className="text-accent font-medium">Films · Brands · Art</div>
        <p className="text-sm text-gray-700 max-w-xl">
          Since 2009, we've been telling stories — stories of people, their journeys, and the places that shape them. Each project is treated with care and craft.
        </p>
        <div className="mt-4">
          <button className="bg-[#f05b4a] text-white px-4 py-2 rounded-full shadow">View Portfolio</button>
        </div>
      </div>
    </section>
  );
}
