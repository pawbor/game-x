import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export interface MovingObject {
  hitBox: HitBox;
  velocity: Vector2d;
}
