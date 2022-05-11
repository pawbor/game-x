import { HitBox } from '@/game/hitBox';
import { Vector2d } from '@/vector2d';

export interface StaticObject {
  tileId: string;
  position: Vector2d;
  hitBox: HitBox;
}
