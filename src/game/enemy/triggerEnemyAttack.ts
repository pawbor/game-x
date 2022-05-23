import { removeItem } from '@/array/removeItem';
import { CharacterState } from '@/game/character/CharacterState';
import { DamageDealer } from '@/game/damage/DamageDealer';
import { tryToDealDamage } from '@/game/damage/tryToDealDamage';
import { Enemy } from '@/game/enemy/Enemy';
import { updateState } from '@/game/enemy/updateState';
import { calcDistance } from '@/game/hitBox/calcDistance';
import { Player } from '@/game/player/Player';
import { World } from '@/game/world/World';
import { createTimer } from '@/time/createTimer';
import { diff } from '@/vector2d/diff';
import { normalize } from '@/vector2d/normalize';

export function canAttack(props: { player: Player; enemy: Enemy }) {
  const { player, enemy } = props;
  return calcDistance(player.hitBox, enemy.hitBox) === 0;
}

export function triggerEnemyAttack(props: { world: World; enemy: Enemy }) {
  const { enemy, world } = props;
  const { player, clock, enemyAttacks } = world;

  updateState({ enemy, state: CharacterState.Attack, clock });

  const enemyAttack = createEnemyAttack({ player, enemy });
  enemyAttacks.push(enemyAttack);

  createTimer({
    referenceClock: clock,
    duration: 500,
    onDone: () => {
      updateState({ enemy, state: CharacterState.Idle, clock });
    },
  });
}

function createEnemyAttack(props: {
  player: Player;
  enemy: Enemy;
}): DamageDealer {
  const { player, enemy } = props;
  return {
    attackDirection: normalize(diff(player.hitBox.center, enemy.hitBox.center)),
    attackPower: enemy.attackPower,
    hitBox: player.hitBox,
    knockBackPower: enemy.knockBackPower,
  };
}

export function executeEnemyAttackBehavior(props: {
  world: World;
  enemyAttack: DamageDealer;
}) {
  const { world, enemyAttack } = props;
  tryToDealDamage({
    target: world.player,
    source: enemyAttack,
    clock: world.clock,
  });
  removeItem({ array: world.enemyAttacks, item: enemyAttack });
}
