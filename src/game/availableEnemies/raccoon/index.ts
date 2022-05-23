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
  spriteOffset: [0, -150],
  spiritHitBox: create({
    left: 10,
    top: 0,
    width: 220,
    height: TileSize,
  }),
};

export const config: EnemyConfig = {
  sprites,
  maxHealth: 300,
  attackPower: 40,
  invincibilityDuration: 400,
  knockBackResistance: KnockBackRatio.validate(0.4),
  knockBackPower: KnockBackRatio.validate(0.8),
};
