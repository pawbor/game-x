import { create } from '@/game/hitBox/HitBox';
import { TileSize } from '@/game/tile/config';
import { Vector2d } from '@/vector2d/Vector2d';

export function boundaryHitBox(position: Vector2d) {
  return create({
    left: position[0],
    top: position[1],
    width: TileSize,
    height: TileSize,
  });
}
