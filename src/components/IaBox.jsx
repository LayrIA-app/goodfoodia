/**
 * Caja de insight IA proactivo.
 * Icono + texto (el texto puede ser string o nodos JSX con <strong/>).
 */
export default function IaBox({ icon = '✨', children }) {
  return (
    <div className="ia-box">
      <div className="ia-box-icon" aria-hidden="true">{icon}</div>
      <div className="ia-box-text">{children}</div>
    </div>
  )
}
