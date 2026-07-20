import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Calendar, CheckCircle2 } from 'lucide-react'

const WAVE_PATHS = Array.from({ length: 14 }, (_, i) => {
  const y = 80 + i * 18
  const amp = 52 - i * 1.5
  return `M -60 ${y} C 80 ${y - amp}, 200 ${y + amp}, 330 ${y} S 500 ${y - amp}, 660 ${y} S 800 ${y + amp}, 920 ${y}`
})

const PILLARS = [
  'Nos metemos de lleno en tu negocio',
  'Aplicamos IA donde tiene sentido real',
  'Construimos software que dura',
  'Te acompañamos después del lanzamiento',
]

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="inicio" className="home-section home-hero" style={styles.section}>
      {/* Grilla más densa */}
      <div style={styles.gridOverlay} aria-hidden="true" />

      {/* Glow radial esquina superior izquierda */}
      <div style={styles.glowRadial} aria-hidden="true" />

      {/* Wireframes */}
      <svg style={styles.waveDecor} viewBox="0 0 800 380" preserveAspectRatio="xMinYMax meet" aria-hidden="true">
        {WAVE_PATHS.map((d, i) => (
          <path key={i} d={d} stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" fill="none" />
        ))}
      </svg>

      {/* Glow line */}
      <div style={styles.glowLine} aria-hidden="true" />

      {/* Layout */}
      <div style={{ ...styles.inner, gridTemplateColumns: isMobile ? '1fr' : '50fr 40fr' }}>

        {/* ── Columna izquierda ── */}
        <div style={styles.leftCol}>

          {/* Badge alineado izquierda, no centrado */}
          <motion.span style={styles.badge}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            IA · Software · Aliados estratégicos
          </motion.span>

          {/* Título con tensión tipográfica */}
          <motion.h1 style={styles.headline}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          >
            <span style={styles.headlineThin}>Tu empresa tiene</span><br />
            <span style={styles.headlineThin}>desafíos reales.</span><br />
            <span style={styles.headlineBold}>Nosotros los</span><br />
            <span style={styles.headlineBold}>resolvemos.</span>
          </motion.h1>

          <motion.p style={styles.subtitle}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          >
            En Vortia nos convertimos en parte de tu equipo. Entendemos tu negocio,
            aplicamos IA con criterio y construimos software que resuelve problemas
            concretos — acompañándote desde el primer día hasta mucho después del lanzamiento.
          </motion.p>

          <motion.div style={styles.ctaGroup}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          >
            <a href="#productos" style={styles.ctaPrimary}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#9CD468'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#B7F38A'; el.style.transform = 'translateY(0)' }}
            >Conocé Vortia</a>

            <a href="https://calendar.app.google/oPjfyyKEjV8vPFmi6" target="_blank" rel="noopener noreferrer" style={styles.ctaSecondary}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'transparent' }}
            >
              <Calendar size={15} />
              Agendá una demo gratis
            </a>
          </motion.div>

        </div>

        {/* ── Columna derecha ── */}
        <motion.div style={styles.rightCol}
          initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardDots}>
                <span style={{ ...styles.cardDot, backgroundColor: '#ff5f57' }} />
                <span style={{ ...styles.cardDot, backgroundColor: '#febc2e' }} />
                <span style={{ ...styles.cardDot, backgroundColor: '#28c840' }} />
              </div>
              <span style={styles.cardTitle}>vortia · cómo trabajamos</span>
            </div>

            <div style={styles.cardBody}>
              <p style={styles.cardLabel}>Nuestra forma de trabajar</p>
              {PILLARS.map((p, i) => (
                <motion.div key={i} style={styles.pillarRow}
                  initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.12, ease: 'easeOut' }}
                >
                  <CheckCircle2 size={15} color="#B7F38A" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span style={styles.pillarText}>{p}</span>
                </motion.div>
              ))}

              <div style={styles.cardDivider} />

              <div style={styles.cardFooter}>
                <div style={styles.cardStat}>
                  <span style={styles.cardStatNum}>8+</span>
                  <span style={styles.cardStatLabel}>empresas confían en Vortia</span>
                </div>
                <div style={styles.cardBadge}>✓ Aliados estratégicos</div>
              </div>
            </div>
          </div>

          {/* Floatcard — esquina inferior derecha, levemente rotado */}
          <motion.a
            href="https://calendar.app.google/oPjfyyKEjV8vPFmi6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.floatCard, whiteSpace: isMobile ? 'normal' : 'nowrap' }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#B7F38A' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(183,243,138,0.25)' }}
          >
            <span style={styles.floatIcon}>⚡</span>
            <div>
              <p style={styles.floatTitle}>Implementación en 4 semanas</p>
              <p style={styles.floatSub}>Desde el análisis hasta el deploy</p>
            </div>
          </motion.a>
        </motion.div>

      </div>

      <motion.a href="#nosotros" style={styles.scrollArrow}
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown size={20} color="#B7F38A" />
      </motion.a>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    background: 'linear-gradient(145deg, #292b28 0%, #343633 52%, #2e302d 100%)',
    paddingTop: '84px',
  },

  // Grilla más densa
  gridOverlay: {
    position: 'absolute', inset: 0,
    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 20px, rgba(255,255,255,0.03) 20px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 20px, rgba(255,255,255,0.03) 20px)',
    zIndex: 0,
  },

  // Glow radial verde esquina sup izquierda
  glowRadial: {
    position: 'absolute', top: '-20%', left: '-10%',
    width: '60%', height: '70%',
    background: 'radial-gradient(ellipse at top left, rgba(183,243,138,0.07) 0%, transparent 65%)',
    zIndex: 0, pointerEvents: 'none',
  },

  waveDecor: { position: 'absolute', bottom: 0, right: 0, width: '45%', height: '50%', zIndex: 1 },
  glowLine: {
    position: 'absolute', top: '72px', left: 0, right: 0, height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(183,243,138,0.2) 30%, rgba(91,168,212,0.2) 70%, transparent 100%)',
    zIndex: 2,
  },

  inner: {
    position: 'relative', zIndex: 2,
    maxWidth: '1300px', width: '100%', margin: '0 auto',
    padding: '1rem 1.5rem 3rem',
    display: 'grid', gridTemplateColumns: '50fr 40fr',
    gap: '1rem', alignItems: 'center',
  },

  // Columna izquierda
  leftCol: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.75rem' },

  badge: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
    fontSize: '1rem', letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(183,243,138,0.82)',
  },

  headline: { margin: 0, lineHeight: 1.05, letterSpacing: '-0.025em' },

  headlineThin: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
    fontSize: 'clamp(2rem, 3.5vw, 4rem)', color: 'rgba(255,255,255,0.72)',
    display: 'block', fontStyle: 'italic',
  },
  headlineBold: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
    fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: '#B7F38A',
    display: 'block', letterSpacing: '-0.03em',
  },

  subtitle: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 400,
    fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', color: 'rgba(255,255,255,0.64)',
    lineHeight: 1.8, margin: 0, maxWidth: '460px',
  },

  ctaGroup: { display: 'flex', flexWrap: 'wrap', gap: '0.75rem' },

  ctaPrimary: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    backgroundColor: '#B7F38A', color: '#1a1a1a',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.88rem',
    padding: '0.85rem 1.75rem', borderRadius: '8px', textDecoration: 'none',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    letterSpacing: '0.01em',
  },

  ctaSecondary: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    backgroundColor: 'transparent', color: 'rgba(255,255,255,0.76)',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.88rem',
    padding: '0.85rem 1.75rem', borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.15)',
    textDecoration: 'none', transition: 'background-color 0.2s ease',
    letterSpacing: '0.01em',
  },

  // Columna derecha
  rightCol: { display: 'flex', flexDirection: 'column', gap: '0' },

  card: {
    width: '100%', backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(183,243,138,0.16)', borderRadius: '12px',
    overflow: 'hidden', backdropFilter: 'blur(12px)',
    boxShadow: '0 24px 70px rgba(15,17,14,0.28)',
  },

  cardHeader: {
    display: 'flex', alignItems: 'center', gap: '1.5rem',
    padding: '0.65rem 1.25rem',
    backgroundColor: 'rgba(183,243,138,0.04)',
    borderBottom: '1px solid rgba(183,243,138,0.08)',
  },
  cardDots: { display: 'flex', gap: '0.3rem' },
  cardDot: { width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' },
  cardTitle: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem',
    color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em',
  },

  cardBody: { padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' },
  cardLabel: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.65rem',
    color: 'rgba(183,243,138,0.7)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: 0,
  },
  pillarRow: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  pillarText: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.75)',
  },
  cardDivider: { height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '0.2rem 0' },
  cardFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' },
  cardStat: { display: 'flex', alignItems: 'baseline', gap: '0.4rem' },
  cardStatNum: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.5rem',
    color: '#B7F38A',
  },
  cardStatLabel: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.4)',
  },
  cardBadge: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem',
    backgroundColor: 'rgba(183,243,138,0.08)', color: 'rgba(183,243,138,0.7)',
    border: '1px solid rgba(183,243,138,0.15)', padding: '0.25rem 0.65rem',
    borderRadius: '2px', letterSpacing: '0.05em',
  },

  // Floatcard — en flujo normal, alineado a la derecha, levemente rotado
  floatCard: {
    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
    backgroundColor: '#1f1f1f', border: '1px solid rgba(183,243,138,0.25)',
    borderRadius: '10px', padding: '0.75rem 1.1rem',
    boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
    textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
    transform: 'rotate(-2deg)', alignSelf: 'flex-end', marginTop: '0.5rem',
  },
  floatIcon: { fontSize: '1.2rem', lineHeight: 1 },
  floatTitle: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem',
    color: '#ffffff', margin: 0,
  },
  floatSub: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.68rem',
    color: 'rgba(255,255,255,0.4)', margin: 0, marginTop: '2px',
  },

  scrollArrow: {
    position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '38px', height: '38px', borderRadius: '10px',
    border: '1px solid rgba(183,243,138,0.2)', textDecoration: 'none',
  },
}
