import { createCamera } from '@/game/camera/Camera';
import { createClock } from '@/time/createClock';
import { World } from '@/game/world/World';
import { executeWorldBehavior } from './executeWorldBehavior';
import { loadWorldElements } from './loadWorldElements';

export function createWorld(): World {
  const clock = createClock();
  const camera = createCamera();
  const worldElements = loadWorldElements({ creationTime: clock.timePassed() });
  const world: World = {
    ...worldElements,
    clock,
    camera,
    weaponAttacks: [],
    enemyAttacks: [],
  };
  clock.onTick(() => executeWorldBehavior({ world }));
  return world;
}
