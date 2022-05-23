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
    top: 30,
    width: TileSize,
    height: TileSize - 30,
  }),
};

export const config: EnemyConfig = {
  sprites,
  maxHealth: 100,
  attackPower: 10,
  invincibilityDuration: 200,
  knockBackResistance: KnockBackRatio.validate(0.2),
  knockBackPower: KnockBackRatio.validate(0),
};
