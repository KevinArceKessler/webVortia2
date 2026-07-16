import { useEffect, useState, useRef } from 'react'

const MESSAGES = [
  { from: 'cliente', text: 'hola! quería consultar por lo de IA para mi empresa' },
  { from: 'vortia', text: '¡Hola! Claro, contame — ¿qué tipo de consultas recibís más? ¿Por WhatsApp, redes, web...?' },
  { from: 'cliente', text: 'principalmente whatsapp, pero tenemos un bot y la verdad no funciona muy bien' },
  { from: 'vortia', text: 'El problema con los bots es que solo responden lo que fue programado. Inbox entiende lo que te escribe el cliente aunque no use las palabras exactas — detecta la intención. 💬' },
  { from: 'cliente', text: 'ah, está bueno! Pero cuanto sale?' },
  { from: 'vortia', text: 'Menos de lo que pensás 😄 Hay planes para distintos tamaños de empresa. Si querés te muestro cómo funciona — ¡la demo es gratis!' },
]

// Tiempo en ms entre cada mensaje
const MSG_DELAY = 1800
// Pausa al final antes de reiniciar
const RESTART_DELAY = 3000

export default function InboxMock({ color }: { color: string }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const feedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const showNext = (index: number) => {
      if (index >= MESSAGES.length) {
        // Pausa y reinicia
        timeout = setTimeout(() => {
          setVisibleCount(0)
          setTyping(false)
          timeout = setTimeout(() => showNext(0), 400)
        }, RESTART_DELAY)
        return
      }

      // Mostrar indicador "escribiendo..." antes del mensaje de Vortia
      if (MESSAGES[index].from === 'vortia') {
        setTyping(true)
        timeout = setTimeout(() => {
          setTyping(false)
          setVisibleCount(index + 1)
          timeout = setTimeout(() => showNext(index + 1), MSG_DELAY)
        }, 1000)
      } else {
        setVisibleCount(index + 1)
        timeout = setTimeout(() => showNext(index + 1), MSG_DELAY)
      }
    }

    timeout = setTimeout(() => showNext(0), 600)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const feed = feedRef.current; if (feed) feed.scrollTop = feed.scrollHeight
  }, [visibleCount, typing])

  return (
    <div style={styles.wrapper}>
      <div ref={feedRef} style={styles.feed}>
        {MESSAGES.slice(0, visibleCount).map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: m.from === 'cliente' ? 'flex-start' : 'flex-end',
              animation: 'fadeSlideIn 0.3s ease both',
            }}
          >
            {m.from === 'cliente' && (
              <div style={styles.avatarCliente}>U</div>
            )}
            <div
              style={{
                maxWidth: '78%',
                padding: '0.55rem 0.8rem',
                borderRadius: m.from === 'cliente' ? '0 12px 12px 12px' : '12px 0 12px 12px',
                backgroundColor: m.from === 'cliente' ? '#f0f0f0' : color,
                color: '#444444',
                fontSize: '0.75rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              {m.text}
            </div>
            {m.from === 'vortia' && (
              <div style={styles.avatarVortia}>V</div>
            )}
          </div>
        ))}

        {/* Indicador de escritura */}
        {typing && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px', animation: 'fadeSlideIn 0.3s ease both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: color, padding: '0.55rem 0.9rem', borderRadius: '12px 0 12px 12px' }}>
              <span style={styles.dot} />
              <span style={{ ...styles.dot, animationDelay: '0.2s' }} />
              <span style={{ ...styles.dot, animationDelay: '0.4s' }} />
            </div>
            <div style={styles.avatarVortia}>V</div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40%            { opacity: 1;   transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '220px',
    overflow: 'hidden',
  },
  feed: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    overflowY: 'auto',
    flex: 1,
    paddingRight: '2px',
    scrollbarWidth: 'none',
  },
  avatarCliente: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    color: '#727376',
    fontSize: '0.65rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginRight: '6px',
    alignSelf: 'flex-end',
  },
  avatarVortia: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#444444',
    color: '#ffffff',
    fontSize: '0.65rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginLeft: '6px',
    alignSelf: 'flex-end',
  },
  dot: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#444444',
    animation: 'blink 1.2s infinite ease-in-out',
  },
}
