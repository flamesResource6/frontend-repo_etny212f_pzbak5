import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Nebula Commerce',
    desc: 'A glowing ecommerce experience with real-time 3D product previews.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    color: 'from-fuchsia-500/30 to-indigo-500/30'
  },
  {
    title: 'Aurora Studio',
    desc: 'Motion-first portfolio with inline video editing and GPU transitions.',
    tags: ['Remix', 'WebGL', 'Framer'],
    color: 'from-cyan-400/30 to-emerald-400/30'
  },
  {
    title: 'Photon Mail',
    desc: 'Zero-trust email UI with glowing glass panels and command palette.',
    tags: ['React', 'Tailwind', 'Radix'],
    color: 'from-violet-500/30 to-fuchsia-500/30'
  }
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Selected work
        </motion.h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 p-5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(99,102,241,0.12),0_0_35px_rgba(99,102,241,0.18)]`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${p.color} blur-xl`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold">{p.title}</h4>
                  <span className="text-xs text-indigo-200/70">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-2 text-indigo-100/90">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-indigo-200 ring-1 ring-indigo-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
