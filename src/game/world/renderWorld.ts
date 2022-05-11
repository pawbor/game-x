import { Camera, transformPosition } from '@/game/camera';
import { Enemy } from '@/game/enemy/models';
import { renderEnemy } from '@/game/enemy/rendering';
import { FpsCounter } from '@/game/fps';
import { Grass } from '@/game/grass/models';
import { renderGrass } from '@/game/grass/rendering';
import { renderGround } from '@/game/ground/rendering';
import { HitBox } from '@/game/hitBox';
import { renderPlayer } from '@/game/player/rendering';
import { StaticObject } from '@/game/staticObject/models';
import { renderStaticObject } from '@/game/staticObject/rendering';
import { World } from './World';

export function renderWorld(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  world: World;
  fpsCounter: FpsCounter;
}) {
  const { canvasCtx, camera, world, fpsCounter } = props;
  const { player, grass, enemies, staticObjects } = world;
  const { canvas } = canvasCtx;

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  renderGround({ canvasCtx, camera });
  ySortRender([
    ...grass.map(grassRenderer),
    ...enemies.map(enemyRenderer),
    ...staticObjects.map(staticObjectRenderer),
    playerRenderer(),
  ]);
  renderFps({ canvasCtx, fps: fpsCounter.fps() });
  renderHitBoxes({
    canvasCtx,
    camera,
    items: [player, ...grass, ...enemies, ...staticObjects],
  });

  function grassRenderer(x: Grass): YSortRenderer {
    return {
      ordinal: x.position[1],
      render() {
        renderGrass({ canvasCtx, camera, grass: x });
      },
    };
  }

  function enemyRenderer(enemy: Enemy): YSortRenderer {
    return {
      ordinal: enemy.position[1],
      render() {
        renderEnemy({ canvasCtx, camera, enemy });
      },
    };
  }

  function staticObjectRenderer(staticObject: StaticObject): YSortRenderer {
    return {
      ordinal: staticObject.position[1],
      render() {
        renderStaticObject({ canvasCtx, camera, staticObject });
      },
    };
  }

  function playerRenderer() {
    return {
      ordinal: player.position[1],
      render() {
        renderPlayer({ canvasCtx, camera, player });
      },
    };
  }
}

interface YSortRenderer {
  ordinal: number;
  render(): void;
}

function ySortRender(sprites: YSortRenderer[]) {
  sprites
    .slice()
    .sort((s1, s2) => s1.ordinal - s2.ordinal)
    .forEach((s) => s.render());
}

function renderFps(props: {
  canvasCtx: CanvasRenderingContext2D;
  fps: number;
}) {
  const { canvasCtx, fps } = props;
  canvasCtx.font = '48px sans';
  canvasCtx.textBaseline = 'top';
  canvasCtx.fillText(fps.toFixed(1), 10, 10);
}

function renderHitBoxes(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  items: Array<{ hitBox: HitBox }>;
}) {
  const { canvasCtx, camera, items } = props;
  items
    .map((item) => item.hitBox)
    .forEach((box) => {
      const { left, top, width, height } = box;
      const [x, y] = transformPosition({
        position: [left, top],
        camera,
        canvasCtx,
      });
      canvasCtx.strokeRect(x, y, width, height);
    });
}
