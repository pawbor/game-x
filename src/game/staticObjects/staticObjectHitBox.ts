import { Vector2d } from '../../vector2d';
import { create } from '../hitBox';
import { selectSprite } from './sprites';

export function staticObjectHitBox(props: {
  tileId: string;
  position: Vector2d;
}) {
  const { tileId, position } = props;
  const { hitBox } = selectSprite(tileId);
  const { left, top, width, height } = hitBox;
  return create({
    left: left + position[0],
    top: top + position[1],
    width,
    height,
  });
}
