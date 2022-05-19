import { EnemyConfig } from '@/game/availableEnemies/EnemyConfig';
import { EnemySprites } from '@/game/availableEnemies/EnemySprites';
import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { create } from '@/game/hitBox/HitBox';
import { TileSize } from '@/game/tile/config';
import { attack } from './attack';
import { idle } from './idle';
import { walk } from './walk';

const sprites: EnemySprites = {
  stateAnimations: { walk, idle, attack },
  spriteOffset: [0, 0],
  spiritHitBox: create({
    left: 0,
    top: 20,
    width: TileSize,
    height: TileSize - 20,
  }),
};

export const config: EnemyConfig = {
  sprites,
  maxHealth: 80,
  invincibilityDuration: 300,
  knockBackResistance: KnockBackRatio.validate(0.2)
};
