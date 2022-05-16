import { EnemyType } from '@/game/availableEnemies/EnemyType';
import { getEnemyConfig } from '@/game/availableEnemies/getEnemyConfig';
import { create, HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

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

function selectSpriteHitBox(props: { type: EnemyType }): HitBox {
  return getEnemyConfig(props.type).sprites.spiritHitBox;
}
