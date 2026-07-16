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

export default function Tecnologias() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tecnologias" style={styles.section} ref={ref}>

      <motion.div style={styles.headerWrap}
        initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span style={styles.label}>Stack tecnológico</span>
        <p style={styles.subtitle}>
          Herramientas modernas y confiables. Nada de experimentos.
        </p>
      </motion.div>

      <motion.div style={styles.carouselWrapper}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div style={styles.fadeLeft} />
        <div style={styles.fadeRight} />
        <div style={styles.carouselTrack}>
          <div style={styles.carouselInner}>
            {TECHS_LOOP.map((tech, i) => (
              <div key={i} style={{
                ...styles.techChip,
                borderColor: i % 2 === 0 ? 'rgba(183,243,138,0.2)' : 'rgba(91,168,212,0.2)',
              }}>
                <span style={styles.techIcon}>{tech.icon}</span>
                <span style={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
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
  section: { backgroundColor: '#444444', padding: '2.5rem 0', overflow: 'hidden' },
  headerWrap: { maxWidth: '700px', margin: '0 auto 1.5rem', textAlign: 'center', padding: '0 1.5rem' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 1000, fontSize: '2.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5BA8D4', marginBottom: '0.5rem' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1.2rem', color: '#727376', lineHeight: 1.6, margin: 0 },
  carouselWrapper: { position: 'relative', width: '100%', overflow: 'hidden', padding: '0.5rem 0' },
  fadeLeft: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #444444, transparent)', zIndex: 2, pointerEvents: 'none' },
  fadeRight: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #444444, transparent)', zIndex: 2, pointerEvents: 'none' },
  carouselTrack: { overflow: 'hidden' },
  carouselInner: { display: 'flex', gap: '1rem', width: 'max-content', animation: 'scroll-right 22s linear infinite' },
  techChip: { display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid', borderRadius: '999px', flexShrink: 0 },
  techIcon: { fontSize: '1.1rem' },
  techName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', whiteSpace: 'nowrap' },
}
