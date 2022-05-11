import { Vector2d } from '../../../vector2d';
import { create } from '../../hitBox';
import { TileSize } from '../../tile';


export function playerHitBox(position: Vector2d) {
  const topOffset = 25;
  const horizontalPadding = 5;
  return create({
    left: position[0] + horizontalPadding,
    top: position[1] + topOffset,
    width: TileSize - horizontalPadding * 2,
    height: TileSize - topOffset,
  });
}
