import { EnemyConfig } from '@/game/availableEnemies/EnemyConfig';
import { EnemySprites } from '@/game/availableEnemies/EnemySprites';
import { create } from '@/game/hitBox/HitBox';
import { TileSize } from '@/game/tile/config';
import { attack } from './attack';
import { idle } from './idle';
import { walk } from './walk';

const sprites: EnemySprites = {
  stateAnimations: { walk, idle, attack },
  spriteOffset: [0, 0],
  spiritHitBox: create({
    left: 10,
    top: 20,
    width: TileSize - 20,
    height: TileSize - 20,
  }),
};

export const config: EnemyConfig = {
  sprites,
  maxHealth: 120,
};
