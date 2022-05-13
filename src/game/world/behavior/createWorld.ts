import { createCamera } from '@/game/camera';
import { createClock } from '@/game/clock/createClock';
import { World } from '@/game/world/models';
import { executeWorldBehavior } from './executeWorldBehavior';
import { loadWorldElements } from './loadWorldElements';

export function createWorld(): World {
  const clock = createClock();
  const camera = createCamera();
  const worldElements = loadWorldElements({ creationTime: clock.now() });
  const world = { ...worldElements, clock, camera };
  clock.onTick(() => executeWorldBehavior({ world }));
  return world;
}
