import { HitBox } from '@/game/hitBox/HitBox';
import { avoidCollision } from '@/game/movement/avoidCollision';
import { MovingObject } from '@/game/movement/MovingObject';
import { Clock } from '@/time/Clock';
import { scale } from '@/vector2d/scale';
import { Vector2d } from '@/vector2d/Vector2d';

export function calcMovement(props: {
  movingObject: MovingObject;
  clock: Clock;
  obstacles: HitBox[];
}): Vector2d {
  const { movingObject, clock, obstacles } = props;
  const { velocity, hitBox } = movingObject;
  const tickDiff = clock.lastTickDuration();
  const movement = scale(velocity, tickDiff);

  return avoidCollision({ movingHitBox: hitBox, movement, obstacles });
}
