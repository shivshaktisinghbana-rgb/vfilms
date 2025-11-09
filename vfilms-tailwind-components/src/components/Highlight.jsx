import React from 'react';

export default function Highlight() {
  return (
    <section id="works" className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-2xl font-serif mb-4">A montage of familiar faces and names</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">We shape tales that inspire and connect. Explore our reel and highlights.</p>
      <div className="mt-8 flex justify-center">
        <div className="w-full md:w-2/3 bg-white/90 p-6 rounded shadow">
          <div className="aspect-video rounded overflow-hidden card-shadow">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Showreel Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        </div>
      </div>
    </section>
  );
}
