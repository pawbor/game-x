import { Vector2d } from '../../vector2d';
import { create } from '../hitBox';
import { TileSize } from '../tile';

export function grassHitBox(position: Vector2d) {
  const topOffset = 15;
  return create({
    left: position[0],
    top: position[1] + topOffset,
    width: TileSize,
    height: TileSize - topOffset,
  });
}
