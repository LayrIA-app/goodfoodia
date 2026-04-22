/**
 * KPI card con valor grande, label y delta opcional.
 * Regla 3: defensivo — valor con overflow-wrap para no desbordar en móvil.
 *
 * dir: 'up' (verde) | 'down' (rojo) | 'neutral' (texto2)
 */
export default function Kpi({ value, label, delta, dir = 'neutral' }) {
  return (
    <div className="kpi">
      <div className="kpi-accent" aria-hidden="true"></div>
      <div className="kpi-val">{value}</div>
      <div className="kpi-label">{label}</div>
      {delta && <div className={`kpi-delta ${dir}`}>{delta}</div>}
    </div>
  )
}
