/**
 * Progress bar con label arriba (opcional sub a la derecha).
 * gradient: string CSS para el fill (default oro Good Food).
 */
export default function Pbar({ label, sub, pct, gradient = 'linear-gradient(90deg, var(--gold), var(--terra))' }) {
  return (
    <div className="pbar-wrap">
      {(label || sub) && (
        <div className="pbar-hdr">
          <span className="pbar-lbl">{label}</span>
          {sub && <span className="pbar-sub">{sub}</span>}
        </div>
      )}
      <div className="pbar">
        <div className="pbar-fill" style={{ width: typeof pct === 'number' ? `${pct}%` : pct, background: gradient }}></div>
      </div>
    </div>
  )
}
