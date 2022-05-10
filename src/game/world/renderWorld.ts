import { Camera } from '../camera';
import { Enemy } from '../enemy';
import { renderEnemy } from '../enemy/renderEnemy';
import { FpsCounter } from '../fps';
import { Grass, renderGrass } from '../grass';
import { renderGround } from '../ground';
import { renderPlayer } from '../player';
import { World } from './World';

export function renderWorld(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  world: World;
  fpsCounter: FpsCounter;
}) {
  const { canvasCtx, camera, world, fpsCounter } = props;
  const { player, grass, enemies } = world;
  const { canvas } = canvasCtx;

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  renderGround({ canvasCtx, camera });
  renderInOrder([
    ...grass.map(grassSprite),
    ...enemies.map(enemySprite),
    playerSprite(),
  ]);
  renderFps(canvasCtx, fpsCounter.fps());

  function grassSprite(x: Grass): SortableSprite {
    return {
      ordinal: x.position[1],
      render() {
        renderGrass({ canvasCtx, camera, grass: x });
      },
    };
  }

  function enemySprite(enemy: Enemy): SortableSprite {
    return {
      ordinal: enemy.position[1],
      render() {
        renderEnemy({ canvasCtx, camera, enemy });
      },
    };
  }

  function playerSprite() {
    return {
      ordinal: player.position[1],
      render() {
        renderPlayer({ canvasCtx, camera, player });
      },
    };
  }
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
