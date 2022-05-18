import { Clock } from '@/time/Clock';
import { createTimer } from '@/time/createTimer';
import { testCollision } from '@/game/hitBox/testCollision';
import { Damageable } from './Damageable';
import { DamageDealer } from './DamageDealer';

export function tryToDealDamage(props: {
  target: Damageable;
  source: DamageDealer;
  clock: Clock;
}) {
  const { target, source, clock } = props;

  if (target.invincibilityTimer) return;

  if (!testCollision(target.hitBox, source.hitBox)) return;

  target.health -= source.attackPower;

  if (target.invincibilityDuration > 0) {
    target.invincibilityTimer = createTimer({
      referenceClock: clock,
      duration: target.invincibilityDuration,
      onDone: () => {
        target.invincibilityTimer = undefined;
      },
    });
  }
}
