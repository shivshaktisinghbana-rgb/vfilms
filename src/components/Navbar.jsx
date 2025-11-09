import React from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-serif text-ink">V<span className="text-accent">V</span>Films</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#works" className="hover:underline">Their Stories</a>
          <a href="#contact" className="hover:underline">Let's Talk</a>
        </nav>
      </div>
      <div>
        <button className="bg-accent text-white px-4 py-2 rounded-full text-sm shadow-sm">Let's Talk</button>
      </div>
    </header>
  );
}
