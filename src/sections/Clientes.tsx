import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CLIENTS } from '../data/brand'
import { X, Quote } from 'lucide-react'

const TESTIMONIOS = [
  {
    id: 'scotta',
    nombre: 'Martín Scotta',
    cargo: 'Director',
    empresa: 'Scotta y Asociados',
    industria: 'Productores de Seguros',
    frase: 'Vortia transformó la forma en que atendemos a nuestros clientes. Hoy respondemos consultas en segundos.',
    historia: {
      problema: 'El equipo perdía horas respondiendo las mismas consultas por WhatsApp. Los clientes esperaban y el equipo se agotaba.',
      solucion: 'Implementamos Vortia Inbox para automatizar las respuestas frecuentes, con derivación inteligente al equipo humano cuando era necesario.',
      resultado: 'Redujimos el tiempo de respuesta de horas a segundos. El equipo ahora se enfoca en consultas complejas y ventas.',
    },
    iniciales: 'MS',
  },
  {
    id: 'fasta',
    nombre: 'Coordinación Académica',
    cargo: 'Área Digital',
    empresa: 'FASTA',
    industria: 'Educación Superior',
    frase: 'La implementación fue rápida y el soporte de Vortia fue clave. Nuestros alumnos ahora tienen respuestas 24/7.',
    historia: {
      problema: 'Los ingresantes tenían dudas fuera del horario de atención. Se perdían oportunidades de inscripción.',
      solucion: 'Vortia Inbox integrado al canal de WhatsApp institucional, con respuestas automáticas sobre carreras, aranceles e inscripciones.',
      resultado: 'Aumento del 30% en consultas resueltas fuera de horario y mejora notable en la experiencia del ingresante.',
    },
    iniciales: 'FA',
  },
  {
    id: 'giletta',
    nombre: 'Estudio Giletta',
    cargo: 'Dirección',
    empresa: 'Estudio Giletta y Asociados',
    industria: 'Inmobiliaria',
    frase: 'Desde que usamos Vortia ninguna consulta queda sin respuesta. Es como tener un empleado más, pero que nunca descansa.',
    historia: {
      problema: 'Las consultas de propiedades llegaban a toda hora y era imposible responder a tiempo sin perder interesados.',
      solucion: 'Implementación de Vortia Inbox con integración a su catálogo de propiedades para responder consultas automáticas.',
      resultado: 'Cero consultas sin respuesta. Los interesados reciben información al instante y el equipo de ventas solo interviene cuando hay interés real.',
    },
    iniciales: 'EG',
  },
  {
    id: 'region',
    nombre: 'Logística y Ventas',
    cargo: 'Gerencia',
    empresa: 'Región Centro',
    industria: 'Distribuidora',
    frase: 'Vortia Sender nos permite comunicarnos con todos nuestros clientes en minutos. Antes era un proceso de días.',
    historia: {
      problema: 'Comunicar novedades, promociones y cambios de precios a cientos de clientes llevaba días y recursos humanos significativos.',
      solucion: 'Vortia Sender para envíos masivos segmentados por zona y tipo de cliente, con automatización de comunicaciones recurrentes.',
      resultado: 'Lo que antes llevaba 3 días ahora se hace en 20 minutos. Con mejor tasa de apertura y respuesta.',
    },
    iniciales: 'RC',
  },
]

// Duplicamos los clientes para el loop infinito
const CLIENTS_LOOP = [...CLIENTS, ...CLIENTS]

