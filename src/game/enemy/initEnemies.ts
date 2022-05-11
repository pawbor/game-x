import { Tile } from '../tile';
import { create, Enemy, updatePosition } from './Enemy';
import { EnemyType } from './EnemyType';

const tileMapping: Record<string, EnemyType> = {
  '390': EnemyType.Bamboo,
  '391': EnemyType.Spirit,
  '392': EnemyType.Raccoon,
  '393': EnemyType.Squid,
};

export function initEnemies(charTiles: Tile[]): Enemy[] {
  return charTiles
    .map((tile) => {
      const type = tileMapping[tile.tileId];
      if (!type) return null;
      const enemy = create(type);
      updatePosition({
        enemy,
        position: tile.position,
      });
      return enemy;
    })
    .filter((enemy): enemy is Enemy => enemy !== null);
}
