import { create } from '@/game/hitBox';
import { TileSize } from '@/game/tile';
import { Vector2d } from '@/vector2d';

export function boundaryHitBox(position: Vector2d) {
  return create({
    left: position[0],
    top: position[1],
    width: TileSize,
    height: TileSize,
  });
}
