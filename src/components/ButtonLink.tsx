import type { ReactNode } from 'react'
import { Link } from 'react-router'
import {
  buttonClasses,
  smallTextButtonClasses,
  type ButtonSize,
  type ButtonVariant,
} from './buttonClasses'

type ButtonLinkProps = {
  to: string
  variant?: ButtonVariant
  /** "sm" renders the text variant at body-md size (ignored for filled). */
  size?: ButtonSize
  children: ReactNode
  /** Extra visually hidden text appended to the accessible name. */
  srLabel?: string
  /** Render a plain <a> with the download attribute (for files in public/). */
  download?: boolean
  className?: string
  onClick?: () => void
}

export function ButtonLink({
  to,
  variant = 'filled',
  size = 'md',
  children,
  srLabel,
  download = false,
  className = '',
  onClick,
}: ButtonLinkProps) {
  const base =
    variant === 'text' && size === 'sm' ? smallTextButtonClasses : buttonClasses[variant]
  const classes = `${base} ${className}`.trim()
  const isExternal = /^[a-z][a-z\d+.-]*:/i.test(to)
  const hiddenLabel = srLabel && <span className="sr-only"> {srLabel}</span>

  if (download) {
    return (
      <a href={to} download className={classes} onClick={onClick}>
        {children}
        {hiddenLabel}
      </a>
    )
  }

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
        {hiddenLabel}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
      {hiddenLabel}
    </Link>
  )
}
