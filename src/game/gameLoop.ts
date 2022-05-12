export interface GameLoopContext {
  startTime: number;
  prevFrameTime: number;
  frameTime: number;
  elapsedTime: number;
  framesTimeDiff: number;
}

export type GameFrameRenderer = () => void;

export function gameLoop(renderGameFrame: GameFrameRenderer) {
  requestAnimationFrame(() => {
    render();
  });

  function render() {
    renderGameFrame();

    requestAnimationFrame(render);
  }
}
