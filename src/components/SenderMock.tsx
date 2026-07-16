import { useEffect, useState, useRef } from 'react'
import { Check, CheckCheck, Clock, AlertCircle } from 'lucide-react'

type Status = 'queued' | 'sent' | 'delivered' | 'read' | 'error'

const RECIPIENTS: { name: string; finalStatus: Status }[] = [
  { name: 'Martina G.', finalStatus: 'read' },
  { name: 'Facundo R.', finalStatus: 'delivered' },
  { name: 'Sofía A.', finalStatus: 'read' },
  { name: 'Nicolás P.', finalStatus: 'error' },
  { name: 'Camila V.', finalStatus: 'read' },
]

const CAMPAIGN_NAME = 'Promo Julio · Lista clientes'

const STEP_DELAY = 900
const RESTART_DELAY = 2600

const STATUS_META: Record<Status, { label: string; color: string }> = {
  queued: { label: 'En cola', color: '#9ca3af' },
  sent: { label: 'Enviado', color: '#9ca3af' },
  delivered: { label: 'Entregado', color: '#5BA8D4' },
  read: { label: 'Leído', color: '#9CD468' },
  error: { label: 'Error', color: '#e05a4e' },
}

function StatusIcon({ status }: { status: Status }) {
  switch (status) {
    case 'queued':
      return <Clock size={13} color={STATUS_META.queued.color} strokeWidth={2.5} />
    case 'sent':
      return <Check size={13} color={STATUS_META.sent.color} strokeWidth={2.5} />
    case 'delivered':
      return <CheckCheck size={13} color={STATUS_META.delivered.color} strokeWidth={2.5} />
    case 'read':
      return <CheckCheck size={13} color={STATUS_META.read.color} strokeWidth={2.5} />
    case 'error':
      return <AlertCircle size={13} color={STATUS_META.error.color} strokeWidth={2.5} />
  }
}

export default function SenderMock({ color }: { color: string }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [statuses, setStatuses] = useState<Status[]>(RECIPIENTS.map(() => 'queued'))
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const advance = (index: number) => {
      if (index >= RECIPIENTS.length) {
        timeout = setTimeout(() => {
          setVisibleCount(0)
          setStatuses(RECIPIENTS.map(() => 'queued'))
          timeout = setTimeout(() => advance(0), 400)
        }, RESTART_DELAY)
        return
      }

      setVisibleCount(index + 1)
      setStatuses((prev) => {
        const next = [...prev]
        next[index] = 'sent'
        return next
      })

      timeout = setTimeout(() => {
        setStatuses((prev) => {
          const next = [...prev]
          next[index] = RECIPIENTS[index].finalStatus === 'error' ? 'error' : 'delivered'
          return next
        })

        if (RECIPIENTS[index].finalStatus === 'read') {
          timeout = setTimeout(() => {
            setStatuses((prev) => {
              const next = [...prev]
              next[index] = 'read'
              return next
            })
            timeout = setTimeout(() => advance(index + 1), STEP_DELAY)
          }, STEP_DELAY)
        } else {
          timeout = setTimeout(() => advance(index + 1), STEP_DELAY)
        }
      }, STEP_DELAY)
    }

    timeout = setTimeout(() => advance(0), 600)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const list = listRef.current
    if (list) list.scrollTop = list.scrollHeight
  }, [visibleCount])

  const progress = Math.round((visibleCount / RECIPIENTS.length) * 100)

  return (
    <div style={styles.wrapper}>
      <div style={styles.campaignHeader}>
        <span style={styles.campaignName}>{CAMPAIGN_NAME}</span>
        <span style={{ ...styles.campaignCount, color }}>{visibleCount}/{RECIPIENTS.length}</span>
      </div>

      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${progress}%`, backgroundColor: color }} />
      </div>

      <div ref={listRef} style={styles.list}>
        {RECIPIENTS.slice(0, visibleCount).map((r, i) => {
          const status = statuses[i]
          return (
            <div key={r.name} style={{ ...styles.row, animation: 'fadeSlideIn 0.3s ease both' }}>
              <div style={styles.avatar}>{r.name.charAt(0)}</div>
              <span style={styles.rowName}>{r.name}</span>
              <span style={{ ...styles.rowStatus, color: STATUS_META[status].color }}>
                {STATUS_META[status].label}
                <StatusIcon status={status} />
              </span>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
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
    gap: '0.65rem',
  },
  campaignHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  campaignName: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '0.78rem',
    color: '#444444',
  },
  campaignCount: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '0.72rem',
  },
  progressTrack: {
    width: '100%',
    height: '6px',
    borderRadius: '999px',
    backgroundColor: '#eeeeee',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '999px',
    transition: 'width 0.4s ease',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    overflowY: 'auto',
    flex: 1,
    paddingRight: '2px',
    scrollbarWidth: 'none',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.45rem 0.6rem',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
    border: '1px solid #eeeeee',
  },
  avatar: {
    width: '22px',
    height: '22px',
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
  },
  rowName: {
    flex: 1,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '0.75rem',
    color: '#444444',
  },
  rowStatus: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '0.68rem',
    whiteSpace: 'nowrap',
  },
}
