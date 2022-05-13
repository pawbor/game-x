import { createFpsCounter, renderFps } from './fps';
import { gameLoop } from './gameLoop';
import { listenKeyboard } from './keyboard';
import { createWorld } from './world/behavior';
import { World } from './world/models';
import { renderWorld } from './world/rendering';

export function runGame(parent: HTMLElement) {
  const canvas = document.createElement('canvas');
  parent.append(canvas);

  const observer = new ResizeObserver((els) => {
    canvas.width = els[0]?.borderBoxSize[0]?.inlineSize ?? 0;
    canvas.height = els[0]?.borderBoxSize[0]?.blockSize ?? 0;
  });
  observer.observe(parent);

  const canvasCtx = canvas.getContext('2d');
  if (!canvasCtx) {
    throw new Error('Canvas not supported');
  }

  const world = createWorld();
  const pauseController = createPauseController();
  const fpsCounter = createFpsCounter();
  let firstLoop = true;

  gameLoop(() => {
    if (firstLoop) {
      firstLoop = false;
      world.clock.start();
    }

    world.clock.tick();
    pauseController.update({ world });
    fpsCounter.capture();

    renderWorld({
      canvasCtx,
      world,
    });
    renderFps({ canvasCtx, fps: fpsCounter.fps() });
  });
}

function createPauseController() {
  const keyboardState = listenKeyboard();
  let debounceStart = -1;

  return {
    update(props: { world: World }) {
      const { world } = props;

      if (testDebounce() && keyboardState.pressedKeys['Escape']) {
        world.clock.toggle();
        debounceStart = performance.now();
      }
    },
  };

  function testDebounce(): boolean {
    if (debounceStart < 0) return true;

    const now = performance.now();
    const diff = now - debounceStart;
    return diff > 500;
  }
}
