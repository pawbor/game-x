import { removeItem } from '@/array/removeItem';
import { CharacterState } from '@/game/character/CharacterState';
import { calcMoveDirection } from '@/game/enemy/calcMoveDirection';
import { Enemy } from '@/game/enemy/Enemy';
import { knockBackEnemy } from '@/game/enemy/knockBackEnemy';
import { moveEnemy } from '@/game/enemy/moveEnemy';
import { canAttack, triggerEnemyAttack } from '@/game/enemy/triggerEnemyAttack';
import { World } from '@/game/world/World';

export function executeEnemyBehavior(props: { world: World; enemy: Enemy }) {
  const { world, enemy } = props;
  const { enemies, boundaries, grasses, player, staticObjects, clock } = world;

  if (enemy.health < 1) {
    removeItem({ array: enemies, item: enemy });
    return;
  }

  handleKnockBack();
  handleAttack();
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

  function handleAttack() {
    if (enemy.state === CharacterState.Attack) return;

    if (canAttack({ player, enemy })) {
      triggerEnemyAttack({ enemy, world });
    }
  }

  function handleMovement() {
    if (enemy.knockBack) return;
    if (enemy.state === CharacterState.Attack) return;

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
