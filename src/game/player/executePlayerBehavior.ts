import { CharacterState } from '@/game/character/CharacterState';
import { World } from '@/game/world/World';
import { calcMoveDirection } from './calcMoveDirection';
import { KeyMapping } from './KeyMapping';
import { movePlayer } from './movePlayer';
import { triggerWeaponAttack } from './triggerWeaponAttack';

export function executePlayerBehavior(props: { world: World }) {
  const { world } = props;
  const {
    player,
    boundaries,
    enemies,
    grasses,
    staticObjects,
    clock: worldClock,
  } = world;
  const { pressedKeys } = player.keyboardState;

  handleAttacks();
  handleMovement();

  function handleAttacks() {
    if (player.state === CharacterState.Attack) return;

    if (pressedKeys[KeyMapping.WeaponAttack]) {
      triggerWeaponAttack({ player, world });
    }
  }

  function handleMovement() {
    if (player.state === CharacterState.Attack) return;

    const moveDirection = calcMoveDirection(pressedKeys);

    movePlayer({
      player,
      moveDirection,
      clock: worldClock,
      obstacles: [
        ...enemies.map((x) => x.hitBox),
        ...boundaries.map((x) => x.hitBox),
        ...grasses.map((x) => x.hitBox),
        ...staticObjects.map((x) => x.hitBox),
      ],
    });
  }
}