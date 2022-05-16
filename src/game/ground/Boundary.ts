import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export interface Boundary {
  position: Vector2d;
  hitBox: HitBox;
}
