import { isNonNullable } from '@/assertions/nonNullable';
import { EnemyType } from '@/game/availableEnemies/EnemyType';
import { getEnemyConfig } from '@/game/availableEnemies/getEnemyConfig';
import { CharacterState } from '@/game/character/CharacterState';
import { Enemy } from '@/game/enemy/Enemy';
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
      const config = getEnemyConfig(type);

      return {
        type,
        position,
        hitBox,
        state: CharacterState.Idle,
        animationStart: creationTime,
        health: config.maxHealth,
        invincibilityTimer: undefined,
      };
    })
    .filter(isNonNullable);
}
