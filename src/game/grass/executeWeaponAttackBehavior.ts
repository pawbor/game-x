import { removeItem } from '@/array/removeItem';
import { Grass } from '@/game/grass/Grass';
import { World } from '@/game/world/World';

export function executeGrassBehavior(props: { world: World; grass: Grass }) {
  const { world, grass } = props;
  if (grass.health < 1) {
    removeItem({ array: world.grasses, item: grass });
  }
}
