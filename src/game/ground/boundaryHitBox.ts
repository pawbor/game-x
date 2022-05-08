import { Vector2d } from '../../vector2d';
import { create } from '../hitBox';
import { TileSize } from '../tile';

export function boundaryHitBox(position: Vector2d) {
  return create({
    left: position[0],
    top: position[1],
    width: TileSize,
    height: TileSize,
  });
}
