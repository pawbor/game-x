import { isNonNullable } from '@/assertions/nonNullable';
import { CharacterState } from '@/game/character/CharacterState';
import { Enemy } from '@/game/enemy/Enemy';
import { EnemyType } from '@/game/enemy/EnemyType';
import { enemyHitBox } from '@/game/enemy/enemyHitBox';
import { Tile } from '@/game/tile/Tile';

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
        health: 1,
        invincible: false,
      };
    })
    .filter(isNonNullable);
}
