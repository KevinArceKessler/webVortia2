import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TECHS = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'WhatsApp API', icon: '💬' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Nuxt.js', icon: '💚' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
]

const TECHS_LOOP = [...TECHS, ...TECHS]

const STATS = [
  { number: '99.9%', label: 'Uptime garantizado', color: '#c1ff72' },
  { number: '< 4 sem', label: 'Tiempo de implementación', color: '#a8d8f0' },
  { number: '24/7', label: 'Monitoreo activo', color: '#c1ff72' },
  { number: '100%', label: 'Proyectos entregados', color: '#a8d8f0' },
]

export default function Tecnologias() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tecnologias" style={styles.section} ref={ref}>

      <div style={styles.headerWrap}>
        <motion.span style={styles.label}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >Stack tecnológico</motion.span>

        <motion.h2 style={styles.title}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tecnologías probadas,
          <span style={styles.titleAccent}> resultados confiables.</span>
        </motion.h2>

        <motion.div style={styles.brandLine}
          initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Trabajamos con las herramientas más modernas y confiables del mercado.
          Nada de experimentos: tecnología que funciona en producción.
        </motion.p>
      </div>

      {/* Carrusel */}
      <motion.div style={styles.carouselWrapper}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div style={styles.fadeLeft} />
        <div style={styles.fadeRight} />
        <div style={styles.carouselTrack}>
          <div style={styles.carouselInner}>
            {TECHS_LOOP.map((tech, i) => (
              <div key={i} style={{
                ...styles.techChip,
                borderColor: i % 3 === 0 ? 'rgba(193,255,114,0.2)' : i % 3 === 1 ? 'rgba(91,168,212,0.25)' : 'rgba(168,216,240,0.2)',
              }}>
                <span style={styles.techIcon}>{tech.icon}</span>
                <span style={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div style={styles.statsGrid}
        initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {STATS.map((s, i) => (
          <div key={i} style={styles.statCard}>
            <span style={{ ...styles.statNumber, color: s.color }}>{s.number}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { backgroundColor: '#1e1e1e', padding: '5rem 0 4rem', overflow: 'hidden' },
  headerWrap: { maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center', padding: '0 1.5rem' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5ba8d4', marginBottom: '0.75rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#ffffff', lineHeight: 1.15, margin: '0 0 1rem', letterSpacing: '-0.02em' },
  titleAccent: { color: '#a8d8f0' },
  brandLine: { width: '48px', height: '3px', background: 'linear-gradient(to right, #5ba8d4, #c1ff72)', borderRadius: '2px', margin: '0 auto 1.25rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#727376', lineHeight: 1.75, margin: 0 },
  carouselWrapper: { position: 'relative', width: '100%', overflow: 'hidden', marginBottom: '3.5rem', padding: '0.75rem 0' },
  fadeLeft: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #1e1e1e, transparent)', zIndex: 2, pointerEvents: 'none' },
  fadeRight: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #1e1e1e, transparent)', zIndex: 2, pointerEvents: 'none' },
  carouselTrack: { overflow: 'hidden' },
  carouselInner: { display: 'flex', gap: '1rem', width: 'max-content', animation: 'scroll-right 22s linear infinite' },
  techChip: { display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid', borderRadius: '999px', flexShrink: 0, transition: 'border-color 0.2s ease' },
  techIcon: { fontSize: '1.1rem' },
  techName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#cecece', whiteSpace: 'nowrap' },
  statsGrid: { maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden', padding: '0 1.5rem' },
  statCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1rem', gap: '0.4rem', backgroundColor: '#1e1e1e' },
  statNumber: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' },
  statLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: '#727376', textAlign: 'center' },
}
