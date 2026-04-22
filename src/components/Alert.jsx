/**
 * Alert — notificación inline (red/amber/green/blue).
 */
export default function Alert({ type = 'blue', icon = 'ℹ️', title, sub }) {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon" aria-hidden="true">{icon}</div>
      <div className="alert-body">
        <div className="alert-title">{title}</div>
        {sub && <div className="alert-sub">{sub}</div>}
      </div>
    </div>
  )
}
