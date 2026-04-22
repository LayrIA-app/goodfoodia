import Badge from './Badge'

/**
 * Encabezado de sección: título + badge + subtítulo + opcional pill
 * "EXCLUSIVO COAXIONIA" debajo.
 */
export default function PageHdr({ title, badgeVariant = 'blue', badgeText, subtitle, exclusivo, exclusivoDesc }) {
  return (
    <>
      <div className="page-hdr">
        <div className="page-hdr-line">
          <h2>{title}</h2>
          {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
        </div>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {exclusivo && (
        <div className="exclusivo-row">
          <span className="exclusivo-coax-pill">★ EXCLUSIVO COAXIONIA</span>
          {exclusivoDesc && <span className="exclusivo-desc">: {exclusivoDesc}</span>}
        </div>
      )}
    </>
  )
}
