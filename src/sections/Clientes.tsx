import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CLIENTS } from '../data/brand'
import { X, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIOS = [
  {
    id: 'scotta',
    nombre: 'Romina Scotta',
    cargo: 'Dueña',
    empresa: 'Scotta y Asociados',
    industria: 'Productores de Seguros',
    frase: 'Vortia transformó la forma en que atendemos y acompañamos a nuestros clientes. Hoy respondemos en segundos y llegamos a todos a la vez.',
    historia: {
      problema: 'El equipo perdía horas respondiendo las mismas consultas por WhatsApp, mientras que avisos como renovaciones de pólizas o vencimientos se comunicaban uno por uno, de forma manual.',
      solucion: 'Combinamos Vortia Inbox para automatizar las respuestas frecuentes, con derivación inteligente al equipo humano, y Vortia Sender para los envíos masivos de recordatorios y novedades a toda la cartera de clientes.',
      resultado: 'Redujimos el tiempo de respuesta de horas a segundos y lo que antes era un envío manual cliente por cliente ahora se resuelve en minutos. El equipo se enfoca en asesorar y vender, no en tareas repetitivas.',
    },
    iniciales: 'MS',
  },
  {
    id: 'fasta',
    nombre: 'Carolina Rambaldi',
    cargo: 'Directora de nivel superior',
    empresa: 'FASTA',
    industria: 'Educación Superior',
    frase: 'La implementación fue rápida y el soporte de Vortia fue clave. El proceso de inscripciones a las carreras se automatizó, mejorando la experiencia del estudiante.',
    historia: {
      problema: 'Los ingresantes tenían dudas fuera del horario de atención. Se perdían oportunidades de inscripción.',
      solucion: 'Vortia Inbox integrado al canal de WhatsApp institucional, con respuestas automáticas sobre carreras, aranceles e inscripciones.',
      resultado: 'Aumento del 30% en consultas resueltas fuera de horario y tasa de inscripción mejorada.',
    },
    iniciales: 'FA',
  },
  {
    id: 'giletta',
    nombre: '"Pepe" Assan',
    cargo: 'Dirección',
    empresa: 'Estudio Giletta y Asociados',
    industria: 'Inmobiliaria',
    frase: 'Desde que usamos Vortia ninguna consulta queda sin respuesta. Es como tener un empleado más, que siempre está disponible.',
    historia: {
      problema: 'Las consultas de propiedades llegaban a toda hora y era imposible responder a tiempo sin perder interesados.',
      solucion: 'Implementación de Vortia Inbox con integración a su catálogo de propiedades para responder consultas automáticas.',
      resultado: 'Cero consultas sin respuesta. Los interesados reciben información al instante y el equipo de ventas solo interviene cuando hay interés real.',
    },
    iniciales: 'EG',
  },
  {
    id: 'region',
    nombre: 'Daniel Lamberghini',
    cargo: 'Gerencia',
    empresa: 'Región Centro',
    industria: 'Distribuidora de alimentos',
    frase: 'Con REGI cada vendedor lleva la información comercial de la empresa en el bolsillo.',
    historia: {
      problema: 'La información comercial estaba dispersa entre el ERP y reportes. Los vendedores no tenían acceso ágil a datos clave para sus visitas.',
      solucion: 'Desarrollamos REGI, una implementación a medida de Vortia Inbox integrada a Chess ERP: cada vendedor consulta por WhatsApp su recorrido, clientes, objetivos, stock y precios en tiempo real.',
      resultado: 'Menos tiempo buscando datos en el ERP, más tiempo vendiendo con decisiones respaldadas por información real.',
    },
    iniciales: 'RC',
  },
  {
    id: 'jappert',
    nombre: 'Sebastián Jappert',
    cargo: 'Director Comercial',
    empresa: 'Jappert Bienes Raíces',
    industria: 'Inmobiliaria',
    frase: 'Con Vortia logramos que cada consulta que llega por WhatsApp sea atendida de forma inmediata y profesional. Nuestros clientes lo notan.',
    historia: {
      problema: 'El volumen de consultas en horarios no laborales era imposible de manejar. Muchos interesados no volvían a contactarse.',
      solucion: 'Vortia Inbox configurado con información de propiedades, precios y disponibilidad, con derivación al asesor correspondiente.',
      resultado: 'Recuperamos consultas que antes se perdían. El equipo de ventas ahora recibe leads ya calificados por el agente.',
    },
    iniciales: 'JB',
  },
]

const CLIENTS_LOOP = [...CLIENTS, ...CLIENTS]
const VISIBLE = 3

export default function Clientes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<typeof TESTIMONIOS[0] | null>(null)
  const [paused, setPaused] = useState(false)
  const [sliderIndex, setSliderIndex] = useState(0)

  const maxIndex = TESTIMONIOS.length - VISIBLE

  const prev = () => setSliderIndex(i => (i === 0 ? maxIndex : i - 1))
  const next = () => setSliderIndex(i => (i === maxIndex ? 0 : i + 1))

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
        <motion.span style={styles.label}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >Clientes que nos eligen</motion.span>

        <motion.h2 style={styles.title}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Empresas que ya
          <span style={styles.titleAccent}> crecieron con Vortia.</span>
        </motion.h2>

        <motion.div style={styles.brandLine}
          initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
        >
          De inmobiliarias a distribuidoras, de educación a seguros. Empresas de distintos
          rubros confían en Vortia para potenciar su tecnología.
        </motion.p>
      </div>

      {/* ── Carrusel de logos ── */}
      <motion.div style={styles.carouselWrapper}
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div style={styles.fadeLeft} />
        <div style={styles.fadeRight} />

        <div style={styles.carouselTrack}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{ ...styles.carouselInner, animationPlayState: paused ? 'paused' : 'running' }}>
            {CLIENTS_LOOP.map((client, i) => (
              <div key={i} style={styles.carouselItem}>
                {/* Nombre e industria */}
                <div style={styles.carouselInfo}>
                  <p style={styles.carouselName}>{client.name}</p>
                  <p style={styles.carouselIndustry}>{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Testimonios con slider ── */}
      <div style={styles.testimoniosSection}>
        <div style={styles.testimoniosHeader}>
          <h3 style={styles.testimoniosTitle}>Lo que dicen nuestros clientes</h3>
          <p style={styles.testimoniosSubtitle}>Casos reales, resultados concretos.</p>
        </div>

        {/* Slider */}
        <div style={styles.sliderWrapper}>
          <div style={styles.sliderViewport}>
            <motion.div
              style={styles.sliderTrack}
              animate={{ x: `-${sliderIndex * (100 / VISIBLE)}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {TESTIMONIOS.map((t, i) => (
                <div key={i} style={styles.sliderItem}>
                  <button style={styles.testimonioCard} onClick={() => openModal(t)}>
                    <div style={styles.testimonioQuoteIcon}>
                      <Quote size={18} color="#B7F38A" />
                    </div>
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
                  </button>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Flechas */}
          <div style={styles.sliderControls}>
            <button
              style={styles.sliderArrow}
              onClick={prev}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} color="#444444" />
            </button>

            {/* Dots */}
            <div style={styles.sliderDots}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setSliderIndex(i)}
                  style={{ ...styles.sliderDot, backgroundColor: sliderIndex === i ? '#444444' : '#e5e5e5' }}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              style={styles.sliderArrow}
              onClick={next}
              aria-label="Siguiente"
            >
              <ChevronRight size={20} color="#444444" />
            </button>
          </div>
        </div>
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
  section: { backgroundColor: '#f8f8f8', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' },
  headerWrap: { maxWidth: '860px', margin: '0 auto 2rem', textAlign: 'center', padding: '0 1.5rem' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CD468', marginBottom: '1rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#444444', lineHeight: 1.1, margin: '0 0 1.25rem', letterSpacing: '-0.03em' },
  titleAccent: { color: '#9CD468' },
  brandLine: { width: '56px', height: '3px', background: 'linear-gradient(to right, #B7F38A, #5BA8D4)', borderRadius: '2px', margin: '0 auto 1.5rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#727376', lineHeight: 1.8, margin: 0, maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto' },

  // Carrusel
  carouselWrapper: { position: 'relative', width: '100%', overflow: 'hidden', marginBottom: '5rem', padding: '1rem 0' },
  fadeLeft: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #f8f8f8, transparent)', zIndex: 2, pointerEvents: 'none' },
  fadeRight: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #f8f8f8, transparent)', zIndex: 2, pointerEvents: 'none' },
  carouselTrack: { overflow: 'hidden' },
  carouselInner: { display: 'flex', gap: '1.25rem', width: 'max-content', animation: 'scroll-left 30s linear infinite' },
  carouselItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', padding: '1.5rem', backgroundColor: '#444444', border: '1px solid #444444', borderRadius: '14px', whiteSpace: 'nowrap', flexShrink: 0, minWidth: '160px', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' },
  carouselInfo: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' },
  carouselName: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: '#B7F38A', margin: 0, textAlign: 'center' },
  carouselIndustry: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.65rem', color: '#cccccc', margin: 0, textAlign: 'center' },

  // Testimonios
  testimoniosSection: { maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' },
  testimoniosHeader: { textAlign: 'center', marginBottom: '2rem' },
  testimoniosTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 2.5vw, 2rem)', color: '#444444', margin: '0 0 0.5rem' },
  testimoniosSubtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1.5rem', color: '#9ca3af', margin: 0 },

  // Slider
  sliderWrapper: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  sliderViewport: { overflow: 'hidden', width: '100%' },
  sliderTrack: { display: 'flex', width: `${(5 / 3) * 100}%` },
  sliderItem: { width: `${100 / 5}%`, padding: '0 0.6rem', boxSizing: 'border-box' },
  sliderControls: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' },
  sliderArrow: { width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #e5e5e5', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s ease' },
  sliderDots: { display: 'flex', gap: '6px', alignItems: 'center' },
  sliderDot: { width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s ease', padding: 0 },

  // Cards de testimonios
  testimonioCard: { display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '16px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.25s ease', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', fontFamily: 'Montserrat, sans-serif', width: '100%', height: '100%' },
  testimonioQuoteIcon: { display: 'flex' },
  testimoniofrase: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.88rem', color: '#444444', lineHeight: 1.65, margin: 0, flex: 1 },
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
