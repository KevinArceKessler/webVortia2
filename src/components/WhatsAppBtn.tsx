import { MessageCircle } from 'lucide-react'
import { BRAND } from '../data/brand'
import { useState } from 'react'

export default function WhatsAppBtn() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chateá con Vortia por WhatsApp"
      style={{
        ...styles.btn,
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: hovered
          ? '0 8px 30px rgba(37,211,102,0.5)'
          : '0 4px 20px rgba(37,211,102,0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MessageCircle size={26} color="#ffffff" fill="#ffffff" />
      {hovered && <span style={styles.tooltip}>¡Hablemos!</span>}
    </a>
  )
}

const styles: Record<string, React.CSSProperties> = {
  btn: {
    position: 'fixed',
    bottom: '1.75rem',
    right: '1.75rem',
    zIndex: 999,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#25d366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  tooltip: {
    position: 'absolute',
    right: '68px',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '0.8rem',
    padding: '0.4rem 0.85rem',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
}
