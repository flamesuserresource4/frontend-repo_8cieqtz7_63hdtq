import React from 'react';
import Spline from '@splinetool/react-spline';
import { Quote } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[90vh] pt-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow">
              Bencana Alam: Badai dan Topan
            </h1>
            <p className="mt-4 text-lg text-slate-200/90">
              Memahami badai dan topan membantu kita mengambil langkah yang tepat untuk melindungi diri, keluarga, dan lingkungan. Portal ini menyajikan informasi ringkas, visual kuat, dan interaktivitas ringan untuk mendukung kesiapsiagaan.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sky-200">
              <Quote className="h-5 w-5" />
              <p className="italic">"Kesiapsiagaan hari ini adalah keselamatan esok hari."</p>
            </div>
            <div className="mt-10 flex gap-4">
              <a href="#penyebab" className="px-5 py-3 rounded-md bg-sky-500/90 hover:bg-sky-400 text-white font-medium shadow-lg shadow-sky-900/30 transition">
                Pelajari Penyebab
              </a>
              <a href="#jenis" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur border border-white/20 transition">
                Lihat Jenis Badai
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80" />
    </section>
  );
}
