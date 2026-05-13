import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { BRAND } from '../data/brand'

// Links de navegación — editá los labels o agregá más acá
const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Demos', href: '#demos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detecta el scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cierra el menú mobile al hacer click en un link
  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header style={styles.header(scrolled)}>
        <div style={styles.inner}>

          {/* ── LOGO ── */}
          <a href="#inicio" style={styles.logo} onClick={handleNavClick}>
            <img
              src="/logo/logo-horizontal.png"
              alt="Vortia — El aliado tecnológico de tu empresa"
              style={styles.logoImg}
              onError={(e) => {
                // Si no existe el logo todavía, muestra el texto
                const t = e.currentTarget as HTMLImageElement
                t.style.display = 'none'
                if (t.nextSibling) return
                const span = document.createElement('span')
                span.textContent = 'VORTIA'
                span.style.cssText = `
                  font-family: Montserrat, sans-serif;
                  font-weight: 900;
                  font-size: 1.5rem;
                  color: #c1ff72;
                  letter-spacing: 0.05em;
                `
                t.parentNode?.appendChild(span)
              }}
            />
          </a>

          {/* ── NAVEGACIÓN DESKTOP ── */}
          <nav style={styles.nav} aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={styles.navLink}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#c1ff72'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#cecece'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── CTA DESKTOP ── */}
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.cta}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#94e05a'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c1ff72'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            }}
            aria-label="Chateá con nosotros por WhatsApp"
          >
            <MessageCircle size={16} />
            Hablemos
          </a>

          {/* ── BOTÓN HAMBURGUESA MOBILE ── */}
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} color="#c1ff72" />
            ) : (
              <Menu size={24} color="#c1ff72" />
            )}
          </button>
        </div>
      </header>

      {/* ── MENÚ MOBILE (drawer) ── */}
      <div style={styles.drawer(menuOpen)} aria-hidden={!menuOpen}>
        <nav style={styles.drawerNav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={styles.drawerLink}
              onClick={handleNavClick}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#c1ff72'
                ;(e.currentTarget as HTMLAnchorElement).style.paddingLeft = '1.5rem'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                ;(e.currentTarget as HTMLAnchorElement).style.paddingLeft = '1rem'
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA en mobile */}
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.drawerCta}
            onClick={handleNavClick}
          >
            <MessageCircle size={18} />
            Hablemos por WhatsApp
          </a>
        </nav>
      </div>

      {/* ── OVERLAY para cerrar el menú mobile ── */}
      {menuOpen && (
        <div
          style={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

// ============================================
// ESTILOS — todo en un objeto para mantenerlos
// ordenados y cerca del componente
// ============================================

const styles = {
  header: (scrolled: boolean): React.CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: scrolled ? 'rgba(30, 30, 30, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 0 rgba(193, 255, 114, 0.15)' : 'none',
  }),

  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  } as React.CSSProperties,

  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexShrink: 0,
  } as React.CSSProperties,

  logoImg: {
    height: '38px',
    width: 'auto',
  } as React.CSSProperties,

  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    // Oculto en mobile — lo manejamos con el drawer
    '@media (max-width: 768px)': {
      display: 'none',
    },
  } as React.CSSProperties,

  navLink: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '0.88rem',
    color: '#cecece',
    textDecoration: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    transition: 'color 0.2s ease',
    letterSpacing: '0.02em',
    // En mobile los ocultamos desde CSS global
    display: 'none',
  } as React.CSSProperties,

  cta: {
    display: 'none', // se muestra con media query abajo
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: '#c1ff72',
    color: '#2e2e2e',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '0.85rem',
    padding: '0.6rem 1.25rem',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    flexShrink: 0,
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,

  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    transition: 'background-color 0.2s ease',
  } as React.CSSProperties,

  drawer: (open: boolean): React.CSSProperties => ({
    position: 'fixed',
    top: '72px',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: '#1e1e1e',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    overflowY: 'auto',
  }),

  drawerNav: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 1.5rem',
    gap: '0.5rem',
  } as React.CSSProperties,

  drawerLink: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '1.2rem',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    transition: 'color 0.2s ease, padding-left 0.2s ease',
  } as React.CSSProperties,

  drawerCta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    backgroundColor: '#c1ff72',
    color: '#2e2e2e',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    marginTop: '1.5rem',
  } as React.CSSProperties,

  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 998,
    backgroundColor: 'rgba(0,0,0,0.5)',
  } as React.CSSProperties,
}