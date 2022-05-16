import { CharacterState } from '@/game/character/CharacterState';
import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export type EnemyAnimation = string[];

export interface EnemySprites {
  stateAnimations: Record<CharacterState, EnemyAnimation>;
  spriteOffset: Vector2d;
  spiritHitBox: HitBox;
}
