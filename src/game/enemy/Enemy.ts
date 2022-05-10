import { Vector2d } from '../../vector2d';
import { CharacterState } from '../character';
import { HitBox } from '../hitBox';
import { enemyHitBox } from './enemyHitBox';
import { EnemyType } from './EnemyType';

export interface Enemy {
  type: EnemyType;
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
}

export function create(type: EnemyType): Enemy {
  const position: Vector2d = [0, 0];
  const hitBox = enemyHitBox({ type, position });
  return {
    type,
    position,
    hitBox,
    state: CharacterState.Idle,
  };
}

export function updatePosition(props: { enemy: Enemy; position: Vector2d }) {
  const { enemy, position } = props;
  enemy.position = position;
  enemy.hitBox = enemyHitBox({ type: enemy.type, position });
}
