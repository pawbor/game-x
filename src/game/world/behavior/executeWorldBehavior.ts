import { followPlayer } from '@/game/camera';
import { executePlayerBehavior } from '@/game/player/behavior';
import { World } from '@/game/world/models';

export function executeWorldBehavior(props: { world: World }): void {
  const { world } = props;
  executePlayerBehavior({
    world,
  });
  followPlayer({ camera: world.camera, player: world.player });
}
