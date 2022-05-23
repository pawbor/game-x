import { removeItem } from '@/array/removeItem';
import { CharacterState } from '@/game/character/CharacterState';
import { createTimer } from '@/time/createTimer';
import { Player } from '@/game/player/Player';
import { createWeaponAttack } from '@/game/weaponAttack/createWeaponAttack';
import { World } from '@/game/world/World';
import { updateState } from './updateState';

export function triggerWeaponAttack(props: { player: Player; world: World }) {
  const { player, world } = props;
  const { weaponAttacks, clock } = world;

  updateState({ player, state: CharacterState.Attack, clock });

  const weaponAttack = createWeaponAttack({ player });
  weaponAttacks.push(weaponAttack);

  createTimer({
    referenceClock: clock,
    duration: weaponAttack.attackDuration,
    onDone: () => {
      updateState({ player, state: CharacterState.Idle, clock });
      removeItem({ array: weaponAttacks, item: weaponAttack });
    },
  });
}
