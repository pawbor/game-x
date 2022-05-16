import { createCamera } from '@/game/camera/Camera';
import { createClock } from '@/game/clock/createClock';
import { World } from '@/game/world/World';
import { executeWorldBehavior } from './executeWorldBehavior';
import { loadWorldElements } from './loadWorldElements';

export function createWorld(): World {
  const clock = createClock();
  const camera = createCamera();
  const worldElements = loadWorldElements({ creationTime: clock.now() });
  const world: World = { ...worldElements, clock, camera, weaponAttacks: [] };
  clock.onTick(() => executeWorldBehavior({ world }));
  return world;
}
