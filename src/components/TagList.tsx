type TagListProps = {
  items: readonly string[]
  className?: string
  'aria-label'?: string
}

/** Plain-text list separated by decorative dots (hidden from assistive tech). */
export function TagList({ items, className, 'aria-label': ariaLabel }: TagListProps) {
  return (
    <ul aria-label={ariaLabel} className={className}>
      {items.map((item, index) => (
        <li key={item}>
          {index > 0 && (
            <span aria-hidden="true" className="mr-2">
              ·
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  )
}
