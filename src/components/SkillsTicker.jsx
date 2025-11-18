import { motion } from 'framer-motion'

const skills = [
  'React', 'Next.js', 'Framer Motion', 'Three.js', 'TypeScript', 'Tailwind', 'Radix UI', 'Node.js', 'GraphQL', 'WebGL', 'GSAP', 'Python', 'FastAPI'
]

export default function SkillsTicker() {
  return (
    <section id="skills" className="relative bg-slate-950 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h3 className="text-white/90 mb-6">Skills</h3>
      </div>
      <div className="relative">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="rounded-full bg-slate-900/70 px-4 py-2 text-sm text-indigo-200 ring-1 ring-indigo-400/20 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
              {s}
            </span>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
      </div>
    </section>
  )
}
