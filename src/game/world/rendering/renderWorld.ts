import { Camera, transformPosition } from '@/game/camera';
import { Enemy } from '@/game/enemy/models';
import { renderEnemy } from '@/game/enemy/rendering';
import { Grass } from '@/game/grass/models';
import { renderGrass } from '@/game/grass/rendering';
import { renderGround } from '@/game/ground/rendering';
import { HitBox } from '@/game/hitBox';
import { renderPlayer } from '@/game/player/rendering';
import { StaticObject } from '@/game/staticObject/models';
import { renderStaticObject } from '@/game/staticObject/rendering';
import { renderWeaponAttack } from '@/game/weaponAttack/renderWeaponAttack';
import { WeaponAttack } from '@/game/weaponAttack/WeaponAttack';
import { World } from '@/game/world/models';

export function renderWorld(props: {
  canvasCtx: CanvasRenderingContext2D;
  world: World;
}) {
  const { canvasCtx, world } = props;
  const {
    player,
    grasses,
    enemies,
    staticObjects,
    camera,
    clock,
    weaponAttacks,
  } = world;
  const { canvas } = canvasCtx;

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  renderGround({ canvasCtx, camera });
  ySortRender([
    ...grasses.map(grassRenderer),
    ...enemies.map(enemyRenderer),
    ...staticObjects.map(staticObjectRenderer),
    ...weaponAttacks.map(weaponAttackRenderer),
    playerRenderer(),
  ]);

  renderHitBoxes({
    canvasCtx,
    camera,
    items: [player, ...grasses, ...enemies, ...staticObjects, ...weaponAttacks],
  });

  function grassRenderer(grass: Grass): YSortRenderer {
    return {
      y: grass.hitBox.bottom,
      render() {
        renderGrass({ canvasCtx, camera, grass });
      },
    };
  }

  function enemyRenderer(enemy: Enemy): YSortRenderer {
    return {
      y: enemy.hitBox.bottom,
      render() {
        renderEnemy({ canvasCtx, camera, enemy, clock });
      },
    };
  }

  function staticObjectRenderer(staticObject: StaticObject): YSortRenderer {
    return {
      y: staticObject.hitBox.bottom,
      render() {
        renderStaticObject({ canvasCtx, camera, staticObject });
      },
    };
  }

  function playerRenderer(): YSortRenderer {
    return {
      y: player.hitBox.bottom,
      render() {
        renderPlayer({ canvasCtx, player, camera, clock });
      },
    };
  }

  function weaponAttackRenderer(weaponAttack: WeaponAttack): YSortRenderer {
    return {
      y: weaponAttack.hitBox.bottom,
      render() {
        renderWeaponAttack({ weaponAttack, canvasCtx, world });
      },
    };
  }
}

interface YSortRenderer {
  y: number;
  render(): void;
}

function ySortRender(sprites: YSortRenderer[]) {
  sprites
    .slice()
    .sort((s1, s2) => s1.y - s2.y)
    .forEach((s) => s.render());
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
