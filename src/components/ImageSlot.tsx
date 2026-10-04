import type { ProjectImage } from '../data/projects'

type ImageSlotProps = {
  image?: ProjectImage
  className?: string
}

/** Fixed-ratio box so screenshots never cause layout shift while loading. */
export function ImageSlot({ image, className = '' }: ImageSlotProps) {
  return (
    <div className={`relative aspect-screenshot overflow-hidden bg-border ${className}`.trim()}>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        // TEMPORARY: placeholder until real screenshots are added.
        <div aria-hidden="true" className="flex size-full items-center justify-center">
          <span className="text-body-sm text-secondary">Screenshot placeholder</span>
        </div>
      )}
    </div>
  )
}
