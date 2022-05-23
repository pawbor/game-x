import { EnemySprites } from '@/game/availableEnemies/EnemySprites';
import { KnockBackRatio } from '@/game/damage/KnockBackRatio';

export interface EnemyConfig {
  sprites: EnemySprites;
  maxHealth: number;
  attackPower: number;
  invincibilityDuration: number;
  knockBackResistance: KnockBackRatio;
  knockBackPower: KnockBackRatio;
}
