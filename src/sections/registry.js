/**
 * Registry de secciones · Good Food IA · Fase 2
 *
 * Devuelve el componente React asociado a (role, sectionId) o null si la
 * sección aún no está implementada. Cuando devuelve null, AppShell renderiza
 * un placeholder built-in informando que la sección se construye en próximos
 * commits.
 *
 * En commits C4-C7 se irán añadiendo importaciones reales por perfil:
 *   import DashEjec from './director/DashEjec'
 *   const DIRECTOR = { dash: DashEjec, ... }
 */

const DIRECTOR  = {}
const EMPLEADO  = {}
const CLIENTE   = {}
const PROVEEDOR = {}

const REGISTRY_BY_ROLE = {
  director:  DIRECTOR,
  empleado:  EMPLEADO,
  cliente:   CLIENTE,
  proveedor: PROVEEDOR,
}

export function getSectionComponent(role, sectionId) {
  const reg = REGISTRY_BY_ROLE[role]
  if (!reg) return null
  return reg[sectionId] || null
}
