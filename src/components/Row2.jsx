/**
 * Fila de dos columnas: label a la izquierda, valor a la derecha.
 */
export default function Row2({ label, value, valueColor }) {
  return (
    <div className="row2">
      <span className="row2-lbl">{label}</span>
      <span className="row2-val" style={valueColor ? { color: valueColor } : undefined}>{value}</span>
    </div>
  )
}
