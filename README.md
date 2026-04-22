# Good Food IA · React · Fase 2

MVP Fase 2 del producto sectorial GoodFoodIA del ecosistema COAXIONIA.

- Stack: Vite 8 + React 19 (sin router, state machine en `App.jsx`)
- Demo HTML fuente: `demos-coaxionia/goodfood-demo.html`
- Doc maestro: `SISTEMA_FRANQUICIA.md`
- Reglas obligatorias 0-9 (responsive · sin chat reactivo · botones nunca muertos)

## Perfiles · 35 secciones

- **Director** (11): dashboard, ocupación, costes, rentabilidad, carta, alertas, informes, pipeline, simulador, inversor, comunicación
- **Empleado** (10): sala, reservas, preturno, comensal, producción, food cost, merma, alérgenos, tareas, comunicación
- **Cliente** (7): reservar, carta, perfil gastronómico, mis visitas, fidelización, reserva especial, comunicación
- **Proveedor** (7): pedidos, entregas, historial, facturación, valoración, calendario, comunicación

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Estado

Foundation (C1+C2+C3): scaffold + portada + login + AppShell multirol con drawer móvil + REGLA 4 (badge dot rojo). Las 35 secciones se construyen en commits posteriores (C4-C7) usando un Placeholder por defecto.
