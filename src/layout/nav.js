/**
 * Navegación de sidebar por rol · Good Food IA · Fase 2.
 * Fiel al sidebar de la demo HTML (35 secciones · 4 perfiles).
 *
 * Cada item:
 *   id:    identificador único de sección
 *   label: texto visible en sidebar
 *   icon:  emoji
 *   ia:    true si muestra badge IA
 *   comm:  true si es la sección Comunicación (Regla 4: badge mensajes sin leer)
 */

export const NAV_DIRECTOR = [
  {
    title: 'Operativo',
    items: [
      { id: 'dash',         label: 'Dashboard ejecutivo', icon: '📊', ia: true },
      { id: 'ocupacion',    label: 'Ocupación predictiva', icon: '📅', ia: true },
      { id: 'costes',       label: 'Costes & food cost',   icon: '💰', ia: true },
      { id: 'rentabilidad', label: 'Rentabilidad por plato', icon: '🍽', ia: true },
    ],
  },
  {
    title: 'Inteligencia IA',
    items: [
      { id: 'carta',     label: 'Carta inteligente',  icon: '📖', ia: true },
      { id: 'alertas',   label: 'Alertas autónomas',  icon: '⚡', ia: true },
      { id: 'informes',  label: 'Informes ejecutivos', icon: '📈', ia: true },
      { id: 'pipeline',  label: 'Pipeline reservas',   icon: '📋', ia: true },
      { id: 'simulador', label: 'Simulador escenarios', icon: '🎛', ia: true },
      { id: 'inversor',  label: 'Modo Inversor',       icon: '💼', ia: true },
      { id: 'd-chat',    label: 'Comunicación',        icon: '💬', ia: true, comm: true },
    ],
  },
]

export const NAV_EMPLEADO = [
  {
    title: 'Mi turno',
    items: [
      { id: 'sala',       label: 'Mapa de sala',        icon: '🗺', ia: true },
      { id: 'reservas',   label: 'Reservas del turno',  icon: '📅', ia: true },
      { id: 'preturno',   label: 'Briefing pre-turno',  icon: '📋', ia: true },
      { id: 'comensal',   label: 'Ficha comensal IA',   icon: '👤', ia: true },
    ],
  },
  {
    title: 'Cocina y stock',
    items: [
      { id: 'produccion', label: 'Producción cocina',   icon: '👨‍🍳', ia: true },
      { id: 'foodcost',   label: 'Food cost en vivo',   icon: '💰', ia: true },
      { id: 'merma',      label: 'Control de merma',    icon: '♻', ia: true },
      { id: 'alergenos',  label: 'Alérgenos del turno', icon: '⚠', ia: true },
    ],
  },
  {
    title: 'Operativa',
    items: [
      { id: 'tareas',         label: 'Mis tareas del turno', icon: '✅', ia: true },
      { id: 'e-comunicacion', label: 'Comunicación',         icon: '💬', ia: true, comm: true },
    ],
  },
]

export const NAV_CLIENTE = [
  {
    title: 'Mi experiencia',
    items: [
      { id: 'reserva',     label: 'Reservar con IA',      icon: '📅', ia: true },
      { id: 'carta',       label: 'Carta digital',        icon: '🍽', ia: true },
      { id: 'perfil',      label: 'Perfil gastronómico',  icon: '👤' },
      { id: 'historial',   label: 'Mis visitas',          icon: '⏱' },
    ],
  },
  {
    title: 'Programa fidelización',
    items: [
      { id: 'fidelizacion',  label: 'Fidelización IA',    icon: '⭐', ia: true },
      { id: 'especial',      label: 'Reserva especial',   icon: '✨', ia: true },
      { id: 'c-comunicacion', label: 'Comunicación',      icon: '💬', ia: true, comm: true },
    ],
  },
]

export const NAV_PROVEEDOR = [
  {
    title: 'Mis pedidos',
    items: [
      { id: 'pedidos',     label: 'Pedidos activos',     icon: '📦', ia: true },
      { id: 'entregas',    label: 'Estado entregas',     icon: '🚚' },
      { id: 'historial',   label: 'Historial pedidos',   icon: '⏱' },
    ],
  },
  {
    title: 'Negocio',
    items: [
      { id: 'facturacion', label: 'Facturación',         icon: '🧾', ia: true },
      { id: 'valoracion',  label: 'Mi valoración IA',    icon: '⭐', ia: true },
      { id: 'calendario',  label: 'Entregas y cobros IA', icon: '📅', ia: true },
      { id: 'p-comunicacion', label: 'Comunicación',     icon: '💬', comm: true },
    ],
  },
]

export const NAV_BY_ROLE = {
  director:  NAV_DIRECTOR,
  empleado:  NAV_EMPLEADO,
  cliente:   NAV_CLIENTE,
  proveedor: NAV_PROVEEDOR,
}

/** Roles que muestran el bloque "MÓDULOS PREMIUM" al final del sidebar.
 * Vacío en foundation — se decide perfil a perfil al construir secciones C4-C7. */
export const PREMIUM_ROLES = new Set()

/** Devuelve el id de la primera sección del rol (por defecto al entrar). */
export function firstSectionId(role) {
  const groups = NAV_BY_ROLE[role]
  if (!groups || !groups.length) return null
  return groups[0].items[0]?.id ?? null
}

/** Devuelve el item de una sección dado role + id. */
export function findSection(role, id) {
  const groups = NAV_BY_ROLE[role] || []
  for (const g of groups) {
    const item = g.items.find((it) => it.id === id)
    if (item) return item
  }
  return null
}
