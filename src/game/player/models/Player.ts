import { Vector2d } from '../../../vector2d';
import { CharacterState } from '../../character';
import { HitBox } from '../../hitBox';
import { SpriteDirection } from './SpriteDirection';

export interface Player {
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
  spriteDirection: SpriteDirection;
}