export function createFpsCounter() {
  let frames = 0;
  let start: number | undefined;
  let fps = 0;
  return {
    fps() {
      return fps;
    },
    capture() {
      frames += 1;
      const now = performance.now();
      if (!start) {
        start = now;
        return;
      }

      const diff = now - start;
      if (diff === 0) return;

      fps = (frames * 1000) / diff;

      if (diff > 1000) {
        start = now;
        frames = 0;
      }
    },
  };
}

export type FpsCounter = ReturnType<typeof createFpsCounter>;