export default function Clientes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<typeof TESTIMONIOS[0] | null>(null)
  const [paused, setPaused] = useState(false)

  const openModal = (t: typeof TESTIMONIOS[0]) => {
    setSelected(t)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <section id="clientes" style={styles.section} ref={ref}>

      {/* ── Encabezado ── */}
      <div style={styles.headerWrap}>
        <motion.span
          style={styles.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Clientes que nos eligen
        </motion.span>

        <motion.h2
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Empresas que ya
          <span style={styles.titleAccent}> crecieron con Vortia.</span>
        </motion.h2>

        <motion.div style={styles.brandLine}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
        >
          De inmobiliarias a distribuidoras, de educación a seguros. Empresas de distintos
          rubros confían en Vortia para potenciar su tecnología.
        </motion.p>
      </div>

      {/* ── Carrusel infinito de logos ── */}
      <motion.div
        style={styles.carouselWrapper}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Fade izquierdo */}
        <div style={styles.fadeLeft} />
        {/* Fade derecho */}
        <div style={styles.fadeRight} />

        <div
          style={styles.carouselTrack}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{
            ...styles.carouselInner,
            animationPlayState: paused ? 'paused' : 'running',
          }}>
            {CLIENTS_LOOP.map((client, i) => (
              <div key={`${client.id}-${i}`} style={styles.carouselItem}>
                <div style={styles.carouselAvatar}>
                  <span style={styles.carouselInitials}>
                    {client.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                  </span>
                </div>
                <div>
                  <p style={styles.carouselName}>{client.name}</p>
                  <p style={styles.carouselIndustry}>{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Testimonios ── */}
      <motion.div
        style={styles.testimoniosHeader}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      >
        <h3 style={styles.testimoniosTitle}>Lo que dicen nuestros clientes</h3>
        <p style={styles.testimoniosSubtitle}>Hacé click en cualquier testimonio para ver el caso completo</p>
      </motion.div>

      <div style={styles.testimoniosGrid}>
        {TESTIMONIOS.map((t, i) => (
          <motion.button
            key={t.id}
            style={styles.testimonioCard}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 + i * 0.1 }}
            onClick={() => openModal(t)}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = '#B7F38A'
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = '#eeeeee'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            <Quote size={24} color="#B7F38A" style={{ flexShrink: 0 }} />
            <p style={styles.testimoniofrase}>"{t.frase}"</p>
            <div style={styles.testimonioAutor}>
              <div style={styles.testimonioAvatar}>
                <span style={styles.testimonioIniciales}>{t.iniciales}</span>
              </div>
              <div>
                <p style={styles.testimonioNombre}>{t.nombre}</p>
                <p style={styles.testimonioCargo}>{t.cargo} · {t.empresa}</p>
              </div>
            </div>
            <span style={styles.verCaso}>Ver caso completo →</span>
          </motion.button>
        ))}
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {modalOpen && selected && (
          <>
            <motion.div style={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} />
            <motion.div
              style={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div style={styles.modalHeader}>
                <div style={styles.modalAutor}>
                  <div style={styles.modalAvatar}>
                    <span style={styles.testimonioIniciales}>{selected.iniciales}</span>
                  </div>
                  <div>
                    <p style={styles.modalNombre}>{selected.nombre}</p>
                    <p style={styles.modalEmpresa}>{selected.empresa} · {selected.industria}</p>
                  </div>
                </div>
                <button style={styles.closeBtn} onClick={closeModal} aria-label="Cerrar">
                  <X size={20} color="#727376" />
                </button>
              </div>
              <div style={styles.modalQuote}>
                <Quote size={20} color="#B7F38A" />
                <p style={styles.modalFrase}>"{selected.frase}"</p>
              </div>
              <div style={styles.modalCaso}>
                {[
                  { icon: '🔴', bg: '#fee2e2', label: 'El problema', text: selected.historia.problema },
                  { icon: '🔵', bg: '#dbeafe', label: 'La solución Vortia', text: selected.historia.solucion },
                  { icon: '🟢', bg: '#dcfce7', label: 'El resultado', text: selected.historia.resultado },
                ].map((item, i) => (
                  <div key={i} style={styles.casoItem}>
                    <div style={{ ...styles.casoIcon, backgroundColor: item.bg }}>{item.icon}</div>
                    <div>
                      <h4 style={styles.casoLabel}>{item.label}</h4>
                      <p style={styles.casoText}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contacto" style={styles.modalCta} onClick={closeModal}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9CD468' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#B7F38A' }}
              >
                Quiero resultados similares
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Keyframe del carrusel ── */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: { backgroundColor: '#ffffff', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' },
  headerWrap: { maxWidth: '860px', margin: '0 auto 4rem', textAlign: 'center', padding: '0 1.5rem' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CD468', marginBottom: '1rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#444444', lineHeight: 1.1, margin: '0 0 1.25rem', letterSpacing: '-0.03em' },
  titleAccent: { color: '#9CD468' },
  brandLine: { width: '56px', height: '3px', background: 'linear-gradient(to right, #B7F38A, #5BA8D4)', borderRadius: '2px', margin: '0 auto 1.5rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#727376', lineHeight: 1.8, margin: 0, maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto' },

  // Carrusel
  carouselWrapper: { position: 'relative', width: '100%', overflow: 'hidden', marginBottom: '4rem', padding: '1rem 0' },
  fadeLeft: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #f8f9fa, transparent)', zIndex: 2, pointerEvents: 'none' },
  fadeRight: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #f8f9fa, transparent)', zIndex: 2, pointerEvents: 'none' },
  carouselTrack: { overflow: 'hidden' },
  carouselInner: {
    display: 'flex',
    gap: '1.25rem',
    width: 'max-content',
    animation: 'scroll-left 28s linear infinite',
  },
  carouselItem: { display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.25rem', backgroundColor: '#ffffff', border: '1px solid #eeeeee', borderRadius: '12px', whiteSpace: 'nowrap', flexShrink: 0 },
  carouselAvatar: { width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#444444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  carouselInitials: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.75rem', color: '#B7F38A' },
  carouselName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#444444', margin: 0 },
  carouselIndustry: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.68rem', color: '#9ca3af', margin: 0 },

  // Testimonios
  testimoniosHeader: { maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center', padding: '0 1.5rem' },
  testimoniosTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#444444', margin: '0 0 0.5rem' },
  testimoniosSubtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.9rem', color: '#9ca3af', margin: 0 },
  testimoniosGrid: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', padding: '0 1.5rem' },
  testimonioCard: { display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #eeeeee', borderRadius: '16px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.25s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', fontFamily: 'Montserrat, sans-serif' },
  testimoniofrase: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.9rem', color: '#444444', lineHeight: 1.65, margin: 0, flex: 1 },
  testimonioAutor: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  testimonioAvatar: { width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#444444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  testimonioIniciales: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.75rem', color: '#B7F38A' },
  testimonioNombre: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#444444', margin: 0 },
  testimonioCargo: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.75rem', color: '#9ca3af', margin: 0 },
  verCaso: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: '#9CD468' },

  // Modal
  overlay: { position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2000, backdropFilter: 'blur(4px)' },
  modal: { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2001, backgroundColor: '#ffffff', borderRadius: '20px', padding: '2rem', width: '90%', maxWidth: '560px', maxHeight: '90vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' },
  modalHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  modalAutor: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  modalAvatar: { width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#444444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  modalNombre: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#444444', margin: 0 },
  modalEmpresa: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.8rem', color: '#9ca3af', margin: 0 },
  closeBtn: { background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  modalQuote: { display: 'flex', gap: '0.75rem', padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '12px', borderLeft: '3px solid #B7F38A' },
  modalFrase: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.95rem', color: '#444444', lineHeight: 1.7, margin: 0 },
  modalCaso: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  casoItem: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
  casoIcon: { width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 },
  casoLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#444444', margin: '0 0 0.3rem' },
  casoText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.875rem', color: '#727376', lineHeight: 1.65, margin: 0 },
  modalCta: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', padding: '0.85rem 1.5rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease' },
}
