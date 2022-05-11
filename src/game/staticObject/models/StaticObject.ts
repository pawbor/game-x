import { Vector2d } from '../../../vector2d';
import { HitBox } from '../../hitBox';

export interface StaticObject {
  tileId: string;
  position: Vector2d;
  hitBox: HitBox;
}
