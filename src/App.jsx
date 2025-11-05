import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollTop from './components/ScrollTop';
import { PenyebabSection, JenisSection, PenanggulanganSection, MitigasiSection, DampakSection } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <PenyebabSection />
        <JenisSection />
        <PenanggulanganSection />
        <MitigasiSection />
        <DampakSection />
      </main>
      <footer className="bg-slate-950 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Portal Edukasi Badai & Topan • Dibuat untuk pembelajaran publik.
          </p>
          <p>
            Sumber data: BMKG, BNPB, dan literatur kebencanaan.
          </p>
        </div>
      </footer>
      <ScrollTop />
    </div>
  );
}
