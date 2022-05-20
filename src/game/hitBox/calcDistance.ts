import { HitBox } from '@/game/hitBox/HitBox';
import { magnitude } from '@/vector2d/magnitude';

export function calcDistance(a: HitBox, b: HitBox) {
  const xDist = Math.max(0, a.left - b.right, b.left - a.right);
  const yDist = Math.max(0, a.top - b.bottom, b.top - a.bottom);
  return magnitude([xDist, yDist]);
}
