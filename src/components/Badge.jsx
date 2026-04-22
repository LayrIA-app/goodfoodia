/**
 * Badge — pill de estado con texto corto.
 * Regla 3: defensivo contra overflow (maxWidth, ellipsis).
 *
 * variant: 'blue' | 'red' | 'ok' | 'amber' | 'navy' | 'cyan' | 'purple'
 */
const VARIANT_CLASS = {
  blue:   'b-blue',
  red:    'b-red',
  ok:     'b-ok',
  amber:  'b-amber',
  navy:   'b-navy',
  cyan:   'b-cyan',
  purple: 'b-purple',
}

export default function Badge({ variant = 'blue', children, className = '' }) {
  const cls = VARIANT_CLASS[variant] || 'b-blue'
  return <span className={`badge ${cls} ${className}`.trim()}>{children}</span>
}
