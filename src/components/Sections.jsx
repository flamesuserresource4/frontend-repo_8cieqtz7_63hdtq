import React from 'react';
import { CloudRainWind, ThermometerSun, Waves, GaugeCircle, ShieldCheck, Trees, GraduationCap, Hammer, Siren, Activity } from 'lucide-react';

export function PenyebabSection() {
  const items = [
    { icon: <GaugeCircle className="h-6 w-6 text-sky-300" />, title: 'Perbedaan Tekanan Udara', desc: 'Kontras tekanan udara yang signifikan mendorong aliran angin kuat yang memutar dan membentuk sistem badai.' },
    { icon: <ThermometerSun className="h-6 w-6 text-orange-300" />, title: 'Suhu Permukaan Laut Tinggi', desc: 'Air laut hangat (≥26.5°C) meningkatkan penguapan dan energi laten, memperkuat badai tropis.' },
    { icon: <Waves className="h-6 w-6 text-cyan-300" />, title: 'Penguapan & Kelembapan', desc: 'Uap air yang melimpah menjadi bahan bakar awan konvektif, menghasilkan hujan lebat dan angin kencang.' },
  ];

  return (
    <section id="penyebab" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Penyebab</h2>
        <p className="mt-2 text-slate-300 max-w-3xl">Faktor-faktor utama yang memicu terbentuknya badai/topan. Disajikan singkat agar mudah dipahami.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/20">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="text-lg font-medium text-white">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JenisSection() {
  const types = [
    { name: 'Depresi Tropis', speed: '≤ 62 km/jam', damage: 'Ringan', img: 'https://images.unsplash.com/photo-1500674425229-f692875b0ab7?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Badai Tropis', speed: '63–117 km/jam', damage: 'Sedang', img: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1600&auto=format&fit=crop' },
    { name: 'Siklon Tropis (Topan/Hurricane)', speed: '≥ 118 km/jam', damage: 'Berat–Ekstrem', img: 'https://images.unsplash.com/photo-1446824505046-e43605ffb17f?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <section id="jenis" className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-white">Jenis Badai & Topan</h2>
            <p className="mt-2 text-slate-300 max-w-3xl">Tingkat kecepatan, potensi kerusakan, dan visual agar mudah dibedakan. Geser untuk melihat lebih banyak.</p>
          </div>
        </div>
        <div className="mt-8 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {types.map((t) => (
            <article key={t.name} className="snap-start min-w-[280px] sm:min-w-[340px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div className="h-40 w-full overflow-hidden">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <div className="mt-2 text-sm text-slate-300">
                  <p>Kecepatan Angin: <span className="text-sky-300 font-medium">{t.speed}</span></p>
                  <p>Tingkat Kerusakan: <span className="text-rose-300 font-medium">{t.damage}</span></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PenanggulanganSection() {
  const steps = [
    { phase: 'Sebelum', points: [
      'Siapkan tas siaga (dokumen penting, obat, senter, makanan).',
      'Periksa saluran air & perkuat atap/jendela.',
      'Pantau informasi resmi (BMKG/BNPB).'
    ] },
    { phase: 'Saat', points: [
      'Tetap di dalam bangunan yang kokoh, jauhi jendela.',
      'Matikan listrik jika terjadi banjir atau korsleting.',
      'Evakuasi ke shelter bila diminta petugas.'
    ] },
    { phase: 'Sesudah', points: [
      'Hati-hati dengan kabel listrik putus & genangan.',
      'Bersihkan lingkungan, laporkan kerusakan.',
      'Periksa kualitas air sebelum digunakan.'
    ] },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <section id="penanggulangan" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Penanggulangan</h2>
        <p className="mt-2 text-slate-300 max-w-3xl">Langkah-langkah yang mudah diikuti sebelum, saat, dan sesudah bencana.</p>

        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            {steps.map((s, i) => (
              <button
                key={s.phase}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-md border transition ${active === i ? 'bg-sky-500/90 border-sky-400 text-white' : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'}`}
              >
                {s.phase}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="space-y-3 list-disc list-inside text-slate-200">
              {steps[active].points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MitigasiSection() {
  const items = [
    { icon: <ShieldCheck className="h-6 w-6 text-emerald-300" />, title: 'Shelter & Infrastruktur', desc: 'Membangun shelter evakuasi, memperkuat bangunan, dan sistem drainase.' },
    { icon: <Trees className="h-6 w-6 text-green-300" />, title: 'Penghijauan Pesisir', desc: 'Menanam mangrove/vegetasi pesisir untuk memecah gelombang dan angin.' },
    { icon: <GraduationCap className="h-6 w-6 text-sky-300" />, title: 'Edukasi & Simulasi', desc: 'Pelatihan masyarakat, simulasi evakuasi, dan literasi kebencanaan.' },
    { icon: <Hammer className="h-6 w-6 text-yellow-300" />, title: 'Regulasi & Zonasi', desc: 'Penataan ruang yang mempertimbangkan risiko bencana.' },
  ];

  return (
    <section id="mitigasi" className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Mitigasi</h2>
            <p className="mt-2 text-slate-300 max-w-3xl">Upaya struktural dan non-struktural dilengkapi ilustrasi sederhana.</p>
          </div>
          <Siren className="hidden sm:block h-8 w-8 text-sky-300" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 transition shadow-lg shadow-slate-900/20">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="text-lg font-medium text-white">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DampakSection() {
  const impacts = [
    { title: 'Sosial', desc: 'Gangguan aktivitas, evakuasi, dan risiko keselamatan penduduk.' },
    { title: 'Ekonomi', desc: 'Kerugian sektor perikanan, pariwisata, logistik, serta infrastruktur.' },
    { title: 'Fisik', desc: 'Kerusakan bangunan, jaringan listrik, dan sarana transportasi.' },
    { title: 'Lingkungan', desc: 'Abrasi pantai, banjir rob, dan kerusakan ekosistem pesisir.' },
  ];

  return (
    <section id="dampak" className="relative bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white">Dampak</h2>
          <Activity className="h-7 w-7 text-sky-300" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {impacts.map((im) => (
            <div key={im.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-medium text-white">{im.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{im.desc}</p>
              <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-sky-400/80" style={{ width: `${25 + Math.random()*50}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-slate-300 text-sm">
          <p>Wilayah rawan badai di Indonesia dapat dipantau melalui peta interaktif berikut:</p>
          <div className="mt-4 h-[420px] w-full overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Peta Interaktif BMKG"
              src="https://www.google.com/maps/d/embed?mid=1zWb2x0k2G-bmkg-demo&ehbc=2E312F"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-4">Sumber resmi: <a className="text-sky-300 hover:underline" target="_blank" rel="noreferrer" href="https://www.bmkg.go.id">BMKG</a> • <a className="text-sky-300 hover:underline" target="_blank" rel="noreferrer" href="https://www.bnpb.go.id">BNPB</a></p>
        </div>
      </div>
    </section>
  );
}
