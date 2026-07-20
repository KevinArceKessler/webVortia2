import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BRAND, PRODUCTS } from '../data/brand'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const CONTACT_ENDPOINT = 'https://vortia-api.onrender.com/api/slack/contact'

export default function Contacto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', producto: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const canSubmit = Boolean(form.nombre.trim() && form.email.trim() && form.mensaje.trim())

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending) return

    setSending(true)
    setError('')

    const selectedProduct = PRODUCTS.find(product => product.id === form.producto)?.name
    const messageDetails = [
      form.empresa.trim() && `Empresa: ${form.empresa.trim()}`,
      form.telefono.trim() && `Teléfono: ${form.telefono.trim()}`,
      form.producto && `Producto de interés: ${selectedProduct ?? 'Otro / No estoy seguro'}`,
      `Mensaje: ${form.mensaje.trim()}`,
    ].filter(Boolean)

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nombre.trim(),
          email: form.email.trim(),
          message: messageDetails.join('\n'),
        }),
      })
      const data = await response.json().catch(() => null)

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || data?.error || 'No pudimos enviar tu mensaje.')
      }

      setSent(true)
      setForm({ nombre: '', empresa: '', email: '', telefono: '', producto: '', mensaje: '' })
    } catch (submitError) {
      console.error('Error al enviar el formulario de contacto:', submitError)
      setError(submitError instanceof Error ? submitError.message : 'Ocurrió un error inesperado. Intentá nuevamente.')
    } finally {
      setSending(false)
    }
  }

  const infoItems = [
    { icon: <Phone size={18} color="#5BA8D4" />, label: 'Teléfono / WhatsApp', value: '+54 9 3564 640814', href: BRAND.whatsapp },
    { icon: <Mail size={18} color="#5BA8D4" />, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: <MapPin size={18} color="#5BA8D4" />, label: 'Ubicación', value: 'San Francisco, Córdoba, Argentina', href: null },
  ]

  return (
    <section id="contacto" className="home-section home-contact" style={styles.section} ref={ref}>
      <div style={styles.headerWrap}>
        <motion.span style={styles.label}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >Contacto</motion.span>

        <motion.h2 style={styles.title}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hablemos de tu
          <span style={styles.titleAccent}> próximo proyecto.</span>
        </motion.h2>

        <motion.div style={styles.brandLine}
          initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Contanos qué necesitás y en menos de 24hs te respondemos con una propuesta concreta.
        </motion.p>
      </div>

      <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr' }}>
        {/* Info */}
        <motion.div style={styles.infoCol}
          initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>¿Por dónde preferís contactarnos?</h3>
            {infoItems.map((item, i) => (
              <div key={i} style={styles.infoItem}>
                <div style={{ ...styles.infoIcon, backgroundColor: 'rgba(91,168,212,0.1)' }}>
                  {item.icon}
                </div>
                <div>
                  <p style={styles.infoLabel}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={styles.infoValue}>{item.value}</a>
                    : <p style={{ ...styles.infoValue, textDecoration: 'none', cursor: 'default' }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}

            <div style={styles.divider} />

            <div style={styles.socials}>
              {[
                { label: 'Instagram', href: BRAND.social.instagram },
                { label: 'Facebook', href: BRAND.social.facebook },
                { label: 'LinkedIn', href: BRAND.social.linkedin },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={styles.socialLink}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#5BA8D4' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#727376' }}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div style={styles.formCol}
          initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {sent ? (
            <div style={styles.successBox}>
              <CheckCircle size={48} color="#B7F38A" />
              <h3 style={styles.successTitle}>¡Mensaje enviado!</h3>
              <p style={styles.successText}>Gracias por contactarnos. Nuestro equipo te responde en menos de 24hs.</p>
              <button style={styles.successBtn} onClick={() => setSent(false)}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form style={styles.formCard} onSubmit={handleSubmit}>
              <div style={{ ...styles.formRow, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                <div style={styles.fieldWrap}>
                  <label htmlFor="contacto-nombre" style={styles.fieldLabel}>Nombre *</label>
                  <input id="contacto-nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" style={styles.input} autoComplete="name" required />
                </div>
                <div style={styles.fieldWrap}>
                  <label htmlFor="contacto-empresa" style={styles.fieldLabel}>Empresa</label>
                  <input id="contacto-empresa" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Tu empresa" style={styles.input} autoComplete="organization" />
                </div>
              </div>
              <div style={{ ...styles.formRow, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                <div style={styles.fieldWrap}>
                  <label htmlFor="contacto-email" style={styles.fieldLabel}>Email *</label>
                  <input id="contacto-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@empresa.com" style={styles.input} autoComplete="email" required />
                </div>
                <div style={styles.fieldWrap}>
                  <label htmlFor="contacto-telefono" style={styles.fieldLabel}>Teléfono</label>
                  <input id="contacto-telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="+54 9 ..." style={styles.input} autoComplete="tel" />
                </div>
              </div>
              <div style={styles.fieldWrap}>
                <label htmlFor="contacto-producto" style={styles.fieldLabel}>Producto de interés</label>
                <select id="contacto-producto" name="producto" value={form.producto} onChange={handleChange} style={styles.select}>
                  <option value="">Seleccioná un producto</option>
                  {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  <option value="otro">Otro / No estoy seguro</option>
                </select>
              </div>
              <div style={styles.fieldWrap}>
                <label htmlFor="contacto-mensaje" style={styles.fieldLabel}>Mensaje *</label>
                <textarea id="contacto-mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Contanos qué necesitás..." style={styles.textarea} rows={4} required />
              </div>
              {error && <p role="alert" style={styles.errorText}>{error}</p>}
              <button type="submit" disabled={sending || !canSubmit}
                style={{ ...styles.submitBtn, opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                onMouseEnter={(e) => { if (canSubmit) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#9CD468' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#B7F38A' }}
              >
                {sending ? 'Enviando...' : <><Send size={16} /> Enviar mensaje</>}
              </button>
              <p style={styles.formNote}>
                * Campos obligatorios. Al enviar, aceptás nuestra <a href="/privacidaddatos" style={styles.formNoteLink}>Política de privacidad</a>.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

const inputBase: React.CSSProperties = { width: '100%', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.9rem', padding: '0.78rem 1rem', borderRadius: '9px', border: '1px solid rgba(68,68,68,0.14)', backgroundColor: 'rgba(247,248,244,0.82)', color: '#444444', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s ease, background-color 0.2s ease' }

const styles: Record<string, React.CSSProperties> = {
  section: { backgroundColor: 'transparent', padding: '6rem 1.5rem 5.5rem' },
  headerWrap: { maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5BA8D4', marginBottom: '0.75rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#444444', lineHeight: 1.15, margin: '0 0 1rem', letterSpacing: '-0.02em' },
  titleAccent: { color: '#659b47' },
  brandLine: { width: '48px', height: '3px', background: 'linear-gradient(to right, #5BA8D4, #B7F38A)', borderRadius: '2px', margin: '0 auto 1.25rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#727376', lineHeight: 1.75, margin: 0 },
  grid: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2.5rem', alignItems: 'start' },
  infoCol: {},
  infoCard: { background: 'linear-gradient(145deg, #363835, #424440)', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: '1px solid rgba(183,243,138,0.14)', boxShadow: '0 20px 52px rgba(38,42,36,0.16)' },
  infoTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#ffffff', margin: 0 },
  infoItem: { display: 'flex', alignItems: 'flex-start', gap: '0.75rem' },
  infoIcon: { width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' },
  infoLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.72rem', color: '#727376', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.2rem' },
  infoValue: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', margin: 0, textDecoration: 'none' },
  divider: { height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' },
  responseTime: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.85rem', color: '#727376', lineHeight: 1.6, margin: 0 },
  socials: { display: 'flex', gap: '1rem' },
  socialLink: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#727376', textDecoration: 'none', transition: 'color 0.2s ease' },
  formCol: {},
  formCard: { backgroundColor: 'rgba(255,255,255,0.78)', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: '1px solid rgba(68,68,68,0.1)', boxShadow: '0 20px 58px rgba(48,54,45,0.08)', backdropFilter: 'blur(10px)' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  fieldWrap: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  fieldLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#444444', textTransform: 'uppercase', letterSpacing: '0.06em' },
  input: inputBase,
  select: { ...inputBase, appearance: 'none' },
  textarea: { ...inputBase, resize: 'vertical', minHeight: '100px' },
  submitBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 1.5rem', borderRadius: '8px', border: 'none', transition: 'background-color 0.2s ease', width: '100%' },
  formNote: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.75rem', color: '#9ca3af', margin: 0, textAlign: 'center' },
  formNoteLink: { color: '#5BA8D4', fontWeight: 600 },
  errorText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.82rem', color: '#b42318', backgroundColor: '#fef3f2', border: '1px solid #fecdca', borderRadius: '8px', padding: '0.75rem 1rem', margin: 0 },
  successBox: { backgroundColor: '#ffffff', borderRadius: '16px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', border: '1px solid #eeeeee' },
  successTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#444444', margin: 0 },
  successText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.95rem', color: '#727376', lineHeight: 1.7, margin: 0 },
  successBtn: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#444444', backgroundColor: '#B7F38A', border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem', cursor: 'pointer', marginTop: '0.5rem' },
}
