import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slide from './components/Slide'
import WorkGrid from './components/WorkGrid'
import SkillsTicker from './components/SkillsTicker'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />

      <Slide
        id="about"
        eyebrow="Chapter 1 — Origins"
        title="From code poems to cosmic products"
        subtitle="I started by tinkering with tiny web toys—little experiments in motion and light. Today I help teams craft bold, cinematic interfaces that feel alive."
        bullets={[
          'Design systems with <strong>motion as a first-class citizen</strong>',
          '3D scenes and shaders for <strong>immersive storytelling</strong>',
          'Performance-obsessed, accessible, and <strong>production-ready</strong>'
        ]}
        glow="fuchsia"
      />

      <WorkGrid />

      <Slide
        id="process"
        eyebrow="Chapter 2 — Process"
        title="A narrative-first approach to building"
        subtitle="Every project is a story: we set the tone, design the scenes, and guide the audience through a cohesive arc."
        bullets={[
          'Discovery sprints to align on <strong>voice, vibe, and visuals</strong>',
          'Rapid prototyping with <strong>interaction maps</strong> and component films',
          'Tactile polish: <strong>sound design</strong>, haptics, subtle parallax and depth'
        ]}
        align="right"
        glow="cyan"
      />

      <SkillsTicker />

      <Slide
        id="testimonials"
        eyebrow="Chapter 3 — Voices"
        title="What partners say"
        subtitle="“Working with them felt like collaborating with a small studio—details, care, and swagger.”"
        bullets={[
          '“Turned our product into an experience”',
          '“Communication and iteration were <strong>fast and fun</strong>”',
          '“They made us look like the future”'
        ]}
        glow="emerald"
      />

      <Contact />

      <footer className="border-t border-slate-800/60 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} NeonFolio — Crafted with glow
      </footer>
    </div>
  )
}

export default App
