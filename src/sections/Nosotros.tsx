import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { VALUES } from '../data/brand'

const valueColors = [
  { bg: 'linear-gradient(135deg, #2a5a70 0%, #5BA8D4 100%)', text: '#ffffff' },
  { bg: 'linear-gradient(135deg, #2a5a70 0%, #5BA8D4 100%)', text: '#ffffff' },
  { bg: 'linear-gradient(135deg, #2a5a70 0%, #5BA8D4 100%)', text: '#ffffff' },
]

export default function Nosotros() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" style={styles.section} ref={ref}>
      <div style={styles.sideDecor} aria-hidden="true" />

      <div style={styles.container}>
        {/* Columna de texto */}
        <div style={styles.textCol}>
          <motion.span style={styles.label}
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >Quiénes somos</motion.span>

          <motion.h2 style={styles.title}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            Tecnología que<br />
            <span style={styles.titleAccent}>potencia personas.</span>
          </motion.h2>

          <div style={styles.brandLine} />

          <motion.p style={styles.body}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            En Vortia creemos que la tecnología tiene sentido cuando está al
            servicio de las personas. No desarrollamos por desarrollar: nos
            sumergimos en tu negocio, entendemos tus procesos y construimos
            soluciones que resuelven problemas reales.
          </motion.p>

          <motion.p style={{ ...styles.body, marginTop: '1rem' }}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          >
            La inteligencia artificial es nuestra herramienta, no nuestro fin.
            La usamos para automatizar lo repetitivo y liberar el potencial de
            tu equipo en lo que realmente importa.
          </motion.p>

          <motion.a href="#contacto" style={styles.cta}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >Conocé al equipo</motion.a>
        </div>

        {/* Columna de valores */}
        <div style={styles.valuesCol}>
          {VALUES.map((value, i) => (
            <motion.div key={i} style={styles.valueCard}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 + i * 0.15 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#5BA8D4'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 40px rgba(91,168,212,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#eeeeee'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{ ...styles.valueBadge, background: valueColors[i].bg }}>
                <span style={{ ...styles.valueBadgeNum, color: valueColors[i].text }}>0{i + 1}</span>
              </div>
              <div style={styles.valueText}>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDesc}>{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Franja inferior */}
      <motion.div style={styles.highlight}
        initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
      >
        <div style={styles.highlightInner}>
          <p style={styles.highlightText}>
            <span style={styles.highlightAccent}>"</span>
            No somos un proveedor más. Somos el equipo de tecnología que tu empresa necesita tener adentro.
            <span style={styles.highlightAccent}>"</span>
          </p>
          <p style={styles.highlightAuthor}>— Equipo Vortia</p>
        </div>
      </motion.div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { position: 'relative', backgroundColor: '#ffffff', overflow: 'hidden', paddingBottom: 0 },
  sideDecor: { position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #B7F38A, #5BA8D4, transparent)', opacity: 0.7 },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' },
  textCol: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5BA8D4', marginBottom: '0.75rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#444444', lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em' },
  titleAccent: { color: '#444444' },
  brandLine: { width: '48px', height: '3px', background: 'linear-gradient(to right, #B7F38A, #5BA8D4)', borderRadius: '2px', margin: '1.25rem 0 1.5rem' },
  body: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#727376', lineHeight: 1.8, margin: 0, maxWidth: '480px' },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #2a5a70 0%, #5BA8D4 100%)', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', padding: '0.8rem 1.75rem', borderRadius: '8px', textDecoration: 'none', marginTop: '2rem', transition: 'opacity 0.2s ease, transform 0.2s ease' },
  valuesCol: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  valueCard: { position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', backgroundColor: '#fafafa', border: '1px solid #eeeeee', borderRadius: '12px', cursor: 'default', transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease' },
  valueBadge: { flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  valueBadgeNum: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '0.9rem' },
  valueText: { flex: 1 },
  valueTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 0.4rem' },
  valueDesc: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.87rem', color: '#727376', lineHeight: 1.65, margin: 0 },
  highlight: { backgroundColor: '#444444', padding: '3rem 1.5rem' },
  highlightInner: { maxWidth: '700px', margin: '0 auto', textAlign: 'center' },
  highlightText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#ffffff', lineHeight: 1.7, margin: '0 0 0.75rem' },
  highlightAccent: { color: '#ffffff', fontSize: '1.5em', lineHeight: 0, verticalAlign: 'middle' },
  highlightAuthor: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.85rem', color: '#B7F38A', margin: 0, letterSpacing: '0.05em' },
}
