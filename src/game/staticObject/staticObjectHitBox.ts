import { create } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';
import { selectSprite } from './sprites/sprites';

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
