import { CharacterState } from '@/game/character/CharacterState';
import { knockBackPlayer } from '@/game/player/knockBackPlayer';
import { World } from '@/game/world/World';
import { calcMoveDirection } from './calcMoveDirection';
import { KeyMapping } from './KeyMapping';
import { movePlayer } from './movePlayer';
import { triggerWeaponAttack } from './triggerWeaponAttack';

export function executePlayerBehavior(props: { world: World }) {
  const { world } = props;
  const { player, boundaries, enemies, grasses, staticObjects, clock } = world;
  const { pressedKeys } = player.keyboardState;

  handleKnockBack();
  handleAttacks();
  handleMovement();

  function handleKnockBack() {
    if (!player.knockBack) return;

    knockBackPlayer({
      clock,
      player,
      obstacles: obstacles(),
      velocity: player.knockBack.velocity,
    });
  }

  function handleAttacks() {
    if (player.knockBack) return;
    if (player.state === CharacterState.Attack) return;

    if (pressedKeys[KeyMapping.WeaponAttack]) {
      triggerWeaponAttack({ player, world });
    }
  }

  function handleMovement(   ) {
    if (player.knockBack) return;
    if (player.state === CharacterState.Attack) return;

    const moveDirection = calcMoveDirection(pressedKeys);

    movePlayer({
      player,
      moveDirection,
      clock,
      obstacles: obstacles(),
    });
  }

  function obstacles() {
    return [
      ...enemies.map((x) => x.hitBox),
      ...boundaries.map((x) => x.hitBox),
      ...grasses.map((x) => x.hitBox),
      ...staticObjects.map((x) => x.hitBox),
    ];
  }
}
