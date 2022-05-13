import { isNonNullable } from '@/assertions';
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

export function initEnemies(props: {
  characterTiles: Tile[];
  creationTime: number;
}): Enemy[] {
  const { characterTiles, creationTime } = props;
  return characterTiles
    .map((tile): Enemy | null => {
      const type = tileMapping[tile.tileId];
      if (!type) return null;

      const { position } = tile;
      const hitBox = enemyHitBox({ type, position });

      return {
        type,
        position,
        hitBox,
        state: CharacterState.Idle,
        animationStart: creationTime,
      };
    })
    .filter(isNonNullable);
}
