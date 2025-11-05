import React, { useState } from 'react';
import { Menu, X, Wind } from 'lucide-react';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'penyebab', label: 'Penyebab' },
  { id: 'jenis', label: 'Jenis' },
  { id: 'penanggulangan', label: 'Penanggulangan' },
  { id: 'mitigasi', label: 'Mitigasi' },
  { id: 'dampak', label: 'Dampak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            className="flex items-center gap-2 text-white/90 hover:text-white transition"
            onClick={() => scrollTo('beranda')}
            aria-label="Go to Beranda"
          >
            <Wind className="h-6 w-6 text-sky-300" />
            <span className="font-semibold tracking-wide">Badai & Topan</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-slate-200/80 hover:text-white transition-colors relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-sky-400 hover:after:w-6 after:transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-slate-100 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
