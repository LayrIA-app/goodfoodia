/**
 * Card — contenedor blanco con título opcional.
 * Prop `ia` añade el badge "IA" junto al título.
 */
export default function Card({ title, ia, extra, className = '', children }) {
  return (
    <div className={`card ${className}`.trim()}>
      {(title || ia || extra) && (
        <div className="card-title">
          {title && <span className="card-title-text">{title}</span>}
          {ia && <span className="card-title-ia">IA</span>}
          {extra}
        </div>
      )}
      {children}
    </div>
  )
}
