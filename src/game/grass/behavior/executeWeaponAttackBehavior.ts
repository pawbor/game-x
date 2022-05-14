import { removeItem } from '@/array/removeItem';
import { Grass } from '@/game/grass/models';
import { World } from '@/game/world/models';

export function executeGrassBehavior(props: { world: World; grass: Grass }) {
  const { world, grass } = props;
  if (grass.health < 1) {
    removeItem({ array: world.grasses, item: grass });
  }
}
