import React, { useEffect, useRef, useState } from 'react'

// SecretServices.jsx
// Usage: drop this file into a React app (create-react-app / vite).
// Route it to e.g. /services. It will only render if the URL contains the query param "access=hybix-secret".
// Example footer link to reveal this page: <a href="/services?access=hybix-secret">Our Hidden Services</a>

export default function SecretServices() {
  const [hasAccess, setHasAccess] = useState(false)
  const [mounted, setMounted] = useState(false)
  const logoRef = useRef(null)
  const cardsRef = useRef([])

  // Access control: only render if ?access=hybix-secret is present in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('access')
    if (token === 'hybix-secret') setHasAccess(true)
    setMounted(true)
  }, [])

  // Logo subtle interactive parallax
  useEffect(() => {
    const el = logoRef.current
    if (!el) return
    function onMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * -10
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${y / 3}deg) rotateY(${x / 3}deg)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Reveal-on-scroll for cards
  useEffect(() => {
    const items = cardsRef.current
    if (!items || items.length === 0) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) ent.target.classList.add('visible')
      })
    }, { threshold: 0.15 })
    items.forEach(i => i && io.observe(i))
    return () => io.disconnect()
  }, [mounted])

  // Small helper to attach refs
  function setCardRef(el, i) { cardsRef.current[i] = el }

  if (!mounted) return null

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 transition-colors">
        <div className="max-w-xl text-center p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/60">
          <h2 className="text-2xl font-semibold mb-4">404 — Page Hidden</h2>
          <p className="text-sm text-gray-600">This page is private. If you think this is a mistake, open the footer link from the main site.</p>
          <div className="mt-6">
            <a href="/" className="inline-block px-4 py-2 border rounded-full">Return home</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-28 bg-gradient-to-b from-white to-gray-50 transition-colors">
      <style>{`
        /* Inline critical styles for the secret services hero */
        .hero-logo { transition: transform 0.3s ease-out; will-change: transform }
        .gradient-text {
          background: linear-gradient(90deg,#f5d44b,#93f96a,#00f0c7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 300% 100%;
          animation: slideGradient 8s linear infinite;
        }
        @keyframes slideGradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .service-card{ transform: translateY(24px) scale(0.98); opacity: 0; transition: all 700ms cubic-bezier(.2,.9,.25,1);}
        .service-card.visible{ transform: translateY(0) scale(1); opacity: 1;}
        .glass { background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.06)); backdrop-filter: blur(8px); }
        .btn-ghost{ border: 1.5px solid rgba(255,255,255,0.12); padding: .6rem 1.6rem; border-radius: 999px; }
      `}</style>

      <header className="pt-10 flex justify-center">
        <nav className="w-full max-w-4xl px-6 py-3 rounded-full glass shadow-lg backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#29f58d] to-[#6ef0ff] flex items-center justify-center shadow-md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H9L12 2Z" fill="white" /></svg>
            </div>
            <div className="text-sm font-medium">HYBIX</div>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm text-gray-700">
            <a className="hover:underline" href="#">Home</a>
            <a className="hover:underline" href="#services">Services</a>
            <a className="hover:underline" href="#projects">Projects</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-ghost text-sm">Contact</button>
          </div>
        </nav>
      </header>

      <main className="mt-24 max-w-6xl mx-auto px-6 text-center">
        <div className="hero px-8 py-12 rounded-2xl glass shadow-2xl">
          <div ref={logoRef} className="hero-logo">
            {/* HYBIX SVG simplified large mark. Replace this with your production SVG if you want. */}
            <svg className="mx-auto" width="820" height="200" viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#f7d34a" />
                  <stop offset="50%" stopColor="#9ff86b" />
                  <stop offset="100%" stopColor="#00f0c7" />
                </linearGradient>
              </defs>
              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontFamily="Satoshi, Poppins, sans-serif" fontWeight="700" fontSize="150" fill="url(#g1)" style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.12))' }}>HYBIX</text>
            </svg>
          </div>

          <p className="mt-8 max-w-2xl mx-auto text-gray-600">We build living digital products — not folders of files. Design that breathes. Code that scales. Systems that learn.</p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="btn-ghost hover:bg-white/10 transition">Get a demo</a>
            <a href="#work" className="btn-ghost hover:bg-white/10 transition">See our process</a>
          </div>
        </div>

        <section id="services" className="mt-16">
          <h3 className="text-lg font-semibold text-gray-700">Our Expertise — Where we awaken systems</h3>
          <p className="text-gray-500 mt-2">Not another agency. We fuse design, engineering and intelligence into products that feel alive.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Web Development', desc: 'Lightning fast, accessible, and beautiful web platforms. We turn static sites into reactive products.' },
              { title: 'Mobile Apps', desc: 'Human-centered apps with buttery animations and rock-solid backend integration.' },
              { title: 'AI & Automation', desc: 'Predictive analytics, smart pipelines and intelligent agents that reduce manual load.' },
              { title: 'Cloud & DevOps', desc: 'CI/CD, scalable infra and resilience so your product never misses a beat.' },
              { title: 'Cybersecurity', desc: 'Red-team style audits, hardened deployments and continuous threat monitoring.' },
              { title: 'Custom Systems', desc: 'From embedded IoT to real-time telemetry — we make the impossible manufacturable.' }
            ].map((s, idx) => (
              <article ref={el => setCardRef(el, idx)} key={s.title} className="service-card rounded-2xl p-6 glass shadow-lg text-left">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold gradient-text">{s.title}</h4>
                  <div className="text-xs text-gray-500">Expert</div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button className="text-sm btn-ghost">Learn more</button>
                  <button className="text-sm btn-ghost">Talk to expert</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-20 text-left">
          <h3 className="text-lg font-semibold text-gray-700">How we work</h3>
          <ol className="mt-4 space-y-4">
            <li className="glass rounded-lg p-4 shadow"> <strong>Discover</strong> — Understand your users, metrics and constraints.</li>
            <li className="glass rounded-lg p-4 shadow"> <strong>Prototype</strong> — Fast, interactive experiments to validate assumptions.</li>
            <li className="glass rounded-lg p-4 shadow"> <strong>Build</strong> — Engineering first, security always, delivery continuous.</li>
            <li className="glass rounded-lg p-4 shadow"> <strong>Optimize</strong> — Metrics-driven improvement and AI-enabled automation.</li>
          </ol>
        </section>

        <section id="projects" className="mt-20">
          <h3 className="text-lg font-semibold text-gray-700">Small sample of outcomes</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 shadow"> <strong>Realtime Surveillance</strong><p className="mt-2 text-sm">5G streaming + AI threat detection demo.</p></div>
            <div className="glass rounded-2xl p-6 shadow"> <strong>RC Smart Car</strong><p className="mt-2 text-sm">Embedded + mobile controls, order-ready production.</p></div>
            <div className="glass rounded-2xl p-6 shadow"> <strong>Learning Platform</strong><p className="mt-2 text-sm">Gamified PHP path with dynamic exams and badges.</p></div>
          </div>
        </section>

      </main>

      <footer className="mt-24 border-t pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} HYBIX. Built to awaken.</div>
          <div className="flex gap-4 items-center">
            {/* IMPORTANT: This is the secret link you should place in your public footer. Keep the token secret. */}
            <a href="/services?access=hybix-specialization" className="text-sm btn-ghost">Hidden Services (for partners)</a>
            <a href="#contact" className="text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}




