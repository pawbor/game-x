import { create } from '@/game/hitBox/HitBox';
import { TileSize } from '@/game/tile/config';
import { Vector2d } from '@/vector2d/Vector2d';

export function boundaryHitBox(position: Vector2d) {
  return create({
    left: position[0] + 10,
    top: position[1] + 10,
    width: TileSize - 20,
    height: TileSize - 20,
  });
}
