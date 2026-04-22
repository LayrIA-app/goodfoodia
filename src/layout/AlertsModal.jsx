import { useEffect } from 'react'
import { ALERTS } from '../data/alerts'

/**
 * AlertsModal — panel flotante top-right · alertas IA del rol activo.
 * Click fuera o Esc para cerrar.
 * Regla 3: width min(360px, 100vw - 32px), max-height 80vh.
 */

const TIPO_COLOR = {
  red:   { dot: '#EF4444', bg: 'rgba(239,68,68,.06)' },
  amber: { dot: '#F59E0B', bg: 'rgba(245,158,11,.06)' },
  green: { dot: '#10B981', bg: 'rgba(16,185,129,.06)' },
  blue:  { dot: '#3B82F6', bg: 'rgba(59,130,246,.06)' },
}

export default function AlertsModal({ role, open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  const items = ALERTS[role] || []

  return (
    <>
      <div className="alerts-backdrop" onClick={onClose} aria-hidden="true"></div>
      <div className="alerts-modal" role="dialog" aria-label="Alertas IA">
        <div className="alerts-hdr">
          <div className="alerts-hdr-left">
            <div className="alerts-title">Alertas IA</div>
            <div className="alerts-sub">Priorizadas por Good Food IA</div>
          </div>
          <button type="button" className="alerts-close" onClick={onClose} aria-label="Cerrar alertas">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="alerts-list">
          {items.length === 0 && (
            <div className="alerts-empty">Sin alertas activas para este perfil.</div>
          )}
          {items.map((a, i) => {
            const c = TIPO_COLOR[a.tipo] || TIPO_COLOR.blue
            return (
              <div key={i} className="alert-item" style={{ background: c.bg }}>
                <div className="alert-item-dot" style={{ background: c.dot }}></div>
                <div className="alert-item-body">
                  <div className="alert-item-sec">{a.sec}</div>
                  <div className="alert-item-txt" dangerouslySetInnerHTML={{ __html: a.txt }} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="alerts-footer">
          <span>{items.length} alertas · Actualizadas ahora</span>
        </div>
      </div>

      <style>{`
        .alerts-backdrop { position: fixed; inset: 0; background: transparent; z-index: 9998; }
        .alerts-modal {
          position: fixed; top: 64px; right: 16px;
          width: min(360px, calc(100vw - 32px)); max-height: 80vh;
          background: #fff; border-radius: 14px;
          box-shadow: 0 16px 48px rgba(26,18,8,.18), 0 4px 12px rgba(26,18,8,.08);
          border: 1px solid rgba(201,168,76,.18);
          z-index: 9999; display: flex; flex-direction: column;
          overflow: hidden;
          animation: alertsIn .22s ease;
        }
        @keyframes alertsIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .alerts-hdr {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(201,168,76,.12);
          background: linear-gradient(180deg, #fff, #FBF8F2);
        }
        .alerts-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: .88rem; font-weight: 800; color: var(--dark);
        }
        .alerts-sub { font-size: .6rem; color: var(--text3); margin-top: 2px; }
        .alerts-close {
          width: 28px; height: 28px; border-radius: 50%;
          background: transparent; border: none; cursor: pointer;
          color: var(--text2);
          display: flex; align-items: center; justify-content: center;
          transition: all .15s;
        }
        .alerts-close:hover { background: var(--cream); color: var(--dark); }
        .alerts-list { flex: 1; overflow-y: auto; padding: 10px 12px; }
        .alert-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 12px; border-radius: 8px; margin-bottom: 8px;
          min-width: 0;
        }
        .alert-item-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
        .alert-item-body { min-width: 0; flex: 1; }
        .alert-item-sec {
          font-size: .55rem; font-weight: 700; color: var(--text3);
          text-transform: uppercase; letter-spacing: .08em; margin-bottom: 3px;
        }
        .alert-item-txt { font-size: .72rem; color: var(--text1); line-height: 1.55; word-break: break-word; }
        .alert-item-txt b { color: var(--dark); font-weight: 700; }
        .alerts-empty { text-align: center; padding: 40px 20px; font-size: .75rem; color: var(--text3); }
        .alerts-footer {
          padding: 10px 16px; text-align: center;
          font-size: .6rem; color: var(--text3);
          border-top: 1px solid rgba(201,168,76,.12);
        }
        @media (max-width: 480px) {
          .alerts-modal { top: 60px; right: 12px; left: 12px; width: auto; }
        }
      `}</style>
    </>
  )
}
