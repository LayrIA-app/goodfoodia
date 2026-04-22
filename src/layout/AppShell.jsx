import { useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import AlertsModal from './AlertsModal'
import PushNotif from './PushNotif'
import LockedModal from '../components/LockedModal'
import { NAV_BY_ROLE, firstSectionId, findSection } from './nav'
import { getSectionComponent } from '../sections/registry'
import './AppShell.css'

/**
 * AppShell — shell multirol común (REGLA 8) · Good Food IA.
 * - Topbar (REGLA 5) con hamburguesa móvil, campana y avatar.
 * - Sidebar con grupos de navegación + REGLA 4 (dot Comunicación).
 * - AlertsModal al pulsar la campana.
 * - PushNotif (IA proactiva cada 38s · REGLA 0).
 * - LockedModal preparado para futuros módulos premium.
 */
export default function AppShell({ user, onLogout }) {
  const { role } = user
  const groups = NAV_BY_ROLE[role] || []

  const [activeId, setActiveId] = useState(() => firstSectionId(role))
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [unreadComms, setUnreadComms] = useState(3)
  const [unreadAlerts, setUnreadAlerts] = useState(4)
  const [alertsOpen, setAlertsOpen] = useState(false)
  const [premiumModule, setPremiumModule] = useState(null)
  const [toast, setToast] = useState(null)

  const activeSection = findSection(role, activeId)
  const SectionComponent = getSectionComponent(role, activeId)

  const handleSelect = (id) => {
    const section = findSection(role, id)
    setActiveId(id)
    setSidebarOpen(false)
    if (section?.comm) setUnreadComms(0)
  }

  const handleOpenAlerts = () => {
    setAlertsOpen(true)
    setUnreadAlerts(0)
  }

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2600)
  }

  return (
    <div id="appShell">
      <Topbar
        user={user}
        unreadAlerts={unreadAlerts}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        onOpenAlerts={handleOpenAlerts}
      />

      <div className="shell-body">
        <Sidebar
          groups={groups}
          activeId={activeId}
          unreadComms={unreadComms}
          onSelectSection={handleSelect}
          onLogout={onLogout}
          isOpen={sidebarOpen}
        />

        {sidebarOpen && (
          <div
            className="sb-overlay"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        <main className="content">
          {SectionComponent ? (
            <SectionComponent onAction={showToast} user={user} sectionLabel={activeSection?.label} />
          ) : (
            <>
              <div className="page-hdr">
                <div className="page-hdr-line">
                  <h2>{activeSection?.label || 'Sección'}</h2>
                  {activeSection?.ia && <span className="badge b-gold">IA activa</span>}
                </div>
                <p>Bienvenido/a, <strong>{user.name}</strong> · {user.roleLabel}</p>
              </div>
              <div className="section-placeholder">
                <div className="sp-ico" aria-hidden="true">🍽️</div>
                <div className="sp-title">Sección "{activeSection?.label}" en construcción</div>
                <div className="sp-sub">
                  El AppShell ya funciona. El contenido real de esta sección
                  se construye en los próximos commits de Fase 2 (C4-C7).
                </div>
                <button
                  type="button"
                  className="sp-cta"
                  onClick={() => showToast(`Sección "${activeSection?.label}" · pendiente de construir.`)}
                >
                  Notificar cuando esté lista
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      <AlertsModal
        role={role}
        open={alertsOpen}
        onClose={() => setAlertsOpen(false)}
      />

      <LockedModal
        moduleId={premiumModule}
        onClose={() => setPremiumModule(null)}
        onUnlock={(title) => showToast(`Módulo "${title}" · activación pendiente.`)}
      />

      <PushNotif role={role} />

      {toast && <div className="shell-toast" role="status">{toast}</div>}
    </div>
  )
}
