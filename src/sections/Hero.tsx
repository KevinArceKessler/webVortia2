import { motion } from 'framer-motion'
import { ArrowDown, Calendar } from 'lucide-react'

const WAVE_PATHS = Array.from({ length: 14 }, (_, i) => {
  const y = 80 + i * 18
  const amp = 52 - i * 1.5
  return `M -60 ${y} C 80 ${y - amp}, 200 ${y + amp}, 330 ${y} S 500 ${y - amp}, 660 ${y} S 800 ${y + amp}, 920 ${y}`
})

export default function Hero() {
  return (
    <section id="inicio" style={styles.section}>
      {/* Elemento de marca: Grilla */}
      <div style={styles.gridOverlay} aria-hidden="true" />

      {/* Elemento de marca: Wireframes y líneas de fuerza */}
      <svg style={styles.waveDecor} viewBox="0 0 800 380" preserveAspectRatio="xMinYMax meet" aria-hidden="true">
        {WAVE_PATHS.map((d, i) => (
          <path key={i} d={d} stroke="rgba(255,255,255,0.07)" strokeWidth="0.9" fill="none" />
        ))}
      </svg>

      {/* Elemento de marca: Glow dual */}
      <div style={styles.glowLine} aria-hidden="true" />

      <div style={styles.content}>
        <motion.div style={styles.badge}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.opacity = '0.88'; el.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.opacity = '1'; el.style.transform = 'translateY(0)' }}
          >Conocé nuestros productos</a>

          <a href="https://calendar.app.google/oPjfyyKEjV8vPFmi6" target="_blank" rel="noopener noreferrer" style={styles.ctaSecondary}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#9CD468'; el.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#B7F38A'; el.style.transform = 'translateY(0)' }}
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
              <span style={{ ...styles.statNumber, background: 'linear-gradient(135deg, #2a5a70 0%, #5BA8D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.number}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a href="#nosotros" style={styles.scrollArrow}
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown size={22} color="#B7F38A" />
      </motion.a>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #333333 0%, #444444 60%, #3a3d3a 100%)', paddingTop: '72px' },
  gridOverlay: { position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, transparent 1px, transparent 40px, rgba(255,255,255,0.025) 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, transparent 1px, transparent 40px, rgba(255,255,255,0.025) 40px)', zIndex: 0 },
  waveDecor: { position: 'absolute', bottom: 0, left: 0, width: '55%', height: '55%', zIndex: 1 },
  glowLine: { position: 'absolute', top: '72px', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #5BA8D4, #B7F38A, transparent)', opacity: 0.3, zIndex: 2 },
  content: { position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem 6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(183,243,138,0.12)', border: '1px solid rgba(183,243,138,0.3)', color: '#B7F38A', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '999px' },
  headline: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 },
  headlineAccent: { color: '#B7F38A' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '560px', margin: 0 },
  ctaGroup: { display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' },
  ctaPrimary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(90deg, #B7F38A, #F1FEA3)', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', transition: 'opacity 0.2s ease, transform 0.2s ease' },
  ctaSecondary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease, transform 0.2s ease' },
  stats: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 2.5rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', width: '100%' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' },
  statNumber: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1 },
  statLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' },
  scrollArrow: { position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(183,243,138,0.3)', textDecoration: 'none' },
}
