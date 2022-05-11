import { CharacterState } from '@/game/character';
import { HitBox } from '@/game/hitBox';
import { Vector2d } from '@/vector2d';
import { SpriteDirection } from './SpriteDirection';

export interface Player {
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
  spriteDirection: SpriteDirection;
}
