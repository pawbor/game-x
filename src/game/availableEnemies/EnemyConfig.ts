import { EnemySprites } from '@/game/availableEnemies/EnemySprites';

export interface EnemyConfig {
  sprites: EnemySprites;
  maxHealth: number;
  invincibilityDuration: number;
}
