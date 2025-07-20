declare module 'canvas-confetti' {
  const confetti: {
    (options: any): void
    create: (canvas: HTMLCanvasElement, opts?: any) => (options: any) => void
  }
  export default confetti
}
