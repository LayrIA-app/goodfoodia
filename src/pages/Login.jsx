import { useState } from 'react'
import './Login.css'

const ROLE_CONFIG = {
  director: {
    pill: '📊 Director / Propietario',
    h1Prefix: 'Panel de',
    h1Em: 'Dirección',
    sub: 'P&L en tiempo real, ocupación predictiva, control de costes y alertas IA autónomas.',
    feats: [
      'Pedidos automáticos antes de rotura de stock',
      'Predicción de ocupación con +94% precisión',
      'Food cost por plato — alertas en vivo',
      'Modo Inversor con proyecciones a 12 meses',
    ],
    email: 'director@goodfood.com',
    role: 'Director / Propietario',
    titleRole: 'Director',
    name: 'Miguel Ruiz',
  },
  empleado: {
    pill: '🍴 Empleado · Sala / Cocina',
    h1Prefix: 'Mi Turno',
    h1Em: 'Hoy',
    sub: 'La IA distribuye sala, anticipa pedidos y avisa cuando algo cambia.',
    feats: [
      'Mapa de mesas en tiempo real',
      'Comandas, alergias y notas IA por mesa',
      'Tareas del turno priorizadas',
      'Comunicación directa con cocina y dirección',
    ],
    email: 'empleado@goodfood.com',
    role: 'Empleado',
    titleRole: 'Empleado',
    name: 'Carlos Martín',
  },
  cliente: {
    pill: '🍽 Cliente · Comensal',
    h1Prefix: 'Mi Mesa,',
    h1Em: 'Tu Sitio',
    sub: '"Reserva en lenguaje natural, carta personalizada y recordatorios proactivos."',
    feats: [
      'Reserva inteligente en segundos',
      'Carta filtrada por alérgenos y preferencias',
      'Maridajes y recomendaciones personalizadas',
      'Programa de fidelización IA',
    ],
    email: 'cliente@goodfood.com',
    role: 'Cliente',
    titleRole: 'Cliente',
    name: 'Laura García',
  },
  proveedor: {
    pill: '🚚 Proveedor',
    h1Prefix: 'Pedidos &',
    h1Em: 'Entregas',
    sub: 'Visibilidad total de tus pedidos, valoración semanal IA y previsión a 30 días.',
    feats: [
      'Pedidos generados automáticamente por la IA',
      'Score de valoración semanal en vivo',
      'Calendario de entregas y cobros',
      'Calibrado y calidad medidos por la IA',
    ],
    email: 'proveedor@goodfood.com',
    role: 'Proveedor',
    titleRole: 'Proveedor',
    name: 'Carnes Ibáñez S.L.',
  },
}

const KPIS_LOGIN = {
  director: [
    { v: '65%', l: 'Margen bruto' },
    { v: '+12%', l: 'Ingresos vs ayer' },
    { v: '94%', l: 'Ocup. cena prevista' },
  ],
  empleado: [
    { v: '42', l: 'Cubiertos turno' },
    { v: '8', l: 'Mesas activas' },
    { v: '2', l: 'Alergias activas' },
  ],
  cliente: [
    { v: '7', l: 'Visitas registradas' },
    { v: '4.9★', l: 'Tu valoración' },
    { v: '120€', l: 'Ahorro fidelización' },
  ],
  proveedor: [
    { v: '9,1/10', l: 'Score semanal IA' },
    { v: '100%', l: 'Puntualidad mes' },
    { v: '3', l: 'Pedidos activos' },
  ],
}

export default function Login({ role, onLogin, onBack }) {
  const cfg = ROLE_CONFIG[role]
  const kpis = KPIS_LOGIN[role]
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!cfg) return null

  const handleSubmit = (e) => {
    e?.preventDefault?.()
    onLogin({ role, name: cfg.name, roleLabel: cfg.role })
  }

  return (
    <div id="loginScreen">
      <div className="login-wrap">
        <div className="login-left">
          <div className="ll-pattern" aria-hidden="true"></div>
          <div className="ll-inner">
            <div className="ll-logo">
              <div className="ll-logo-name">Good Food</div>
            </div>
            <div className="ll-role-pill">{cfg.pill}</div>
            <h1>
              {cfg.h1Prefix}<br />
              <em>{cfg.h1Em}</em>
            </h1>
            {cfg.sub && <p>{cfg.sub}</p>}
            <div className="ll-feats">
              {cfg.feats.map((feat) => (
                <div className="ll-feat" key={feat}>
                  <div className="ll-feat-bar" aria-hidden="true"></div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ll-brand">COAXIONIA · Good Food IA</div>
        </div>

        <form className="login-right" onSubmit={handleSubmit}>
          <div className="lr-eyebrow">Acceso seguro</div>
          <div className="lr-badge">
            <div className="lr-badge-dot" aria-hidden="true"></div>
            <div className="lr-badge-txt">IA Live · 4ª Generación</div>
          </div>
          <div className="lr-title">Acceder · <span>{cfg.titleRole}</span></div>
          <div className="lr-divider" aria-hidden="true"></div>

          <label className="lf-label" htmlFor="lf-email">Correo electrónico</label>
          <input
            id="lf-email"
            className="lf-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={cfg.email}
            autoComplete="email"
          />

          <label className="lf-label" htmlFor="lf-password">Contraseña</label>
          <input
            id="lf-password"
            className="lf-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />

          <button type="submit" className="login-btn" onClick={handleSubmit}>Acceder</button>

          <div className="ll-kpis-cont">
            {kpis.map((k) => (
              <div className="ll-kpi" key={k.l}>
                <div className="ll-kpi-val">{k.v}</div>
                <div className="ll-kpi-lbl">{k.l}</div>
              </div>
            ))}
          </div>

          <button type="button" className="back-link" onClick={onBack}>
            ← Cambiar perfil
          </button>
        </form>
      </div>
    </div>
  )
}
