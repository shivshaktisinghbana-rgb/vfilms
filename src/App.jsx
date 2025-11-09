import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Highlight from './components/Highlight';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Highlight />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-gray-600">© V Films</footer>
    </div>
  );
}
