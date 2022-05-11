import { Vector2d } from '../../../vector2d';
import { CharacterState } from '../../character';
import { HitBox } from '../../hitBox';

export type StateSprites = string[];

export interface EnemySprites {
  states: Record<CharacterState, StateSprites>;
  spriteOffset: Vector2d;
  hitBox: HitBox;
}
