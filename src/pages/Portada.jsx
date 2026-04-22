import { useEffect, useState } from 'react'
import './Portada.css'

const ROLES = [
  {
    id: 'director',
    label: 'Director',
    desc: 'KPIs, P&L y visión de negocio del restaurante',
    cardClass: 'rs-card-director',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1208" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="#1A1208" stroke="none" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="#1A1208" opacity=".75" stroke="none" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="#1A1208" opacity=".5" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'empleado',
    label: 'Empleado',
    desc: 'Sala, cocina y servicio en tiempo real',
    cardClass: 'rs-card-empleado',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1208" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M8 3 L8 9 C8 11 6 12 6 12 L6 21" />
        <path d="M10 3 L10 21" />
        <path d="M6 3 L6 9" />
        <path d="M16 3 C16 3 18 6 18 9 C18 11.5 16.5 12.5 15 13 L15 21" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'cliente',
    label: 'Cliente',
    desc: 'Reserva, carta personalizada y experiencia',
    cardClass: 'rs-card-cliente',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4572A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 3 L17 3 L14 11 C14 13.2 13.1 14 12 14 C10.9 14 10 13.2 10 11 Z" fill="none" />
        <line x1="12" y1="14" x2="12" y2="20" />
        <line x1="8" y1="20" x2="16" y2="20" />
      </svg>
    ),
  },
  {
    id: 'proveedor',
    label: 'Proveedor',
    desc: 'Pedidos, entregas y valoración',
    cardClass: 'rs-card-proveedor',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4572A" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9 L12 4 L21 9 L21 19 L3 19 Z" fill="none" />
        <path d="M3 9 L12 14 L21 9" fill="none" />
        <line x1="12" y1="14" x2="12" y2="19" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const TYPEWRITER_PHRASES = [
  'IA proactiva para restauración de alta gama',
  'Food cost, ocupación y stock en un solo panel',
  'La IA actúa, tú decides',
  'Buena comida, mejor gestión',
]

function useTypewriter(phrases) {
  const [text, setText] = useState('')
  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, timeout
    const tick = () => {
      const phrase = phrases[pi]
      if (!deleting) {
        setText(phrase.substring(0, ci + 1))
        ci++
        if (ci === phrase.length) { deleting = true; timeout = setTimeout(tick, 1800); return }
        timeout = setTimeout(tick, 60)
      } else {
        setText(phrase.substring(0, ci - 1))
        ci--
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; timeout = setTimeout(tick, 400); return }
        timeout = setTimeout(tick, 30)
      }
    }
    tick()
    return () => clearTimeout(timeout)
  }, [phrases])
  return text
}

function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setValue(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

export default function Portada({ onSelectRole }) {
  const typewriter = useTypewriter(TYPEWRITER_PHRASES)
  const counter = useCounter(184)

  return (
    <div id="roleScreen">
      <div className="rs-orb rs-orb-a" aria-hidden="true"></div>
      <div className="rs-orb rs-orb-b" aria-hidden="true"></div>
      <div className="rs-split-line" aria-hidden="true"></div>

      <div className="rs-inner">
        <div className="rs-logo-pill">
          <div className="rs-logo-badge" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1208" strokeWidth="2" strokeLinecap="round">
              <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path d="M7 11h10M7 15h7" />
            </svg>
          </div>
          <div className="rs-logo-name">Good Food</div>
        </div>

        <div className="rs-typewriter">
          <span>{typewriter}</span>
          <span className="rs-tw-cursor">|</span>
        </div>

        <div className="rs-main-logo">
          <span className="rs-mlt-dark">Good</span>{' '}
          <span className="rs-mlt-light">Food</span>{' '}
          <span className="rs-mlt-gold">IA</span>
        </div>
        <div className="rs-main-logo-orn" aria-hidden="true">
          <div className="rs-mol"></div>
          <div className="rs-mod"></div>
          <div className="rs-mol"></div>
        </div>
        <div className="rs-main-logo-sub">Ecosistema IA · Restauración 4ª gen</div>

        <div className="rs-counter-row">
          <div className="rs-counter-dot" aria-hidden="true"></div>
          <div className="rs-counter-txt">
            <span>{counter}</span> pedidos automáticos generados hoy
          </div>
        </div>

        <div className="rs-canales" role="list">
          <div className="rs-canal" role="listitem">
            <div className="rs-canal-ico" style={{ background: '#FF6B2B' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.15 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <span className="rs-canal-lbl" style={{ color: '#FF6B2B' }}>VOZ IA</span>
          </div>
          <div className="rs-canal" role="listitem">
            <div className="rs-canal-ico" style={{ background: '#25D366' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <span className="rs-canal-lbl" style={{ color: '#25D366' }}>WHATSAPP</span>
          </div>
          <div className="rs-canal" role="listitem">
            <div className="rs-canal-ico" style={{ background: '#378ADD' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="rs-canal-lbl" style={{ color: '#378ADD' }}>EMAIL</span>
          </div>
        </div>
        <div className="rs-canales-sub">Good Food IA gestiona todos tus canales</div>

        <div className="rs-cards">
          {ROLES.map((role) => (
            <button
              key={role.id}
              type="button"
              className={`rs-card ${role.cardClass}`}
              onClick={() => onSelectRole(role.id)}
              aria-label={`Acceder como ${role.label}`}
            >
              <div className="rs-pc-ico" aria-hidden="true">{role.icon}</div>
              <div className="rs-pc-desc">{role.desc}</div>
              <div className="rs-pc-name">{role.label}</div>
              <span className="rs-pc-btn">Entrar</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rs-footer">
        <div className="rs-footer-txt">COAXIONIA · Good Food IA</div>
        <div className="rs-footer-dot" aria-hidden="true"></div>
        <div className="rs-footer-txt">Selecciona tu perfil</div>
      </div>
    </div>
  )
}
