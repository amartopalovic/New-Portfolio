import type { ImageAsset } from '../data/image'

type ImageRatio = 'screenshot' | 'portrait'

const ratioClasses: Record<ImageRatio, string> = {
  screenshot: 'aspect-screenshot',
  portrait: 'aspect-portrait',
}

const defaultLabels: Record<ImageRatio, string> = {
  screenshot: 'Screenshot placeholder',
  portrait: 'Photo placeholder',
}

type ImageSlotProps = {
  image?: ImageAsset
  /** Reserved box shape: 16:9 screenshot (default) or 4:5 portrait. */
  ratio?: ImageRatio
  /** Placeholder text when no image is set. */
  label?: string
  /** Above-the-fold image: load eagerly with high fetch priority. Everything else stays lazy. */
  priority?: boolean
  className?: string
}

/** Fixed-ratio box so images never cause layout shift while loading. */
export function ImageSlot({
  image,
  ratio = 'screenshot',
  label,
  priority = false,
  className = '',
}: ImageSlotProps) {
  return (
    <div className={`relative overflow-hidden bg-border ${ratioClasses[ratio]} ${className}`.trim()}>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        // TEMPORARY: placeholder until real images are added.
        <div aria-hidden="true" className="flex size-full items-center justify-center">
          <span className="text-body-sm text-secondary">{label ?? defaultLabels[ratio]}</span>
        </div>
      )}
    </div>
  )
}
