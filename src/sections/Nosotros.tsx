import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { VALUES, TEAM } from '../data/brand'

export default function Nosotros() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [showDetail, setShowDetail] = useState(false)

  return (
    <section id="nosotros" style={styles.section} ref={ref}>

      {/* Línea fina decorativa arriba */}
      <div style={styles.topLine} aria-hidden="true" />

      {/* Número tipográfico gigante de fondo */}
      <div style={styles.bgNumber} aria-hidden="true">V</div>

      <AnimatePresence mode="wait">
        {!showDetail ? (
          <motion.div
            key="main"
            style={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Columna de texto — 55% */}
            <div style={styles.textCol}>
              <motion.span
                style={styles.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Quiénes somos
              </motion.span>

              <motion.h2
                style={styles.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              >
                <span style={styles.titleThin}>Tecnología que</span><br />
                <span style={styles.titleBold}>potencia personas.</span>
              </motion.h2>

              <motion.p
                style={styles.body}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
              >
                En Vortia creemos que la IA tiene sentido cuando amplifica lo
                que los equipos ya hacen bien. No venimos a reemplazar empleados:
                venimos a liberarlos de lo repetitivo para que puedan enfocarse
                en lo que realmente importa.
              </motion.p>

              <motion.p
                style={{ ...styles.body, marginTop: '1rem' }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
              >
                La inteligencia artificial es nuestra herramienta, no nuestro
                fin. La usamos para automatizar procesos, mejorar la toma de
                decisiones y escalar la atención — sin perder el factor humano.
              </motion.p>

              <motion.div
                style={styles.btnRow}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
              >
                <button
                  style={styles.ctaPrimary}
                  onClick={() => setShowDetail(true)}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#9CD468' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#B7F38A' }}
                >
                  Conocé más sobre Vortia →
                </button>
                <a
                  href="#contacto"
                  style={styles.ctaSecondary}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#444444'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#444444'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#cccccc'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'
                  }}
                >
                  Hablemos
                </a>
              </motion.div>
            </div>

            {/* Columna de valores — 45% */}
            <div style={styles.valuesCol}>
              {VALUES.map((value, i) => (
                <motion.div
                  key={i}
                  style={styles.valueCard}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.12 }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = '#444444'
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
                    const badge = el.querySelector('.value-badge') as HTMLElement
                    if (badge) { badge.style.backgroundColor = '#444444' }
                    const num = el.querySelector('.value-num') as HTMLElement
                    if (num) { num.style.color = '#B7F38A' }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = '#e5e5e5'
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                    const badge = el.querySelector('.value-badge') as HTMLElement
                    if (badge) { badge.style.backgroundColor = '#B7F38A' }
                    const num = el.querySelector('.value-num') as HTMLElement
                    if (num) { num.style.color = '#444444' }
                  }}
                >
                  <div className="value-badge" style={styles.valueBadge}>
                    <span className="value-num" style={styles.valueBadgeNum}>0{i + 1}</span>
                  </div>
                  <div style={styles.valueText}>
                    <h3 style={styles.valueTitle}>{value.title}</h3>
                    <p style={styles.valueDesc}>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            style={styles.detailWrapper}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <button
              style={styles.backBtn}
              onClick={() => setShowDetail(false)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#444444' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af' }}
            >
              ← Volver
            </button>

            <div style={styles.detailBlock}>
              <span style={styles.label}>Nuestra visión</span>
              <h3 style={styles.detailHeadline}>Por qué hacemos lo que hacemos.</h3>
              <p style={styles.manifesto}>
                Creemos que la tecnología vale cuando amplifica lo que los equipos
                ya hacen bien — no cuando los desplaza.
              </p>
              <p style={styles.body}>
                En Vortia aplicamos IA con un propósito claro: que las empresas
                puedan hacer más con lo que ya tienen. Automatizar lo repetitivo.
                Procesar datos para tomar mejores decisiones. Escalar la atención
                sin perder la calidez.
              </p>
              <p style={{ ...styles.body, marginTop: '1rem' }}>
                No somos una fábrica de software. Somos el aliado tecnológico que
                se mete de lleno en tus procesos, entiende tu negocio y construye
                soluciones que funcionan de verdad — pensadas para las personas
                que las van a usar.
              </p>
            </div>

            <div style={styles.divider} />

            <div style={styles.detailBlock}>
              <span style={styles.label}>Cómo trabajamos</span>
              <h3 style={styles.detailHeadline}>Desde el análisis hasta el deploy, y más allá.</h3>
              <p style={styles.body}>
                Cada proyecto empieza con escucha. Antes de escribir una línea de
                código, entendemos qué problema querés resolver y por qué importa.
                Después diseñamos, construimos y acompañamos — con soporte continuo
                y mirada a largo plazo.
              </p>
            </div>

            <div style={styles.divider} />

            <div style={styles.detailBlock}>
              <span style={styles.label}>El equipo</span>
              <h3 style={styles.detailHeadline}>Tres hermanos, un mismo propósito.</h3>
              <p style={styles.body}>
                Vortia nació de la convicción de que la tecnología puede ser más
                accesible, más humana y más útil para las empresas que la necesitan.
              </p>
              <div style={styles.teamGrid}>
                {TEAM.map((member, i) => (
                  <div key={i} style={styles.memberCard}>
                    <div style={styles.avatar}>{member.initials}</div>
                    <div>
                      <p style={styles.memberName}>{member.name}</p>
                      <p style={styles.memberRole}>{member.role}</p>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={styles.memberLink}>
                          LinkedIn ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Franja inferior */}
      <motion.div
        style={styles.highlight}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
      >
        <div style={styles.highlightGlow} aria-hidden="true" />
        <svg style={styles.highlightWaves} viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => {
            const y = 20 + i * 20
            const amp = 30 - i * 1.5
            return <path key={i} d={`M -60 ${y} C 200 ${y - amp}, 400 ${y + amp}, 600 ${y} S 900 ${y - amp}, 1260 ${y}`} stroke="rgba(183,243,138,0.06)" strokeWidth="1" fill="none" />
          })}
        </svg>

        <div style={styles.highlightInner}>
          <img src="/logo/isotipo.png" alt="" style={{ height: '28px', width: 'auto', opacity: 0.5 }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <p style={styles.highlightText}>
            No somos un proveedor más.<br />
            Somos el <span style={{ color: '#B7F38A' }}>equipo de tecnología</span><br />
            que tu empresa necesita tener adentro.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { position: 'relative', backgroundColor: '#ffffff', overflow: 'hidden', paddingBottom: 0 },

  topLine: { position: 'absolute', top: 0, left: '5%', right: '5%', height: '1px', backgroundColor: '#eeeeee' },

  bgNumber: {
    position: 'absolute', top: '-5%', right: '-2%',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 900,
    fontSize: 'clamp(18rem, 30vw, 36rem)',
    color: 'rgba(0,0,0,0.07)', lineHeight: 1,
    userSelect: 'none', pointerEvents: 'none', zIndex: 0,
    letterSpacing: '-0.05em',
  },

  container: {
    position: 'relative', zIndex: 1,
    maxWidth: '1200px', margin: '0 auto',
    padding: '5rem 2.5rem 4rem',
    display: 'grid', gridTemplateColumns: '55fr 45fr',
    gap: '5rem', alignItems: 'start',
  },

  textCol: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem' },

  label: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
    fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
    color: '#9ca3af',
  },

  title: { margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em' },
  titleThin: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 300,
    fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', color: '#9ca3af',
    display: 'block', fontStyle: 'italic',
  },
  titleBold: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 900,
    fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', color: '#1a1a1a',
    display: 'block', letterSpacing: '-0.03em',
  },

  body: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.8, margin: 0, maxWidth: '460px' },

  btnRow: { display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' },
  ctaPrimary: {
    display: 'inline-flex', alignItems: 'center',
    backgroundColor: '#B7F38A', color: '#1a1a1a',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem',
    padding: '0.8rem 1.5rem', borderRadius: '4px', border: 'none',
    cursor: 'pointer', transition: 'background-color 0.2s ease',
  },
  ctaSecondary: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.85rem',
    color: '#9ca3af', padding: '0.8rem 1.25rem',
    borderRadius: '4px', border: '1px solid #cccccc',
    textDecoration: 'none', transition: 'border-color 0.2s ease, color 0.2s ease',
  },

  valuesCol: { display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', zIndex: 1 },
  valueCard: {
    display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem 1.5rem',
    backgroundColor: '#ffffff', border: '1px solid #e5e5e5',
    borderRadius: '2px', cursor: 'default',
    transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
  },
  valueBadge: {
    flexShrink: 0, width: '40px', height: '40px', borderRadius: '2px',
    backgroundColor: '#B7F38A',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background-color 0.25s ease',
  },
  valueBadgeNum: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '0.85rem',
    color: '#444444', transition: 'color 0.25s ease',
  },
  valueText: { flex: 1 },
  valueTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', margin: '0 0 0.3rem', color: '#1a1a1a' },
  valueDesc: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.65, margin: 0 },

  detailWrapper: { maxWidth: '760px', margin: '0 auto', padding: '5rem 2.5rem 4rem', position: 'relative', zIndex: 1 },
  backBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.85rem',
    color: '#9ca3af', padding: 0, marginBottom: '2.5rem',
    display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease',
  },
  detailBlock: { marginBottom: 0 },
  detailHeadline: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
    fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', color: '#1a1a1a',
    margin: '0.4rem 0 1rem', lineHeight: 1.3,
  },
  manifesto: {
    fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '1rem',
    color: '#1a1a1a', lineHeight: 1.65,
    borderLeft: '2px solid #B7F38A', paddingLeft: '1rem', marginBottom: '1.25rem',
  },
  divider: { height: '1px', background: '#f0f0f0', margin: '2.5rem 0' },
  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' },
  memberCard: {
    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
    backgroundColor: '#fafafa', border: '1px solid #eeeeee',
    borderRadius: '2px', padding: '1.1rem',
  },
  avatar: {
    width: '34px', height: '34px', borderRadius: '2px',
    backgroundColor: '#1a1a1a',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.7rem',
    color: '#B7F38A', flexShrink: 0,
  },
  memberName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#1a1a1a', margin: '0 0 0.2rem' },
  memberRole: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.4, margin: '0 0 0.35rem' },
  memberLink: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.72rem', color: '#B7F38A', textDecoration: 'none' },

  highlight: { position: 'relative', backgroundColor: '#1a1a1a', padding: '2rem 1.5rem', overflow: 'hidden' },
  highlightGlow: { position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(183,243,138,0.3), rgba(91,168,212,0.3), transparent)', opacity: 0.6 },
  highlightWaves: { position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' },
  highlightInner: { position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
  highlightText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: '#ffffff', lineHeight: 1.5, margin: 0, letterSpacing: '-0.01em' },
}
