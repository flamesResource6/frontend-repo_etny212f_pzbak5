import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.6 }
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_0_1px_rgba(99,102,241,0.15),0_0_35px_rgba(99,102,241,0.25)]">
          <div className="flex items-center justify-between px-4 py-3">
            <button className="flex items-center gap-2 text-slate-200" onClick={() => scrollTo('hero')}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/80 ring-1 ring-indigo-400/50 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="font-semibold tracking-tight">NeonFolio</span>
            </button>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                    active === item.id
                      ? 'text-white bg-indigo-600/30 ring-1 ring-indigo-400/40 shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-3 rounded-lg text-sm text-left ${
                    active === item.id
                      ? 'text-white bg-indigo-600/30 ring-1 ring-indigo-400/40 shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
