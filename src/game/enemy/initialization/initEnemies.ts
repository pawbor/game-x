import { CharacterState } from '../../character';
import { Tile } from '../../tile';
import { Enemy, EnemyType } from '../models';
import { enemyHitBox } from '../sprites';

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

      const { position } = tile;
      const hitBox = enemyHitBox({ type, position });

      return {
        type,
        position,
        hitBox,
        state: CharacterState.Idle,
      };
    })
    .filter((enemy): enemy is Enemy => enemy !== null);
}
