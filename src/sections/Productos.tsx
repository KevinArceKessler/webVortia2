import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { PRODUCTS } from '../data/brand'
import { Check, ArrowRight, MessageCircle, Send, Layers, Code2 } from 'lucide-react'

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

  return (
    <section id="productos" style={styles.section} ref={ref}>

      {/* Encabezado */}
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

        <motion.p style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Desarrollamos productos propios pensados para las necesidades reales
          de las empresas argentinas. Simples de implementar, poderosos en resultados.
        </motion.p>
      </div>

      {/* Tabs */}
      <motion.div style={styles.tabs}
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {PRODUCTS.map((p, i) => {
          const Icon = TAB_ICONS[i]
          const isActive = activeTab === i
          return (
            <button key={p.id} onClick={() => setActiveTab(i)}
              style={{ ...styles.tab, ...(isActive ? styles.tabActive : {}) }}
              onMouseEnter={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(91,168,212,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#5BA8D4' } }}
              onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e5e5' } }}
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

          <div style={styles.panelCtas}>
            <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" style={styles.ctaPrimary}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9CD468'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#B7F38A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
            >
              <MessageCircle size={16} /> Ver demo
            </a>
            <a href="#contacto" style={styles.ctaSecondary}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#444444'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#444444' }}
            >
              Quiero más info <ArrowRight size={15} />
            </a>
          </div>
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

// Mocks visuales
function InboxMock({ color }: { color: string }) {
  const messages = [
    { from: 'cliente', text: 'Hola! Quisiera info sobre sus productos', time: '10:32' },
    { from: 'vortia', text: '¡Hola! Con gusto te ayudo 😊 ¿Qué producto te interesa?', time: '10:32' },
    { from: 'cliente', text: 'El plan para pymes, ¿tiene CRM incluido?', time: '10:33' },
    { from: 'vortia', text: 'Sí, Vortia Boxium incluye CRM + Inbox integrado. ¿Agendamos una demo?', time: '10:33' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {messages.map((m, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: m.from === 'cliente' ? 'flex-start' : 'flex-end' }}>
          <div style={{ maxWidth: '75%', padding: '0.5rem 0.75rem', borderRadius: m.from === 'cliente' ? '0 12px 12px 12px' : '12px 0 12px 12px', backgroundColor: m.from === 'cliente' ? '#f0f0f0' : color, color: m.from === 'cliente' ? '#333' : '#444444', fontSize: '0.75rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, lineHeight: 1.4 }}>
            {m.text}
            <div style={{ fontSize: '0.6rem', opacity: 0.6, marginTop: '0.2rem', textAlign: 'right' }}>{m.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function SenderMock({ color }: { color: string }) {
  const campaigns = [
    { name: 'Promo Mayo', sent: 1240, opened: 890, status: 'Activa' },
    { name: 'Reactivación clientes', sent: 560, opened: 312, status: 'Pausada' },
    { name: 'Newsletter semanal', sent: 2100, opened: 1680, status: 'Activa' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.7rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#727376', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Campaña</span>
        <span style={{ fontSize: '0.7rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#727376', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Enviados / Abiertos</span>
      </div>
      {campaigns.map((c, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.75rem', backgroundColor: '#f8f8f8', borderRadius: '8px', border: '1px solid #eee' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#444444' }}>{c.name}</p>
            <span style={{ fontSize: '0.65rem', fontFamily: 'Montserrat, sans-serif', color: c.status === 'Activa' ? '#22c55e' : '#f59e0b', fontWeight: 600 }}>{c.status}</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#444444' }}>{c.sent.toLocaleString()} / {c.opened.toLocaleString()}</p>
            <div style={{ height: '4px', backgroundColor: '#eee', borderRadius: '2px', marginTop: '0.25rem', width: '80px' }}>
              <div style={{ height: '100%', width: `${Math.round(c.opened / c.sent * 100)}%`, backgroundColor: color, borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function BoxiumMock({ color }: { color: string }) {
  const contacts = [
    { name: 'Comercial Rodríguez', stage: 'Propuesta enviada', value: '$85.000', hot: true },
    { name: 'Agro Del Valle', stage: 'Primera reunión', value: '$42.000', hot: false },
    { name: 'Estudio Pérez', stage: 'Cierre', value: '$120.000', hot: true },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        {['Todos', 'Activos', 'Cerrados'].map((t, i) => (
          <span key={i} style={{ fontSize: '0.65rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '999px', backgroundColor: i === 0 ? color : '#f0f0f0', color: i === 0 ? '#444444' : '#727376' }}>{t}</span>
        ))}
      </div>
      {contacts.map((c, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.75rem', backgroundColor: '#f8f8f8', borderRadius: '8px', border: `1px solid ${c.hot ? color + '60' : '#eee'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {c.hot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />}
            <div>
              <p style={{ margin: 0, fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#444444' }}>{c.name}</p>
              <p style={{ margin: 0, fontSize: '0.65rem', fontFamily: 'Montserrat, sans-serif', color: '#727376' }}>{c.stage}</p>
            </div>
          </div>
          <span style={{ fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#444444' }}>{c.value}</span>
        </div>
      ))}
    </div>
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
  section: { backgroundColor: '#ffffff', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' },
  header: { maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CD468', marginBottom: '0.75rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#444444', lineHeight: 1.15, margin: '0 0 1rem', letterSpacing: '-0.02em' },
  titleAccent: { color: '#9CD468' },
  brandLine: { width: '48px', height: '3px', background: 'linear-gradient(to right, #B7F38A, #5BA8D4)', borderRadius: '2px', margin: '0 auto 1.25rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#727376', lineHeight: 1.75, margin: 0 },
  tabs: { display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '900px', margin: '0 auto 2.5rem' },
  tab: { display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', borderRadius: '10px', border: '1.5px solid #e5e5e5', backgroundColor: 'transparent', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#4b4b4b', transition: 'all 0.2s ease' },
  tabActive: { backgroundColor: '#444444', borderColor: '#444444', color: '#B7F38A' },
  tabName: { whiteSpace: 'nowrap' },
  panel: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '2rem', alignItems: 'center', backgroundColor: '#fafafa', borderRadius: '20px', padding: '2rem', border: '1px solid #eeeeee' },
  panelLeft: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  productBadge: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  productLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.7rem', color: '#727376', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  productName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.4rem', color: '#444444', margin: 0, letterSpacing: '-0.01em' },
  productTagline: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#444444', margin: 0, lineHeight: 1.4 },
  productDesc: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.9rem', color: '#727376', lineHeight: 1.75, margin: 0 },
  featureList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  featureItem: { display: 'flex', alignItems: 'center', gap: '0.6rem' },
  featureCheck: { flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#B7F38A', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  featureText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.875rem', color: '#4b4b4b' },
  panelCtas: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' },
  ctaPrimary: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', padding: '0.7rem 1.4rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease, transform 0.2s ease' },
  ctaSecondary: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'transparent', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.875rem', padding: '0.7rem 1.4rem', borderRadius: '8px', border: '1.5px solid #e5e5e5', textDecoration: 'none', transition: 'all 0.2s ease' },
  panelRight: { position: 'relative' },
  productVisual: { backgroundColor: '#ffffff', borderRadius: '14px', border: '2px solid', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' },
  mockHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #eee' },
  mockDots: { display: 'flex', gap: '0.3rem' },
  mockDot: { width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' },
  mockTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#727376' },
  mockBody: { padding: '1rem', minHeight: '220px' },
  productTag: { position: 'absolute', bottom: '-0.75rem', right: '1.5rem', padding: '0.25rem 0.75rem', borderRadius: '999px' },
  productTagText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.7rem', color: '#444444' },
  mobileNav: { display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' },
  mobileDot: { width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', padding: 0 },
}
