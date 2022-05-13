import { CharacterState } from '@/game/character';
import { HitBox } from '@/game/hitBox';
import { Vector2d } from '@/vector2d';
import { EnemyType } from './EnemyType';

export interface Enemy {
  type: EnemyType;
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
  animationStart: number;
}
