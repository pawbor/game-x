import { CharacterState } from '@/game/character';
import { KeyboardState } from '@/game/keyboard';
import { World } from '@/game/world/models';
import { Clock } from '@/game/clock/Clock';
import { calcMoveDirection } from './calcMoveDirection';
import { KeyMapping } from './KeyMapping';
import { movePlayer } from './movePlayer';
import { triggerWeaponAttack } from './triggerWeaponAttack';

export function executePlayerBehavior(props: {
  world: World;
  worldClock: Clock;
  keyboardState: KeyboardState;
}) {
  const { world, keyboardState, worldClock } = props;
  const { player, boundaries, enemies, grass, staticObjects } = world;
  const { pressedKeys } = keyboardState;

  handleAttacks();
  handleMovement();

  function handleAttacks() {
    if (player.state === CharacterState.Attack) return;

    if (pressedKeys[KeyMapping.WeaponAttack]) {
      triggerWeaponAttack({ player, worldClock });
    }
  }

  function handleMovement() {
    if (player.state === CharacterState.Attack) return;

    const moveDirection = calcMoveDirection(pressedKeys);

    movePlayer({
      player,
      moveDirection,
      worldClock,
      obstacles: [
        ...enemies.map((x) => x.hitBox),
        ...boundaries.map((x) => x.hitBox),
        ...grass.map((x) => x.hitBox),
        ...staticObjects.map((x) => x.hitBox),
      ],
    });
  }
}
