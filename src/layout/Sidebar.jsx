/**
 * Sidebar del AppShell · Good Food IA.
 * Grupos de navegación + footer "Cambiar perfil".
 * REGLA 4: dot terracotta pulsante en Comunicación cuando unread > 0.
 *
 * El bloque "MÓDULOS PREMIUM" se reactivará cuando se construyan secciones
 * (commits C4-C7) y se decida qué módulos premium ofrece cada perfil.
 */
export default function Sidebar({ groups, activeId, unreadComms, onSelectSection, onLogout, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} aria-label="Navegación principal">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="sb-section">{group.title}</div>
          {group.items.map((item) => {
            const isActive = item.id === activeId
            const showCommDot = item.comm && unreadComms > 0 && !isActive
            return (
              <button
                key={item.id}
                type="button"
                className={`sb-btn${isActive ? ' active' : ''}`}
                onClick={() => onSelectSection(item.id)}
              >
                <span className="sb-icon" aria-hidden="true">{item.icon}</span>
                <span className="sb-label">{item.label}</span>
                {item.ia && <span className="sb-ia-badge">IA</span>}
                {showCommDot && (
                  <span className="sb-comm-dot" aria-label="Mensajes sin leer"></span>
                )}
              </button>
            )
          })}
        </div>
      ))}

      <div className="sb-footer">
        <button type="button" className="sb-footer-btn" onClick={onLogout}>
          ↩ Cambiar perfil
        </button>
      </div>
    </aside>
  )
}
