import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 backdrop-blur-lg shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            <span className="text-xs text-indigo-200">Available for freelance</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            I craft immersive, glowing web experiences
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-indigo-100/90">
            A developer and designer blending motion, code, and 3D to tell product stories in a futuristic, cyberpunk aesthetic.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="pointer-events-auto group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-[0_0_25px_rgba(99,102,241,0.6)] ring-1 ring-indigo-400/60 transition hover:shadow-[0_0_35px_rgba(99,102,241,0.9)]">
              View work
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl px-5 py-3 text-indigo-200 ring-1 ring-indigo-400/30 bg-slate-900/50 hover:bg-slate-900/70 transition">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
