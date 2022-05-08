interface GameFrameProps {
  loopDuration: number;
  framesDiff: number;
}

type GameFrameRenderer = (props: GameFrameProps) => void;

export function gameLoop(renderGameFrame: GameFrameRenderer) {
  let startTime = 0;
  let previousFrameTime = 0;

  requestAnimationFrame((time) => {
    startTime = time;
    previousFrameTime = time;
    render(time);
  });

  function render(time: number) {
    const loopDuration = time - startTime;
    const framesDiff = time - previousFrameTime;
    previousFrameTime = time;
    renderGameFrame({ loopDuration, framesDiff });
    requestAnimationFrame(render);
  }
}
