import { EnemyType } from '@/game/enemy/models';
import { create } from '@/game/hitBox';
import { Vector2d } from '@/vector2d';
import { selectSpriteHitBox } from './sprites';

export function enemyHitBox(props: { type: EnemyType; position: Vector2d }) {
  const { type, position } = props;
  const { left, top, width, height } = selectSpriteHitBox({ type });
  return create({
    left: position[0] + left,
    top: position[1] + top,
    width,
    height,
  });
}
