import { Vector2d } from '../../../vector2d';
import { HitBox } from '../../hitBox';

export interface Grass {
  position: Vector2d;
  hitBox: HitBox;
  tileId: string;
}
