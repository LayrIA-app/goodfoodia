/**
 * Topbar del AppShell · Good Food IA.
 * Regla 5: en móvil (≤768), hamburguesa visible, textos secundarios ocultos,
 * altura 56px. Solo avatar + campana a la derecha.
 */
export default function Topbar({ user, unreadAlerts, onToggleSidebar, onOpenAlerts }) {
  const initials = (user?.name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()

  return (
    <header className="topbar">
      <button
        type="button"
        className="ham-btn"
        onClick={onToggleSidebar}
        aria-label="Abrir menú"
      >
        <span></span><span></span><span></span>
      </button>

      <div className="topbar-logo">Good Food <span>IA</span></div>
      <div className="topbar-role">{user?.roleLabel || ''}</div>

      <div className="topbar-badge" role="status">IA · LIVE</div>

      <div className="topbar-right">
        <button
          type="button"
          className="topbar-icon-btn"
          onClick={onOpenAlerts}
          aria-label="Ver alertas"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          {unreadAlerts > 0 && <span className="topbar-bell-badge">{unreadAlerts}</span>}
        </button>

        <div className="topbar-user" aria-label={user?.name}>
          <div className="topbar-avatar">{initials || 'GF'}</div>
          <div className="topbar-user-name">{user?.name?.split(' ')[0] || ''}</div>
        </div>
      </div>
    </header>
  )
}
