import { CharacterState } from '@/game/character/CharacterState';
import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export type StateSprites = string[];

export interface EnemySprites {
  states: Record<CharacterState, StateSprites>;
  spriteOffset: Vector2d;
  hitBox: HitBox;
}
