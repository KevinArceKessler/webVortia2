import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PRODUCTS, BRAND } from '../data/brand'
import { Play, MessageCircle, Calendar, Send, Layers, Code2 } from 'lucide-react'

const PRODUCT_ICONS = [MessageCircle, Send, Layers, Code2]

export default function Demos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="demos" style={styles.section} ref={ref}>

      <div style={styles.headerWrap}>
        <motion.span style={styles.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Probá antes de decidir
        </motion.span>

        <motion.h2 style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Demos en vivo,
          <span style={styles.titleAccent}> sin compromiso.</span>
        </motion.h2>

        <motion.div style={styles.brandLine}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Nada convence más que verlo funcionar. Probá nuestros productos en acción
          o agendá una sesión personalizada con nuestro equipo.
        </motion.p>
      </div>

      {/* Cards de demos */}
      <div style={styles.grid}>
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(-6px)'
              el.style.boxShadow = '0 20px 60px rgba(183,243,138,0.1)'
              el.style.borderColor = '#B7F38A'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)'
              el.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            {/* Color accent top */}
            <div style={{ ...styles.cardAccent, backgroundColor: product.color }} />

            <div style={styles.cardHeader}>
              {(() => { const Icon = PRODUCT_ICONS[i]; return <Icon size={28} color="#5BA8D4" strokeWidth={1.5} /> })()}
              <div>
                <p style={styles.cardLabel}>Demo disponible</p>
                <h3 style={styles.cardName}>{product.name}</h3>
              </div>
            </div>

            <p style={styles.cardTagline}>{product.tagline}</p>

            <div style={styles.cardFeatures}>
              {product.features.slice(0, 3).map((f, j) => (
                <span key={j} style={styles.featureChip}>{f}</span>
              ))}
            </div>

            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.demoBtn}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(183,243,138,0.16)'; el.style.borderColor = 'rgba(183,243,138,0.6)'; el.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(183,243,138,0.08)'; el.style.borderColor = 'rgba(183,243,138,0.3)'; el.style.transform = 'translateY(0)' }}
            >
              {product.id === 'inbox' || product.id === 'sender' || product.id === 'boxium'
                ? <><MessageCircle size={16} /> Probar ahora</>
                : <><Play size={16} /> Ver demo</>
              }
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA de demo personalizada */}
      <motion.div
        style={styles.ctaBox}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div style={styles.ctaBoxText}>
          <h3 style={styles.ctaBoxTitle}>¿Preferís una demo en vivo con nuestro equipo?</h3>
          <p style={styles.ctaBoxSubtitle}>
            Agendá una sesión de 30 minutos. Te mostramos el producto que más se adapta a tu empresa,
            respondemos todas tus preguntas y armamos una propuesta a medida.
          </p>
        </div>
        <div style={styles.ctaBoxBtns}>
          <a
            href="https://calendar.app.google/oPjfyyKEjV8vPFmi6"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.btnPrimary}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9CD468' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#B7F38A' }}
          >
            <Calendar size={16} />
            Agendar demo gratis
          </a>
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.btnSecondary}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent' }}
          >
            <MessageCircle size={16} />
            Escribinos por WhatsApp
          </a>
        </div>
      </motion.div>

    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { backgroundColor: '#ffffff', padding: '4rem 1rem 3rem' },
  headerWrap: { maxWidth: '860px', margin: '0 auto 4rem', textAlign: 'center' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CD468', marginBottom: '1rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#444444', lineHeight: 1.1, margin: '0 0 1.25rem', letterSpacing: '-0.03em' },
  titleAccent: { color: '#9CD468' },
  brandLine: { width: '56px', height: '3px', background: 'linear-gradient(to right, #B7F38A, #5BA8D4)', borderRadius: '2px', margin: '0 auto 1.5rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#727376', lineHeight: 1.8, margin: '0 auto', maxWidth: '620px' },
  grid: { maxWidth: '1100px', margin: '0 auto 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' },
  card: { position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.75rem', backgroundColor: '#444444', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', overflow: 'hidden' },
  cardAccent: { position: 'absolute', top: 0, left: 0, right: 0, height: '3px' },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  cardEmoji: { fontSize: '1.75rem' },
  cardLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.65rem', color: '#9CD468', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  cardName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#ffffff', margin: 0 },
  cardTagline: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.875rem', color: '#a0a0a0', lineHeight: 1.6, margin: 0 },
  cardFeatures: { display: 'flex', flexDirection: 'column', gap: '0.35rem' },
  featureChip: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.75rem', color: '#cecece', padding: '0.25rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  demoBtn: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: 'rgba(183,243,138,0.08)', border: '1px solid rgba(183,243,138,0.3)', color: '#B7F38A', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.6rem 1.25rem', borderRadius: '999px', textDecoration: 'none', transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease', marginTop: 'auto' },
  ctaBox: { maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(135deg, #3a3a3a 0%, #444444 100%)', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(183,243,138,0.15)' },
  ctaBoxText: { flex: 1, minWidth: '260px' },
  ctaBoxTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#ffffff', margin: '0 0 0.75rem', lineHeight: 1.3 },
  ctaBoxSubtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.9rem', color: '#727376', lineHeight: 1.7, margin: 0 },
  ctaBoxBtns: { display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease', justifyContent: 'center' },
  btnSecondary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.875rem', padding: '0.8rem 1.5rem', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,0.2)', textDecoration: 'none', transition: 'background-color 0.2s ease', justifyContent: 'center' },
}
