import { config as bamboo } from './bamboo';
import { config as raccoon } from './raccoon';
import { config as spirit } from './spirit';
import { config as squid } from './squid';
import { EnemyConfig } from './EnemyConfig';
import { EnemyType } from './EnemyType';

const configs: Record<EnemyType, EnemyConfig> = {
  bamboo,
  raccoon,
  spirit,
  squid,
};

export function getEnemyConfig(weaponType: EnemyType) {
  return configs[weaponType];
}
