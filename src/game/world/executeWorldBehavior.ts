import { followPlayer } from '@/game/camera/followPlayer';
import { executeEnemyBehavior } from '@/game/enemy/executeEnemyBehavior';
import { executeEnemyAttackBehavior } from '@/game/enemy/triggerEnemyAttack';
import { executeGrassBehavior } from '@/game/grass/executeGrassBehavior';
import { executePlayerBehavior } from '@/game/player/executePlayerBehavior';
import { executeWeaponAttackBehavior } from '@/game/weaponAttack/executeWeaponAttackBehavior';
import { World } from '@/game/world/World';

export function executeWorldBehavior(props: { world: World }): void {
  const { world } = props;
  const { weaponAttacks, enemyAttacks, grasses, enemies } = world;
  executePlayerBehavior({
    world,
  });

  weaponAttacks.forEach((weaponAttack) => {
    executeWeaponAttackBehavior({ weaponAttack, world });
  });

  enemyAttacks.forEach((enemyAttack) => {
    executeEnemyAttackBehavior({ enemyAttack, world });
  });

  grasses.forEach((grass) => {
    executeGrassBehavior({ grass, world });
  });

  enemies.forEach((enemy) => {
    executeEnemyBehavior({ enemy, world });
  });

  followPlayer({ camera: world.camera, player: world.player });
}
