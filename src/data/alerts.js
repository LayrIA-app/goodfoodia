/**
 * Alertas IA proactivas + Push notifications · Good Food IA · Fase 2.
 * Datos del sector restauración alta gama, fieles a la demo HTML.
 */

export const ALERTS = {
  director: [
    { tipo: 'red',   sec: 'Food cost', txt: '<b>Lubina +1,4% sobre objetivo</b> · IA detectó merma anómala en turno almuerzo. Ajuste de carta activo.' },
    { tipo: 'amber', sec: 'Stock',     txt: 'Solomillo bajo · pedido <b>#GF-2025-089</b> generado a Carnes Ibáñez · entrega mañana 10:00.' },
    { tipo: 'amber', sec: 'Reservas',  txt: 'Mesa 8 · riesgo no-show alto · <b>reconfirmación enviada por WhatsApp</b>.' },
    { tipo: 'green', sec: 'Ingresos',  txt: 'Objetivo cena 4.800€ superado · <b>4.892€</b> con 92% ocupación.' },
  ],
  empleado: [
    { tipo: 'red',   sec: 'Alergia',  txt: 'Mesa 5 · <b>gluten + frutos secos</b> activos · cocina notificada automáticamente.' },
    { tipo: 'amber', sec: 'Cocina',   txt: 'Comanda mesa 3 lista · <b>2 platos</b> · sala avisada.' },
    { tipo: 'green', sec: 'Turno',    txt: 'Director confirmó camarero extra · turno cena <b>20:30</b>.' },
    { tipo: 'blue',  sec: 'Cliente',  txt: 'Mesa 8 espera respuesta · solicita cambio de mesa.' },
  ],
  cliente: [
    { tipo: 'green', sec: 'Reserva',     txt: 'Tu reserva del <b>sábado 21:00</b> confirmada · Mesa 6 · sin gluten.' },
    { tipo: 'blue',  sec: 'Carta',       txt: 'Nueva selección de vinos <b>Ribera del Duero</b> · maridaje propuesto para tu chuletón.' },
    { tipo: 'amber', sec: 'Recordatorio', txt: 'Tu visita es <b>mañana</b> · ¿confirmas?' },
  ],
  proveedor: [
    { tipo: 'green', sec: 'Pedido',     txt: 'Pedido <b>#GF-089</b> confirmado · entrega mañana 10:00 · solomillo 8kg.' },
    { tipo: 'amber', sec: 'Stock IA',   txt: 'Stock lubina bajo en restaurante · pedido automático generado <b>#GF-2025-090</b>.' },
    { tipo: 'green', sec: 'Valoración', txt: 'Tu score semanal: <b>9,1/10</b> · puntualidad 100%.' },
  ],
}

/**
 * Push notifications IA proactiva — bottom-right cada 38s, dura 8s.
 * Patrón obligatorio Regla 0: la IA comunica acciones EN PASADO ("ya hizo X").
 */
export const PUSH_IA = {
  director: [
    { icon: '📦', txt: 'Pedido automático generado · solomillo · Carnes Ibáñez · 8kg.' },
    { icon: '🔴', txt: 'Food cost lubina +1,4% · ajuste carta activo en cena.' },
    { icon: '📅', txt: 'Mesa 8 · riesgo no-show · reconfirmación enviada por WhatsApp.' },
    { icon: '📈', txt: 'Ticker en vivo · 4.892€ acumulados · superas objetivo cena.' },
    { icon: '🎯', txt: 'IA reasignó camarero extra · cena 20:30 · ocupación 94%.' },
  ],
  empleado: [
    { icon: '⚠', txt: 'Mesa 5 · alergia gluten + frutos secos · chef notificado.' },
    { icon: '🍽', txt: 'Comanda mesa 3 lista · 2 platos · pasa a sala.' },
    { icon: '💬', txt: 'Director confirmó camarero extra · turno cena 20:30.' },
    { icon: '📋', txt: 'Mesa 8 espera respuesta · cambio de mesa solicitado.' },
  ],
  cliente: [
    { icon: '✅', txt: 'Reserva confirmada · Mesa 6 · sábado 21:00.' },
    { icon: '🍷', txt: 'Maridaje propuesto · Ribera del Duero · sin coste extra.' },
    { icon: '⭐', txt: 'Llevas 7 visitas · próxima invitación incluye postre.' },
  ],
  proveedor: [
    { icon: '✅', txt: 'Pedido #GF-089 confirmado · entrega mañana 10:00.' },
    { icon: '📊', txt: 'Score semanal 9,1/10 · puntualidad 100% · sin incidencias.' },
    { icon: '🔄', txt: 'Próximo pedido estimado lunes · solomillo + lubina calibrada.' },
  ],
}
