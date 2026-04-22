/**
 * Barra "StratIA LIVE" — dot pulsante + texto.
 * Regla 3: texto con overflow ellipsis para no romper en móvil.
 */
export default function LiveBar({ children }) {
  return (
    <div className="ia-live-bar">
      <span className="ia-live-dot" aria-hidden="true"></span>
      <span className="ia-live-txt">{children}</span>
    </div>
  )
}
