import React from 'react';

function Card({title, text}) {
  return (
    <div className="bg-white/90 p-6 rounded shadow flex flex-col gap-4">
      <div className="h-14 w-14 rounded bg-accent/10 flex items-center justify-center text-accent font-semibold">V</div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
      <div className="mt-auto">
        <button className="text-accent text-sm font-medium hover:underline">Explore</button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Film Production" text="Documentaries, Corporate Videos, 2D & 3D Animation" />
      <Card title="Branding" text="Brand Strategy, Content, Social Media Management" />
      <Card title="Art Curation" text="Exhibitions, Curated Visuals, Creative Direction" />
    </section>
  );
}
