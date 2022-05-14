import { removeItem } from '@/array/removeItem';
import { Enemy } from '@/game/enemy/models';
import { World } from '@/game/world/models';

export function executeEnemyBehavior(props: { world: World; enemy: Enemy }) {
  const { world, enemy } = props;
  if (enemy.health < 1) {
    removeItem({ array: world.enemies, item: enemy });
  }
}
