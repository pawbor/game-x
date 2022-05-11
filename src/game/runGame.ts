import * as mCamera from './camera';
import { createFpsCounter } from './fps';
import { gameLoop } from './gameLoop';
import { listenKeyboard } from './keyboard';
import { loadMapData } from './loadMapData';
import { movePlayer } from './player';
import { renderWorld } from './world';

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
  const { player, boundaries, grass, enemies, staticObjects } = loadMapData();
  const fpsCounter = createFpsCounter();

  gameLoop((loopCtx) => {
    fpsCounter.capture();
    movePlayer({
      player,
      keyboardState,
      loopCtx,
      obstacles: [
        ...enemies.map((x) => x.hitBox),
        ...boundaries.map((x) => x.hitBox),
        ...grass.map((x) => x.hitBox),
        ...staticObjects.map((x) => x.hitBox),
      ],
    });
    mCamera.followPlayer({ player, camera });
    renderWorld({
      camera,
      canvasCtx,
      fpsCounter,
      world: { player, boundaries, enemies, grass, staticObjects },
    });
  });
}
