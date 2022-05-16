import { EnemyType } from '@/game/enemy/EnemyType';
import { create } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';
import { selectSpriteHitBox } from './sprites/sprites';

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
