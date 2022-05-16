import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export interface StaticObject {
  tileId: string;
  position: Vector2d;
  hitBox: HitBox;
}
