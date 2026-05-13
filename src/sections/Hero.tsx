import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Calendar, Zap } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animationId: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    interface P { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string }
    const particles: P[] = []
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
    for (let i = 0; i < count; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2.5 + 0.5, speedX: (Math.random() - 0.5) * 0.4, speedY: (Math.random() - 0.5) * 0.4, opacity: Math.random() * 0.5 + 0.1, color: Math.random() > 0.6 ? '#c1ff72' : Math.random() > 0.5 ? '#5ba8d4' : '#a8d8f0' })
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.speedX; p.y += p.speedY
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity; ctx.fill(); ctx.globalAlpha = 1
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#5ba8d4'; ctx.globalAlpha = (1 - dist / 120) * 0.1; ctx.lineWidth = 0.5; ctx.stroke(); ctx.globalAlpha = 1
          }
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="inicio" style={styles.section}>
      <canvas ref={canvasRef} style={styles.canvas} aria-hidden="true" />
      <div style={styles.gradient} aria-hidden="true" />
      <div style={styles.pattern} aria-hidden="true" />

      <div style={styles.content}>
        {/* Badge — ahora en azul medio */}
        <motion.div style={styles.badge}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Zap size={13} color="#ffffff" />
          <span>Software · IA · Desarrollo a medida</span>
        </motion.div>

        <motion.h1 style={styles.headline}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          El aliado tecnológico
          <br /><span style={styles.headlineAccent}>que tu empresa</span>
          <br />necesita.
        </motion.h1>

        <motion.p style={styles.subtitle}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          Desarrollamos software con propósito. Automatizamos lo repetitivo,
          potenciamos a tu equipo con inteligencia artificial y construimos
          tecnología que resuelve problemas reales.
        </motion.p>

        <motion.div style={styles.ctaGroup}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
        >
          <a href="#productos" style={styles.ctaPrimary}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#94e05a'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c1ff72'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >Conocé nuestros productos</a>

          {/* CTA secundario — azul medio */}
          <a href="https://calendar.app.google/oPjfyyKEjV8vPFmi6" target="_blank" rel="noopener noreferrer" style={styles.ctaSecondary}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4a90c0'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5ba8d4'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            <Calendar size={16} />
            Agendá una demo gratis
          </a>
        </motion.div>

        <motion.div style={styles.stats}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { number: '8+', label: 'Clientes activos' },
            { number: '3', label: 'Productos propios' },
            { number: '4 sem.', label: 'Implementación' },
            { number: '24/7', label: 'Soporte IA' },
          ].map((stat, i) => (
            <div key={i} style={styles.stat}>
              <span style={{ ...styles.statNumber, color: i % 2 === 0 ? '#c1ff72' : '#a8d8f0' }}>{stat.number}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a href="#nosotros" style={styles.scrollArrow}
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown size={22} color="#c1ff72" />
      </motion.a>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #1a1a1a 0%, #252525 50%, #1e2a1e 100%)', paddingTop: '72px' },
  canvas: { position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 },
  gradient: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(91,168,212,0.06) 0%, transparent 70%)', zIndex: 1 },
  pattern: { position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(168,216,240,0.015) 30px, rgba(168,216,240,0.015) 31px)', zIndex: 1 },
  content: { position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem 6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#5ba8d4', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '999px' },
  headline: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 },
  headlineAccent: { color: '#c1ff72' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#a0a0a0', lineHeight: 1.75, maxWidth: '560px', margin: 0 },
  ctaGroup: { display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' },
  ctaPrimary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#c1ff72', color: '#1e1e1e', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease, transform 0.2s ease' },
  ctaSecondary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#5ba8d4', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease, transform 0.2s ease' },
  stats: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 2.5rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', width: '100%' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' },
  statNumber: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1 },
  statLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.75rem', color: '#727376', letterSpacing: '0.05em', textTransform: 'uppercase' },
  scrollArrow: { position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(91,168,212,0.4)', textDecoration: 'none' },
}
