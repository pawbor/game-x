import { Vector2d } from '../../vector2d';
import { create, HitBox } from '../hitBox';
import { TileSize } from '../tile';
import { EnemyType } from './EnemyType';

const hitBoxtemplates: Record<EnemyType, HitBox> = {
  [EnemyType.Bamboo]: create({
    left: 0,
    top: 20,
    width: TileSize,
    height: TileSize - 20,
  }),
  [EnemyType.Spirit]: create({
    left: 10,
    top: 20,
    width: TileSize - 20,
    height: TileSize - 20,
  }),
  [EnemyType.Raccoon]: create({
    left: 10,
    top: 0,
    width: 220,
    height: TileSize,
  }),
  [EnemyType.Squid]: create({
    left: 0,
    top: 30,
    width: TileSize,
    height: TileSize - 30,
  }),
};

export function enemyHitBox(props: { type: EnemyType; position: Vector2d }) {
  const { type, position } = props;
  const { left, top, width, height } = hitBoxtemplates[type];
  return create({
    left: position[0] + left,
    top: position[1] + top,
    width,
    height,
  });
}
