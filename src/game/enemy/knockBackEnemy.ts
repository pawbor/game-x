import { Enemy } from '@/game/enemy/Enemy';
import { enemyHitBox } from '@/game/enemy/enemyHitBox';
import { HitBox } from '@/game/hitBox/HitBox';
import { calcMovement } from '@/game/movement/calcMovement';
import { MovingObject } from '@/game/movement/MovingObject';
import { Clock } from '@/time/Clock';
import { sum } from '@/vector2d/sum';
import { Vector2d } from '@/vector2d/Vector2d';

export function knockBackEnemy(props: {
  enemy: Enemy;
  velocity: Vector2d;
  clock: Clock;
  obstacles: HitBox[];
}) {
  const { enemy, velocity, clock, obstacles } = props;

  const movingObject: MovingObject = {
    hitBox: enemy.hitBox,
    velocity,
  };
  const move = calcMovement({ clock, movingObject, obstacles });
  updateEnemy({ enemy, move });
}

function updateEnemy(props: { enemy: Enemy; move: Vector2d }) {
  const { enemy, move } = props;

  enemy.position = sum(enemy.position, move);
  enemy.hitBox = enemyHitBox(enemy);
}
