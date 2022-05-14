import { removeItem } from '@/array/removeItem';
import { CharacterState } from '@/game/character';
import { createTimer } from '@/game/clock/createTimer';
import { Player } from '@/game/player/models';
import { createWeaponAttack } from '@/game/weaponAttack/createWeaponAttack';
import { World } from '@/game/world/models';
import { updateState } from './updateState';

export function triggerWeaponAttack(props: { player: Player; world: World }) {
  const { player, world } = props;
  const { weaponAttacks, clock } = world;

  updateState({ player, state: CharacterState.Attack, clock });
  const weaponAttack = createWeaponAttack({ player });
  weaponAttacks.push(weaponAttack);

  createTimer({
    clock,
    delay: 500,
    callback: () => {
      updateState({ player, state: CharacterState.Idle, clock });
      removeItem({ array: weaponAttacks, item: weaponAttack });
    },
  });
}
