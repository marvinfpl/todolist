declare module "canvas-confetti" {
  export interface CanvasConfettiOptions {
    angle?: number
    spread?: number
    startVelocity?: number
    decay?: number
    gravity?: number
    drift?: number
    ticks?: number
    x?: number
    y?: number
    origin?: {
      x?: number
      y?: number
    }
    particleCount?: number
    colors?: string[]
    shapes?: Array<"square" | "circle" | string>
    scalar?: number
    disableForReducedMotion?: boolean
    [key: string]: unknown
  }

  function confetti(options?: CanvasConfettiOptions): boolean | void

  namespace confetti {
    function create(canvas: HTMLCanvasElement | OffscreenCanvas, options?: object): typeof confetti
    function reset(): void
    function shapeFromPath(path: string[], options?: object): unknown
    function shapeFromText(text: string, options?: object): unknown
  }

  export default confetti
}
