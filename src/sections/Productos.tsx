import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { PRODUCTS } from '../data/brand'
import { Check, ArrowRight, ExternalLink, MessageCircle, Send, Layers, Code2 } from 'lucide-react'
import InboxMock from '../components/InboxMock'
import SenderMock from '../components/SenderMock'
import BoxiumMock from '../components/BoxiumMock'

const TAB_ICONS = [MessageCircle, Send, Layers, Code2]

export default function Productos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const product = PRODUCTS[activeTab]
  const primaryCtaOpensWhatsApp = product.demoUrl.includes('wa.me')

  return (
    <section id="productos" className="home-section home-products" style={styles.section} ref={ref}>

      {/* Encabezado — más compacto */}
      <div style={styles.header}>
        <motion.span style={styles.label}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >Nuestros productos</motion.span>

        <motion.h2 style={styles.title}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Soluciones que ya están
          <br /><span style={styles.titleAccent}>transformando empresas.</span>
        </motion.h2>

        <motion.div style={styles.brandLine}
          initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      {/* Tabs */}
      <motion.div style={styles.tabs}
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {PRODUCTS.map((p, i) => {
          const Icon = TAB_ICONS[i]
          const isActive = activeTab === i
          return (
            <button key={p.id} onClick={() => setActiveTab(i)}
              style={{ ...styles.tab, ...(isActive ? styles.tabActive : {}) }}
              onMouseEnter={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(91,168,212,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#5BA8D4' } }}
              onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.48)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(68,68,68,0.14)' } }}
            >
              <Icon size={17} color={isActive ? '#B7F38A' : '#5BA8D4'} strokeWidth={2} />
              <span style={styles.tabName}>{isMobile ? '' : p.name}</span>
            </button>
          )
        })}
      </motion.div>

      {/* Panel */}
      <motion.div key={activeTab}
        style={{ ...styles.panel, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Columna info */}
        <div style={styles.panelLeft}>
          <div style={styles.productBadge}>
            {(() => { const Icon = TAB_ICONS[activeTab]; return <Icon size={32} color="#5BA8D4" strokeWidth={1.5} /> })()}
            <div>
              <p style={styles.productLabel}>Producto Vortia</p>
              <h3 style={styles.productName}>{product.name}</h3>
            </div>
          </div>

          <p style={styles.productTagline}>{product.tagline}</p>
          <p style={styles.productDesc}>{product.description}</p>

          <ul style={styles.featureList}>
            {product.features.map((f, i) => (
              <li key={i} style={styles.featureItem}>
                <span style={styles.featureCheck}><Check size={13} color="#444444" strokeWidth={3} /></span>
                <span style={styles.featureText}>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA contextual del producto */}
          {product.cta && product.id !== 'inbox' && (
            <p style={styles.productCta}>{product.cta}</p>
          )}

          <div style={styles.panelCtas}>
            <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" style={styles.ctaPrimary}
              aria-label={product.id === 'inbox' ? 'Abrir en WhatsApp la demo de una inmobiliaria ficticia' : product.demoLabel}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9CD468'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#B7F38A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
            >
              {primaryCtaOpensWhatsApp ? <MessageCircle size={16} /> : <ExternalLink size={16} />}
              {product.demoLabel}
            </a>
            <a href="#contacto" style={styles.ctaSecondary}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#444444'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#444444' }}
            >
              Quiero más info <ArrowRight size={15} />
            </a>
          </div>

          {product.cta && product.id === 'inbox' && (
            <p style={styles.demoNote}>{product.cta}</p>
          )}
        </div>

        {/* Columna visual — se oculta en mobile */}
        {!isMobile && (
          <div style={styles.panelRight}>
            <div style={{ ...styles.productVisual, borderColor: product.color + '40' }}>
              <div style={styles.mockHeader}>
                <div style={styles.mockDots}>
                  <span style={{ ...styles.mockDot, backgroundColor: '#ff5f57' }} />
                  <span style={{ ...styles.mockDot, backgroundColor: '#febc2e' }} />
                  <span style={{ ...styles.mockDot, backgroundColor: '#28c840' }} />
                </div>
                <span style={styles.mockTitle}>{product.name}</span>
              </div>
              <div style={styles.mockBody}>
                {activeTab === 0 && <InboxMock color={product.color} />}
                {activeTab === 1 && <SenderMock color={product.color} />}
                {activeTab === 2 && <BoxiumMock color={product.color} />}
                {activeTab === 3 && <CustomMock color={product.color} />}
              </div>
            </div>
            <div style={{ ...styles.productTag, backgroundColor: product.color }}>
              <span style={styles.productTagText}>#{product.id}</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Dots mobile */}
      <div style={styles.mobileNav}>
        {PRODUCTS.map((_, i) => (
          <button key={i} onClick={() => setActiveTab(i)}
            style={{ ...styles.mobileDot, backgroundColor: activeTab === i ? '#B7F38A' : '#e5e5e5', transform: activeTab === i ? 'scale(1.3)' : 'scale(1)' }}
            aria-label={`Ver producto ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}


function CustomMock({ color }: { color: string }) {
  const steps = [
    { icon: '🔍', label: 'Análisis de procesos', done: true },
    { icon: '📋', label: 'Relevamiento de requerimientos', done: true },
    { icon: '🗺️', label: 'Propuesta de solución', done: true },
    { icon: '⚙️', label: 'Desarrollo a medida', done: false },
    { icon: '🚀', label: 'Deploy y acompañamiento', done: false },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', borderRadius: '8px', backgroundColor: s.done ? '#f0fdf0' : '#f8f8f8', border: `1px solid ${s.done ? color + '50' : '#eee'}` }}>
          <span style={{ fontSize: '1rem' }}>{s.icon}</span>
          <span style={{ flex: 1, fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: s.done ? '#444444' : '#9ca3af' }}>{s.label}</span>
          {s.done
            ? <Check size={14} color="#4b4b4b" strokeWidth={3} />
            : <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid #e5e5e5', display: 'inline-block' }} />
          }
        </div>
      ))}
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  // ── Sección: padding top reducido de 5rem → 3rem
  section: { backgroundColor: 'transparent', padding: '5rem 1.5rem 5.5rem', position: 'relative', overflow: 'hidden' },

  // ── Header: margin bottom reducido de 3rem → 1.5rem, subtítulo eliminado
  header: { maxWidth: '700px', margin: '0 auto 1.5rem', textAlign: 'center' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 750, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5f9342', marginBottom: '0.5rem' },

  // ── Título: font size levemente reducido, margin bottom achicado
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', color: '#444444', lineHeight: 1.15, margin: '0 0 0.75rem', letterSpacing: '-0.02em' },
  titleAccent: { color: '#659b47' },
  brandLine: { width: '48px', height: '3px', background: 'linear-gradient(to right, #B7F38A, #5BA8D4)', borderRadius: '2px', margin: '0 auto 0', transformOrigin: 'left' },

  // ── Tabs: margin top reducido
  tabs: { display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '900px', margin: '1.25rem auto 1.5rem' },
  tab: { display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', borderRadius: '999px', border: '1px solid rgba(68,68,68,0.14)', backgroundColor: 'rgba(255,255,255,0.48)', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#4b4b4b', transition: 'all 0.2s ease', backdropFilter: 'blur(8px)' },
  tabActive: { backgroundColor: '#3d3f3b', borderColor: '#3d3f3b', color: '#B7F38A', boxShadow: '0 7px 22px rgba(45,49,42,0.16)' },
  tabName: { whiteSpace: 'nowrap' },

  // ── Panel
  panel: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '2.5rem', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.78)', borderRadius: '16px', padding: 'clamp(1.5rem, 3vw, 2.5rem)', border: '1px solid rgba(68,68,68,0.1)', boxShadow: '0 22px 64px rgba(52,58,48,0.09)', backdropFilter: 'blur(12px)' },
  panelLeft: { display: 'flex', flexDirection: 'column', gap: '0.85rem' },
  productBadge: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  productLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.7rem', color: '#727376', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  productName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.4rem', color: '#444444', margin: 0, letterSpacing: '-0.01em' },
  productTagline: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#444444', margin: 0, lineHeight: 1.4 },
  productDesc: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.9rem', color: '#727376', lineHeight: 1.75, margin: 0 },
  featureList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' },
  featureItem: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  featureCheck: { flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#B7F38A', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  featureText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.875rem', color: '#4b4b4b' },

  // ── CTA contextual
  productCta: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#5BA8D4', margin: 0, fontStyle: 'italic' },
  demoNote: { maxWidth: '560px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.72rem', color: '#85888b', lineHeight: 1.55, margin: '-0.15rem 0 0' },

  panelCtas: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' },
  ctaPrimary: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', padding: '0.7rem 1.4rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease, transform 0.2s ease' },
  ctaSecondary: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'transparent', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.875rem', padding: '0.7rem 1.4rem', borderRadius: '8px', border: '1.5px solid #e5e5e5', textDecoration: 'none', transition: 'all 0.2s ease' },
  panelRight: { position: 'relative' },
  productVisual: { backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid', overflow: 'hidden', boxShadow: '0 18px 48px rgba(37,41,35,0.12)' },
  mockHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' },
  mockDots: { display: 'flex', gap: '0.3rem' },
  mockDot: { width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' },
  mockTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#727376' },
  mockBody: { padding: '1rem', minHeight: '220px' },
  productTag: { position: 'absolute', bottom: '-0.75rem', right: '1.5rem', padding: '0.25rem 0.75rem', borderRadius: '999px' },
  productTagText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.7rem', color: '#444444' },
  mobileNav: { display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' },
  mobileDot: { width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', padding: 0 },
}
