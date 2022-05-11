import { Vector2d } from '../../../vector2d';
import { CharacterState } from '../../character';
import { HitBox } from '../../hitBox';
import { EnemyType } from './EnemyType';

export interface Enemy {
  type: EnemyType;
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
}
