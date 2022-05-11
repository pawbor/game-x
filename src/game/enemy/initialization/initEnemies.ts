import { CharacterState } from '@/game/character';
import { Enemy, EnemyType } from '@/game/enemy/models';
import { enemyHitBox } from '@/game/enemy/sprites';
import { Tile } from '@/game/tile';

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
