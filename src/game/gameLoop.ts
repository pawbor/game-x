export interface GameLoopContext {
  startTime: number;
  prevFrameTime: number;
  frameTime: number;
  elapsedTime: number;
  framesTimeDiff: number;
}

export type GameFrameRenderer = (props: GameLoopContext) => void;

export function gameLoop(renderGameFrame: GameFrameRenderer) {
  let startTime = 0;
  let prevFrameTime = 0;

  requestAnimationFrame((time) => {
    startTime = time;
    prevFrameTime = time;
    render(time);
  });

  function render(time: number) {
    const elapsedTime = time - startTime;
    const framesTimeDiff = time - prevFrameTime;
    prevFrameTime = time;
    renderGameFrame({
      startTime,
      prevFrameTime,
      frameTime: time,
      elapsedTime,
      framesTimeDiff,
    });
    requestAnimationFrame(render);
  }
}
