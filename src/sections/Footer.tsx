import { BRAND, PRODUCTS } from '../data/brand'
import { MessageCircle } from 'lucide-react'

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const socialIcons = [
  { href: BRAND.social.instagram, icon: <IconInstagram />, hoverColor: '#B7F38A' },
  { href: BRAND.social.facebook, icon: <IconFacebook />, hoverColor: '#5BA8D4' },
  { href: BRAND.social.linkedin, icon: <IconLinkedin />, hoverColor: '#5BA8D4' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Marca */}
        <div style={styles.col}>
          <p style={styles.logoText}>VORTIA</p>
          <p style={styles.tagline}>El aliado tecnológico de tu empresa.</p>
          <p style={styles.desc}>Desarrollamos software con propósito. Potenciamos personas con tecnología e inteligencia artificial.</p>
          <div style={styles.socials}>
            {socialIcons.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={styles.socialIcon}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = s.hoverColor; (e.currentTarget as HTMLAnchorElement).style.borderColor = s.hoverColor }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#727376'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Productos */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Productos</h4>
          {PRODUCTS.map(p => (
            <a key={p.id} href="#productos" style={styles.link}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#5BA8D4' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#727376' }}
            >{p.emoji} {p.name}</a>
          ))}
        </div>

        {/* Empresa */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Empresa</h4>
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Quiénes somos', href: '#nosotros' },
            { label: 'Clientes', href: '#clientes' },
            /*{ label: 'Demos', href: '#demos' },*/
            { label: 'Contacto', href: '#contacto' },
          ].map((item, i) => (
            <a key={i} href={item.href} style={styles.link}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#5BA8D4' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#727376' }}
            >{item.label}</a>
          ))}
        </div>

        {/* Contacto */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Contacto</h4>
          <p style={styles.contactItem}>{BRAND.email}</p>
          <p style={styles.contactItem}>+54 9 3564 640814</p>
          <p style={styles.contactItem}>San Francisco, Córdoba, Argentina</p>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" style={styles.waBtn}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9CD468' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#B7F38A' }}
          >
            <MessageCircle size={15} /> Escribinos
          </a>
        </div>

      </div>

      {/* Línea azul decorativa */}
      <div style={styles.accentLine} />

      <div style={styles.bottom}>
        <p style={styles.copy}>© {year} Vortia S.R.L. — Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

const styles: Record<string, React.CSSProperties> = {
  footer: { backgroundColor: '#333333', padding: '4rem 1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' },
  container: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', paddingBottom: '3rem' },
  col: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  logoText: { fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#ffffff', letterSpacing: '0.05em', margin: 0 },
  tagline: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#5BA8D4', margin: 0 },
  desc: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.82rem', color: '#727376', lineHeight: 1.7, margin: 0 },
  socials: { display: 'flex', gap: '0.6rem', marginTop: '0.5rem' },
  socialIcon: { width: '34px', height: '34px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#727376', textDecoration: 'none', transition: 'all 0.2s ease' },
  colTitle: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.25rem' },
  link: { fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.85rem', color: '#727376', textDecoration: 'none', transition: 'color 0.2s ease' },
  contactItem: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.85rem', color: '#727376', margin: 0 },
  waBtn: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#B7F38A', color: '#444444', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', padding: '0.6rem 1.1rem', borderRadius: '8px', textDecoration: 'none', transition: 'background-color 0.2s ease', marginTop: '0.5rem', width: 'fit-content' },
  accentLine: { height: '2px', background: 'linear-gradient(90deg, transparent, #5BA8D4, #B7F38A, #F1FEA3, #B7F38A, #5BA8D4, transparent)', maxWidth: '1100px', margin: '0 auto', opacity: 0.5 },
  bottom: { borderTop: '1px solid rgba(255,255,255,0.04)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '1100px', margin: '0 auto' },
  copy: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.78rem', color: '#727376', margin: 0 },
}
