import { CharacterState } from '@/game/character';
import { HitBox } from '@/game/hitBox';
import { Vector2d } from '@/vector2d';

export type StateSprites = string[];

export interface EnemySprites {
  states: Record<CharacterState, StateSprites>;
  spriteOffset: Vector2d;
  hitBox: HitBox;
}
