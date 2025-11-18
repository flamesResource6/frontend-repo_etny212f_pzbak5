import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Nebula Commerce',
    desc: 'Ecommerce platform with real-time 3D product previews and smooth checkout.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    palette: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Aurora Studio',
    desc: 'Motion-first portfolio with inline video editing and GPU transitions.',
    tags: ['Remix', 'WebGL', 'Framer'],
    palette: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Photon Mail',
    desc: 'Privacy-first mail client with glass surfaces and a command palette.',
    tags: ['React', 'Tailwind', 'Radix'],
    palette: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Pulse Analytics',
    desc: 'Realtime dashboards with streaming charts and multi-tenant RBAC.',
    tags: ['Vite', 'WebSockets', 'D3.js'],
    palette: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Lumen Docs',
    desc: 'Elegant docs engine with MDX, search, and live code playgrounds.',
    tags: ['MDX', 'Algolia', 'Zustand'],
    palette: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Voyager Travel',
    desc: 'Booking flow with crisp maps, filters, and calendar interactions.',
    tags: ['React', 'Leaflet', 'DateFns'],
    palette: 'from-slate-800 to-slate-900',
  },
]

function CardMedia() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="aspect-video w-full rounded-xl bg-gradient-to-b from-slate-800 to-slate-900">
        <svg
          viewBox="0 0 400 225"
          className="h-full w-full opacity-70"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <rect width="400" height="225" fill="url(#g)" />
          <g stroke="#93c5fd22" strokeWidth="1">
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1={i * 25} y1="0" x2={i * 25} y2="225" />
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}

export default function WorkGrid() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
          >
            Portfolio
          </motion.h3>
          <motion.a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900/80 transition"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Start a project
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden rounded-xl">
                <CardMedia />
              </div>

              <div className="px-2 pt-4 pb-3">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-base font-semibold text-white">{p.title}</h4>
                  <span className="text-xs text-slate-400">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-2 pb-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white transition"
                >
                  View case study
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
