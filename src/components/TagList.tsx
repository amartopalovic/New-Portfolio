type TagListProps = {
  items: readonly string[]
  className?: string
  'aria-label'?: string
}

/**
 * Plain-text list separated by decorative dots (hidden from assistive tech). The
 * dot follows its item, so a wrapped line never starts with a separator.
 */
export function TagList({ items, className, 'aria-label': ariaLabel }: TagListProps) {
  return (
    <ul aria-label={ariaLabel} className={className}>
      {items.map((item, index) => (
        <li key={item}>
          {item}
          {index < items.length - 1 && (
            <span aria-hidden="true" className="ml-2">
              ·
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
