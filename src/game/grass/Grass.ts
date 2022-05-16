import { Damageable } from '@/game/damage/Damageable';
import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export interface Grass extends Damageable {
  position: Vector2d;
  hitBox: HitBox;
  tileId: string;
}
