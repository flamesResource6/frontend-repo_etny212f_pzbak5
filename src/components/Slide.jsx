import { motion } from 'framer-motion'

export default function Slide({ id, eyebrow, title, subtitle, bullets = [], align = 'left', glow = 'indigo' }) {
  const alignClass = align === 'right' ? 'ml-auto text-right items-end' : 'mr-auto text-left items-start'
  const glowColor = {
    indigo: 'from-indigo-500/20 to-transparent',
    fuchsia: 'from-fuchsia-500/20 to-transparent',
    cyan: 'from-cyan-400/20 to-transparent',
    violet: 'from-violet-500/20 to-transparent',
    emerald: 'from-emerald-400/20 to-transparent',
  }[glow]

  return (
    <section id={id} className="relative min-h-screen flex items-center bg-slate-950">
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-b ${glowColor}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0),rgba(15,23,42,0.7))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className={`max-w-3xl flex flex-col ${alignClass}`}
        >
          <span className="text-xs uppercase tracking-widest text-slate-300/70">{eyebrow}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-indigo-100/90 max-w-2xl">
              {subtitle}
            </p>
          )}
          {!!bullets.length && (
            <ul className="mt-6 grid gap-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-indigo-100/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[55rem] w-[55rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
    </section>
  )
}
