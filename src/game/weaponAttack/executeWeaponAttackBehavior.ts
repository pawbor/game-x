import { Damageable } from '@/game/damage/Damageable';
import { tryToDealDamage } from '@/game/damage/tryToDealDamage';
import { World } from '@/game/world/models';
import { WeaponAttack } from './WeaponAttack';

export function executeWeaponAttackBehavior(props: {
  world: World;
  weaponAttack: WeaponAttack;
}) {
  const { world, weaponAttack } = props;
  const damageableObjs = calcDamageable(world);
  damageableObjs.forEach((damageable) => {
    tryToDealDamage({
      target: damageable,
      source: weaponAttack,
      clock: world.clock,
    });
  });
}

function calcDamageable(world: World): Damageable[] {
  const { grasses, enemies } = world;
  return [...grasses, ...enemies];
}
