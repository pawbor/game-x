import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { testCollision } from '@/game/hitBox/testCollision';
import { Clock } from '@/time/Clock';
import { createTimer } from '@/time/createTimer';
import { scale } from '@/vector2d/scale';
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

  handleHealthReduction();
  handleInvincibility();
  handleKnockBack();

  function handleHealthReduction() {
    target.health -= source.attackPower;
  }

  function handleInvincibility() {
    if (target.invincibilityDuration > 0) {
      setInvincibility();
    }
  }

  function setInvincibility() {
    target.invincibilityTimer = createTimer({
      referenceClock: clock,
      duration: target.invincibilityDuration,
      onDone: () => {
        target.invincibilityTimer = undefined;
      },
    });
  }

  function handleKnockBack() {
    const ratio = KnockBackRatio.clip(
      source.knockBackPower.value - target.knockBackResistance.value
    );

    if (ratio.value > 0) {
      setKnockBack(ratio);
    }
  }

  function setKnockBack(ratio: KnockBackRatio) {
    target.knockBack = {
      timer: createTimer({
        referenceClock: clock,
        duration: 300 * ratio.value,
        onDone: () => {
          target.knockBack = undefined;
        },
      }),
      velocity: calcKnockBackVelocity(),
    };
  }

  function calcKnockBackVelocity() {
    const knockBackSpeed = 0.6;
    return scale(source.attackDirection, knockBackSpeed);
  }
}
