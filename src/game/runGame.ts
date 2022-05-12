import * as mCamera from './camera';
import { createFpsCounter, renderFps } from './fps';
import { gameLoop } from './gameLoop';
import { listenKeyboard } from './keyboard';
import { executePlayerBehavior } from './player/behavior';
import { renderWorld } from './world/rendering';
import { loadWorld } from './world/initialization';
import { createClock } from './clock/createClock';

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
  const keyboardState = listenKeyboard();
  const camera = mCamera.create();
  const world = loadWorld();
  const fpsCounter = createFpsCounter();
  const worldClock = createClock();
  let firstLoop = true;

  gameLoop(() => {
    if (firstLoop) {
      firstLoop = false;
      worldClock.start();
    }
    worldClock.tick();
    fpsCounter.capture();

    executePlayerBehavior({
      world,
      worldClock,
      keyboardState,
    });

    mCamera.followPlayer({ player: world.player, camera });

    renderWorld({
      camera,
      canvasCtx,
      fpsCounter,
      world,
    });
    renderFps({ canvasCtx, fps: fpsCounter.fps() });
  });
}
