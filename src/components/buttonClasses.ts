export type ButtonVariant = 'filled' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg'

const textBase =
  'inline-flex min-h-11 items-center text-body transition-colors hover:text-secondary'

// DESIGN.md button-filled and button-text. Hover on text uses text-secondary
// (accessibility adaptation of the 0.3 opacity in DESIGN.md).
export const buttonClasses: Record<ButtonVariant, string> = {
  filled:
    'inline-flex items-center rounded-xs bg-body px-3.5 py-2.5 text-body-md text-canvas transition-[background-color,scale] hover:bg-neutral-1 active:scale-95',
  text: `${textBase} text-button-lg`,
}

/** Smaller text-variant link (body-md) for use inside cards. */
export const smallTextButtonClasses = `${textBase} text-body-md`

/**
 * Large filled button: button-lg type on phones, DESIGN.md's button-xl from md.
 * Same colours and states as the filled variant.
 */
export const largeFilledButtonClasses =
  'inline-flex items-center rounded-xs bg-body px-5 py-3 text-button-lg text-canvas transition-[background-color,scale] hover:bg-neutral-1 active:scale-95 md:px-7 md:py-5 md:text-button-xl'
