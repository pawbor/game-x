import { removeItem } from '@/array/removeItem';
import { calcMoveDirection } from '@/game/enemy/calcMoveDirection';
import { Enemy } from '@/game/enemy/Enemy';
import { knockBackEnemy } from '@/game/enemy/knockBackEnemy';
import { moveEnemy } from '@/game/enemy/moveEnemy';
import { World } from '@/game/world/World';

export function executeEnemyBehavior(props: { world: World; enemy: Enemy }) {
  const { world, enemy } = props;
  const { enemies, boundaries, grasses, player, staticObjects, clock } = world;

  if (enemy.health < 1) {
    removeItem({ array: enemies, item: enemy });
    return;
  }

  handleKnockBack();
  handleMovement();

  function handleKnockBack() {
    if (!enemy.knockBack) return;

    knockBackEnemy({
      clock,
      enemy,
      obstacles: obstacles(),
      velocity: enemy.knockBack.velocity,
    });
  }

  function handleMovement() {
    if (enemy.knockBack) return;

    const moveDirection = calcMoveDirection({ player, enemy });

    moveEnemy({
      clock,
      enemy,
      obstacles: obstacles(),
      moveDirection,
    });
  }

  function obstacles() {
    return [
      player.hitBox,
      ...enemies.filter((item) => item !== enemy).map((x) => x.hitBox),
      ...boundaries.map((x) => x.hitBox),
      ...grasses.map((x) => x.hitBox),
      ...staticObjects.map((x) => x.hitBox),
    ];
  }
}
