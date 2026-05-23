import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BRAND, PRODUCTS } from '../data/brand'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contacto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', producto: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ nombre: '', empresa: '', email: '', telefono: '', producto: '', mensaje: '' })
  }

  const infoItems = [
    { icon: <Phone size={18} color="#5BA8D4" />, label: 'Teléfono / WhatsApp', value: '+54 9 3564 640814', href: BRAND.whatsapp },
    { icon: <Mail size={18} color="#5BA8D4" />, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: <MapPin size={18} color="#5BA8D4" />, label: 'Ubicación', value: 'San Francisco, Córdoba, Argentina', href: null },
  ]

  return (
    <section id="contacto" style={styles.section} ref={ref}>
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

      <div style={styles.grid}>
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

            <p style={styles.responseTime}>
              ⚡ Tiempo de respuesta promedio: <strong style={{ color: '#5BA8D4' }}>menos de 2 horas</strong> en horario comercial.
            </p>

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
            <div style={styles.formCard}>
              <div style={styles.formRow}>
                <div style={styles.fieldWrap}>
                  <label style={styles.fieldLabel}>Nombre *</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" style={styles.input} />
                </div>
                <div style={styles.fieldWrap}>
                  <label style={styles.fieldLabel}>Empresa</label>
                  <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Tu empresa" style={styles.input} />
                </div>
              </div>
              <div style={styles.formRow}>
                <div style={styles.fieldWrap}>
                  <label style={styles.fieldLabel}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@empresa.com" style={styles.input} />
                </div>
                <div style={styles.fieldWrap}>
                  <label style={styles.fieldLabel}>Teléfono</label>
                  <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+54 9 ..." style={styles.input} />
                </div>
              </div>
              <div style={styles.fieldWrap}>
                <label style={styles.fieldLabel}>Producto de interés</label>
                <select name="producto" value={form.producto} onChange={handleChange} style={styles.select}>
                  <option value="">Seleccioná un producto</option>
                  {PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  <option value="otro">Otro / No estoy seguro</option>
                </select>
              </div>
              <div style={styles.fieldWrap}>
                <label style={styles.fieldLabel}>Mensaje *</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Contanos qué necesitás..." style={styles.textarea} rows={4} />
              </div>
              <button onClick={handleSubmit} disabled={sending || !form.nombre || !form.email || !form.mensaje}
                style={{ ...styles.submitBtn, opacity: (!form.nombre || !form.email || !form.mensaje) ? 0.5 : 1, cursor: (!form.nombre || !form.email || !form.mensaje) ? 'not-allowed' : 'pointer' }}
                onMouseEnter={(e) => { if (form.nombre && form.email && form.mensaje) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#9CD468' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#B7F38A' }}
              >
                {sending ? 'Enviando...' : <><Send size={16} /> Enviar mensaje</>}
              </button>
              <p style={styles.formNote}>* Campos obligatorios. No compartimos tu información con terceros.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

const inputBase: React.CSSProperties = { width: '100%', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.9rem', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid #e5e5e5', backgroundColor: '#fafafa', color: '#444444', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s ease' }

const styles: Record<string, React.CSSProperties> = {
  section: { backgroundColor: '#ffffff', padding: '5rem 1.5rem 4rem' },
  headerWrap: { maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' },
  label: { display: 'inline-block', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5BA8D4', marginBottom: '0.75rem' },
  title: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#444444', lineHeight: 1.15, margin: '0 0 1rem', letterSpacing: '-0.02em' },
  titleAccent: { color: '#5BA8D4' },
  brandLine: { width: '48px', height: '3px', background: 'linear-gradient(to right, #5BA8D4, #B7F38A)', borderRadius: '2px', margin: '0 auto 1.25rem', transformOrigin: 'left' },
  subtitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#727376', lineHeight: 1.75, margin: 0 },
  grid: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2.5rem', alignItems: 'start' },
  infoCol: {},
  infoCard: { backgroundColor: '#444444', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' },
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
  formCard: { backgroundColor: '#ffffff', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: '1px solid #eeeeee' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  fieldWrap: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  fieldLabel: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#444444', textTransform: 'uppercase', letterSpacing: '0.06em' },
  input: inputBase,
  select: { ...inputBase, appearance: 'none' },
  textarea: { ...inputBase, resize: 'vertical', minHeight: '100px' },
  submitBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 1.5rem', borderRadius: '8px', border: 'none', transition: 'background-color 0.2s ease', width: '100%' },
  formNote: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.75rem', color: '#9ca3af', margin: 0, textAlign: 'center' },
  successBox: { backgroundColor: '#ffffff', borderRadius: '16px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center', border: '1px solid #eeeeee' },
  successTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#444444', margin: 0 },
  successText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.95rem', color: '#727376', lineHeight: 1.7, margin: 0 },
  successBtn: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#444444', backgroundColor: '#B7F38A', border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem', cursor: 'pointer', marginTop: '0.5rem' },
}
