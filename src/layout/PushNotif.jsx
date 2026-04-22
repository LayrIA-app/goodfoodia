import { useEffect, useState } from 'react'
import { PUSH_IA } from '../data/alerts'

/**
 * PushNotif — toast bottom-right · acción IA proactiva cada 38s · 8s visible.
 *
 * Filosofía COAXIONIA (Regla 0): la IA actúa sola y comunica proactivamente
 * lo que ya ha hecho. NO es un chat reactivo.
 */
const INTERVAL_MS = 38_000
const VISIBLE_MS = 8_000

export default function PushNotif({ role }) {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const pool = PUSH_IA[role] || []
    if (pool.length === 0) return

    let idx = 0
    let hideTimer

    const show = () => {
      const msg = pool[idx % pool.length]
      idx += 1
      setCurrent({ ...msg, id: Date.now() })
      clearTimeout(hideTimer)
      hideTimer = setTimeout(() => setCurrent(null), VISIBLE_MS)
    }

    const firstTimer = setTimeout(show, 8000)
    const intervalTimer = setInterval(show, INTERVAL_MS)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(intervalTimer)
      clearTimeout(hideTimer)
    }
  }, [role])

  return (
    <>
      {current && (
        <div key={current.id} className="push-notif" role="status" aria-live="polite">
          <div className="push-notif-icon" aria-hidden="true">{current.icon}</div>
          <div className="push-notif-body">
            <div className="push-notif-tag">Good Food IA · IA proactiva</div>
            <div className="push-notif-txt">{current.txt}</div>
          </div>
          <button
            type="button"
            className="push-notif-close"
            onClick={() => setCurrent(null)}
            aria-label="Cerrar notificación"
          >×</button>
        </div>
      )}

      <style>{`
        .push-notif {
          position: fixed; bottom: 24px; right: 24px;
          width: min(360px, calc(100vw - 32px));
          background: var(--dark); color: #fff;
          padding: 12px 14px;
          border-radius: 12px;
          display: flex; align-items: flex-start; gap: 10px;
          box-shadow: 0 12px 40px rgba(0,0,0,.35), 0 0 0 1px rgba(201,168,76,.22);
          z-index: 9997;
          animation: pushIn .35s cubic-bezier(.4,0,.2,1);
        }
        @keyframes pushIn {
          from { opacity: 0; transform: translateX(30px) translateY(6px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .push-notif-icon {
          font-size: 1.2rem; flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(201,168,76,.14);
          display: flex; align-items: center; justify-content: center;
        }
        .push-notif-body { flex: 1; min-width: 0; }
        .push-notif-tag {
          font-size: .52rem; font-weight: 800;
          color: var(--gold);
          letter-spacing: .08em; text-transform: uppercase;
          margin-bottom: 3px;
        }
        .push-notif-txt {
          font-size: .72rem; color: rgba(232,224,208,.92);
          line-height: 1.5; word-break: break-word;
        }
        .push-notif-close {
          background: transparent; border: none;
          color: rgba(255,255,255,.42); font-size: 1.1rem;
          cursor: pointer; padding: 0;
          width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; border-radius: 4px;
          transition: all .15s;
        }
        .push-notif-close:hover { color: #fff; background: rgba(255,255,255,.1); }

        @media (max-width: 480px) {
          .push-notif { bottom: 16px; right: 12px; left: 12px; width: auto; }
        }
      `}</style>
    </>
  )
}
