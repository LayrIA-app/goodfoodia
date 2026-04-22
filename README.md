# Good Food IA · React · Fase 2 (patrón iframe)

MVP Fase 2 del producto sectorial GoodFoodIA del ecosistema COAXIONIA.

Este Fase 2 utiliza el **patrón iframe**: la demo HTML de Fase 1 se sirve sin
modificar dentro de un iframe a pantalla completa. La demo (`public/demo.html`)
es la única fuente de verdad y NO se edita desde React.

- Stack: Vite 8 + React 19 (sólo entrypoint con iframe)
- Demo HTML fuente: `demos-coaxionia/goodfood-demo.html` (Fase 1, ya cumple REGLAS 0-9)
- Doc maestro: `SISTEMA_FRANQUICIA.md`

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173 → muestra la demo en iframe
npm run build
npm run preview
```

## Cómo actualizar la demo

1. Editar la demo HTML en `demos-coaxionia/goodfood-demo.html`.
2. Pasar las verificaciones pre-push (REGLAS 0-9) sobre el HTML.
3. Copiar el HTML actualizado a `public/demo.html` (este repo).
4. Commit y push — Vercel redespliega automáticamente.
