import { Clock } from '@/game/clock/Clock';
import { createTimer } from '@/game/clock/createTimer';
import { testCollision } from '@/game/hitBox';
import { Damageable } from './Damageable';
import { DamageDealer } from './DamageDealer';

export function tryToDealDamage(props: {
  target: Damageable;
  source: DamageDealer;
  clock: Clock;
}) {
  const { target, source, clock } = props;

  if (target.invincible) return;

  if (!testCollision(target.hitBox, source.hitBox)) return;

  target.health -= source.attackPower;
  target.invincible = true;
  createTimer({
    clock,
    delay: 300,
    callback: () => {
      target.invincible = false;
    },
  });
}
