import { useEffect } from 'react'
import { PREMIUM_MODULES } from '../data/premiumModules'

/**
 * LockedModal — modal premium de módulo bloqueado.
 * Open = id del módulo (string) | null para cerrar.
 * Regla 3: max-width 95vw, scroll interno en body, CTAs apilados ≤768.
 * Regla 1: bordes completos, no border-left de color acento.
 */
export default function LockedModal({ moduleId, onClose, onUnlock }) {
  const mod = moduleId ? PREMIUM_MODULES[moduleId] : null

  useEffect(() => {
    if (!moduleId) return
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [moduleId, onClose])

  if (!mod) return null

  return (
    <div className="locked-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={mod.title}>
      <div className="locked-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lm-close" onClick={onClose} aria-label="Cerrar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="lm-hero">
          <div className="lm-hero-topline" aria-hidden="true"></div>
          <div className="lm-hero-orb" aria-hidden="true"></div>
          <div className="lm-hero-content">
            <div className="lm-hero-badge">{mod.badge || 'PREMIUM · ACTIVO YA'}</div>
            <div className="lm-hero-icon">{mod.icon}</div>
            <div className="lm-title">{mod.title}</div>
            <div className="lm-headline">{mod.tag}</div>
            <div className="lm-kpis">
              {mod.kpis?.map((k) => (
                <div className="lm-kpi" key={k.l}>
                  <div className="lm-kpi-val">{k.v}</div>
                  <div className="lm-kpi-lbl">{k.l}</div>
                </div>
              ))}
            </div>
            {mod.social && (
              <div className="lm-social">
                <span className="lm-social-dot"></span>
                {mod.social}
              </div>
            )}
          </div>
        </div>

        <div className="lm-body">
          <div className="lm-desc">{mod.desc}</div>
          <div className="lm-section-title">Qué incluye</div>
          <div className="lm-features">
            {mod.feats?.map((f) => (
              <div className="lm-feat" key={f.t}>
                <div className="lm-feat-ic">{f.i}</div>
                <div className="lm-feat-body">
                  <div className="lm-feat-title">{f.t}</div>
                  <div className="lm-feat-desc">{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          {mod.pills?.length > 0 && (
            <div className="lm-connects">
              <div className="lm-connects-label">Integraciones</div>
              <div className="lm-connects-pills">
                {mod.pills.map((p) => <span className="lm-pill" key={p}>{p}</span>)}
              </div>
            </div>
          )}

          <div className="lm-cta">
            <button type="button" className="lm-btn-primary" onClick={() => { onUnlock?.(mod.title); onClose?.() }}>
              🔓 Activar módulo — {mod.precio}
            </button>
            <button type="button" className="lm-btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
          {mod.precio2 && <div className="lm-footer-note">{mod.precio2}</div>}
        </div>
      </div>

      <style>{`
        .locked-overlay {
          position: fixed; inset: 0;
          background: rgba(26,18,8,.85);
          backdrop-filter: blur(10px);
          z-index: 99998;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          animation: lmFadeIn .25s ease;
        }
        @keyframes lmFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .locked-box {
          width: 720px; max-width: 95vw; max-height: 92vh;
          border-radius: 20px; position: relative;
          box-shadow: 0 60px 120px rgba(0,0,0,.5);
          display: flex; overflow: hidden;
          background: #fff;
        }
        .lm-close {
          position: absolute; top: -14px; right: -14px;
          width: 32px; height: 32px; border-radius: 50%;
          background: #fff; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,.25);
          z-index: 300; color: var(--dark);
          transition: all .2s;
        }
        .lm-close:hover { background: var(--gold); color: var(--dark); }

        .lm-hero {
          width: 220px; flex-shrink: 0;
          background: var(--dark);
          padding: 28px 20px;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          color: #fff;
        }
        .lm-hero-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--terra), var(--gold));
          background-size: 200%;
          animation: lmBorderRun 3s linear infinite;
        }
        @keyframes lmBorderRun { 0% { background-position: 0%; } 100% { background-position: 200%; } }
        .lm-hero-orb {
          position: absolute; width: 200px; height: 200px; border-radius: 50%;
          filter: blur(50px); opacity: .3; bottom: -60px; right: -60px;
          background: var(--gold); pointer-events: none;
        }
        .lm-hero-content { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }
        .lm-hero-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .56rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          color: var(--terra); border: 1px solid rgba(212,87,42,.35);
          background: rgba(212,87,42,.12); padding: 3px 9px; border-radius: 20px;
          margin-bottom: 16px; width: fit-content;
        }
        .lm-hero-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px; background: rgba(255,255,255,.08);
          font-size: 1.4rem;
        }
        .lm-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 5px; line-height: 1.2; }
        .lm-headline { font-size: .68rem; font-style: italic; color: rgba(255,255,255,.5); line-height: 1.5; margin-bottom: 20px; flex: 1; }

        .lm-kpis { display: flex; flex-direction: column; gap: 8px; }
        .lm-kpi {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 8px; padding: 10px;
        }
        .lm-kpi-val { font-size: 1.1rem; font-weight: 800; color: var(--gold); line-height: 1; margin-bottom: 2px; }
        .lm-kpi-lbl { font-size: .62rem; color: rgba(255,255,255,.5); line-height: 1.3; }

        .lm-social {
          display: flex; align-items: center; gap: 6px; margin-top: 14px;
          font-size: .6rem; color: rgba(255,255,255,.55); font-weight: 500;
          background: rgba(255,255,255,.05); border-radius: 8px; padding: 8px 10px;
          border: 1px solid rgba(255,255,255,.06); white-space: nowrap;
        }
        .lm-social-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; animation: pulse 2s infinite; }

        .lm-body {
          flex: 1; background: #fff; padding: 24px 22px;
          overflow-y: auto; overflow-x: hidden;
          display: flex; flex-direction: column;
          min-width: 0;
        }
        .lm-desc { font-size: .78rem; color: rgba(26,18,8,.6); line-height: 1.65; margin-bottom: 16px; }
        .lm-section-title { font-size: .5rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: rgba(26,18,8,.32); margin-bottom: 8px; }

        .lm-features { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 14px; }
        .lm-feat {
          display: flex; align-items: flex-start; gap: 12px;
          background: #fff; border-radius: 14px; padding: 14px;
          border: 1px solid rgba(201,168,76,.18);
          box-shadow: 0 4px 16px rgba(26,18,8,.05);
          transition: all .2s;
        }
        .lm-feat:hover { box-shadow: 0 8px 24px rgba(201,168,76,.18); transform: translateY(-2px); border-color: rgba(201,168,76,.32); }
        .lm-feat-ic {
          width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(201,168,76,.1); font-size: 1.1rem;
        }
        .lm-feat-body { min-width: 0; }
        .lm-feat-title { font-size: .72rem; color: var(--dark); font-weight: 700; line-height: 1.3; margin-bottom: 2px; }
        .lm-feat-desc { font-size: .63rem; color: var(--gold-soft); line-height: 1.4; }

        .lm-connects { background: var(--cream); border-radius: 8px; padding: 10px 12px; margin-bottom: 14px; }
        .lm-connects-label { font-size: .5rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: rgba(26,18,8,.32); margin-bottom: 6px; }
        .lm-connects-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .lm-pill { font-size: .6rem; font-weight: 600; padding: 3px 10px; border-radius: 20px; background: #fff; color: rgba(26,18,8,.6); border: 1px solid rgba(201,168,76,.2); }

        .lm-cta { display: flex; gap: 8px; margin-top: auto; padding-top: 14px; align-items: stretch; flex-wrap: wrap; }
        .lm-btn-primary {
          flex: 1; min-width: 200px;
          background: var(--gold); border: none; color: var(--dark);
          padding: 11px 14px;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          border-radius: 10px; font-weight: 700; font-size: .7rem; cursor: pointer;
          box-shadow: 0 4px 16px rgba(201,168,76,.3); transition: all .2s;
          font-family: 'Space Grotesk', sans-serif; letter-spacing: .03em;
          white-space: nowrap; min-height: 42px;
        }
        .lm-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,168,76,.45); }
        .lm-btn-secondary {
          background: var(--cream); border: 1px solid var(--border); color: rgba(26,18,8,.6);
          padding: 11px 16px; border-radius: 10px; font-size: .72rem;
          cursor: pointer; transition: all .2s; font-family: inherit;
          white-space: nowrap; min-height: 42px;
        }
        .lm-btn-secondary:hover { background: var(--cream-border); }

        .lm-footer-note { text-align: center; font-size: .55rem; color: rgba(26,18,8,.35); margin-top: 10px; }

        @media (max-width: 768px) {
          .locked-box {
            flex-direction: column !important;
            width: 95vw !important; max-width: 95vw !important;
            max-height: 90vh !important;
          }
          .lm-hero {
            width: 100% !important; min-width: unset !important;
            border-radius: 16px 16px 0 0 !important; padding: 16px !important;
          }
          .lm-headline { display: none; }
          .lm-social { display: none; }
          .lm-kpis { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 6px !important; }
          .lm-body { border-radius: 0 0 16px 16px !important; overflow-y: auto !important; max-height: 60vh !important; padding: 16px !important; }
          .lm-features { grid-template-columns: 1fr !important; }
          .lm-cta { flex-direction: column !important; }
          .lm-btn-primary, .lm-btn-secondary { width: 100% !important; }
        }
      `}</style>
    </div>
  )
}
