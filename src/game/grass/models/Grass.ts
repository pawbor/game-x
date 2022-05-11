import { HitBox } from '@/game/hitBox';
import { Vector2d } from '@/vector2d';

export interface Grass {
  position: Vector2d;
  hitBox: HitBox;
  tileId: string;
}
