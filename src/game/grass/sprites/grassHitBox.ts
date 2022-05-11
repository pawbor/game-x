import { create } from '@/game/hitBox';
import { TileSize } from '@/game/tile';
import { Vector2d } from '@/vector2d';

export function grassHitBox(position: Vector2d) {
  const topOffset = 15;
  return create({
    left: position[0],
    top: position[1] + topOffset,
    width: TileSize,
    height: TileSize - topOffset,
  });
}
