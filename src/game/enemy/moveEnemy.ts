import { CharacterState } from '@/game/character/CharacterState';
import { Enemy } from '@/game/enemy/Enemy';
import { enemyHitBox } from '@/game/enemy/enemyHitBox';
import { updateState } from '@/game/enemy/updateState';
import { HitBox } from '@/game/hitBox/HitBox';
import { calcMovement } from '@/game/movement/calcMovement';
import { MovingObject } from '@/game/movement/MovingObject';
import { Clock } from '@/time/Clock';
import { magnitude } from '@/vector2d/magnitude';
import { scale } from '@/vector2d/scale';
import { sum } from '@/vector2d/sum';
import { Vector2d } from '@/vector2d/Vector2d';

export function moveEnemy(props: {
  enemy: Enemy;
  moveDirection: Vector2d;
  clock: Clock;
  obstacles: HitBox[];
}) {
  const { enemy, moveDirection, clock, obstacles } = props;

  const movingObject: MovingObject = {
    hitBox: enemy.hitBox,
    velocity: scale(moveDirection, 0.3),
  };
  const move = calcMovement({ clock, movingObject, obstacles });
  updateEnemy({ enemy, move, clock });
}

function updateEnemy(props: { enemy: Enemy; move: Vector2d; clock: Clock }) {
  const { enemy, move, clock } = props;

  enemy.position = sum(enemy.position, move);
  enemy.hitBox = enemyHitBox(enemy);
  updateState({ enemy, state: calcCharacterState(move), clock });
}

function calcCharacterState(move: Vector2d) {
  const distance = magnitude(move);
  return distance === 0 ? CharacterState.Idle : CharacterState.Walk;
}
