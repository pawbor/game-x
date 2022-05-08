import { Vector2d } from '../../vector2d';
import { HitBox } from '../hitBox';

export interface Boundary {
  position: Vector2d;
  hitBox: HitBox;
}
