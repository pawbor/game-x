import { removeItem } from '@/array/removeItem';
import { Enemy } from '@/game/enemy/Enemy';
import { knockBackEnemy } from '@/game/enemy/knockBackEnemy';
import { World } from '@/game/world/World';

export function executeEnemyBehavior(props: { world: World; enemy: Enemy }) {
  const { world, enemy } = props;
  const { enemies, boundaries, grasses, player, staticObjects, clock } = world;

  if (enemy.health < 1) {
    removeItem({ array: enemies, item: enemy });
  }

  if (enemy.knockBack) {
    knockBackEnemy({
      clock,
      enemy,
      obstacles: [
        player.hitBox,
        ...enemies.filter((item) => item !== enemy).map((x) => x.hitBox),
        ...boundaries.map((x) => x.hitBox),
        ...grasses.map((x) => x.hitBox),
        ...staticObjects.map((x) => x.hitBox),
      ],
      velocity: enemy.knockBack.velocity,
    });
  }
}
