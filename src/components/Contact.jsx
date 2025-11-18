import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Let’s build something luminous
        </motion.h3>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_0_0_1px_rgba(99,102,241,0.12),0_0_35px_rgba(99,102,241,0.18)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl bg-slate-950/60 px-4 py-3 text-slate-200 placeholder-slate-400 ring-1 ring-slate-700 focus:outline-none focus:ring-indigo-400/60" placeholder="Name" required />
            <input type="email" className="rounded-xl bg-slate-950/60 px-4 py-3 text-slate-200 placeholder-slate-400 ring-1 ring-slate-700 focus:outline-none focus:ring-indigo-400/60" placeholder="Email" required />
          </div>
          <textarea rows="5" className="rounded-xl bg-slate-950/60 px-4 py-3 text-slate-200 placeholder-slate-400 ring-1 ring-slate-700 focus:outline-none focus:ring-indigo-400/60" placeholder="Project details" required />
          <button disabled={loading || sent} className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-[0_0_25px_rgba(99,102,241,0.6)] ring-1 ring-indigo-400/60 transition hover:shadow-[0_0_35px_rgba(99,102,241,0.9)] disabled:opacity-60">
            {sent ? 'Message sent' : loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
