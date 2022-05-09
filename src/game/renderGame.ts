import * as mCamera from './camera';
import { initCharacters } from './characters';
import { createFpsCounter } from './fps';
import { gameLoop } from './gameLoop';
import { initGrass, renderGrass } from './grass';
import { initBoundaries, renderGround } from './ground';
import { keyboard } from './keyboard';
import { movePlayer, renderPlayer } from './player';

export function renderGame(parent: HTMLElement) {
  const canvas = document.createElement('canvas');
  parent.append(canvas);

  const observer = new ResizeObserver((els) => {
    canvas.width = els[0].borderBoxSize[0].inlineSize;
    canvas.height = els[0].borderBoxSize[0].blockSize;
  });
  observer.observe(parent);

  const canvasCtx = canvas.getContext('2d');
  if (!canvasCtx) {
    throw new Error('Canvas not supported');
  }
  const { pressedKeys } = keyboard();
  const camera = mCamera.create();
  const { player } = initCharacters();
  const { boundaries } = initBoundaries();
  const { grass } = initGrass();
  const fpsCounter = createFpsCounter();

  gameLoop((loopCtx) => {
    fpsCounter.capture();
    movePlayer({
      player,
      pressedKeys,
      loopCtx,
      obstacles: [
        ...boundaries.map((x) => x.hitBox),
        ...grass.map((x) => x.hitBox),
      ],
    });
    mCamera.followPlayer({ player, camera });
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    renderGround({ canvasCtx, camera });
    renderInOrder([
      ...grass.map(
        (x): SortableSprite => ({
          ordinal: x.position[1],
          render() {
            renderGrass({ canvasCtx, camera, grass: x });
          },
        })
      ),
      {
        ordinal: player.position[1],
        render() {
          renderPlayer({ canvasCtx, camera, player });
        },
      },
    ]);
    renderFps(canvasCtx, fpsCounter.fps());
  });
}

interface SortableSprite {
  ordinal: number;
  render(): void;
}

function renderInOrder(sprites: SortableSprite[]) {
  sprites
    .slice()
    .sort((s1, s2) => s1.ordinal - s2.ordinal)
    .forEach((s) => s.render());
}

function renderFps(canvasCtx: CanvasRenderingContext2D, fps: number) {
  canvasCtx.font = '48px sans';
  canvasCtx.textBaseline = 'top';
  canvasCtx.fillText(fps.toFixed(1), 10, 10);
}
