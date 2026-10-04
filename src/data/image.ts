/** A local image with its intrinsic size, so slots can reserve space before it loads. */
export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}
