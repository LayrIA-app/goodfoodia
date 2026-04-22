/**
 * Good Food IA · Fase 2 · patrón iframe
 *
 * El producto Fase 2 sirve la demo HTML de Fase 1 sin tocarla, dentro de un
 * iframe a pantalla completa. La demo (`public/demo.html`) es la fuente de
 * verdad y NO se modifica desde React. Cualquier cambio del producto se hace
 * sobre la demo HTML, se copia a `public/demo.html` y se redespliega.
 */
export default function App() {
  return (
    <iframe
      src="/demo.html"
      title="Good Food IA · demo"
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
    />
  )
}
