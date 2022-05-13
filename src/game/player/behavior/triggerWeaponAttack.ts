import { CharacterState } from '@/game/character';
import { Clock } from '@/game/clock/Clock';
import { createTimer } from '@/game/clock/createTimer';
import { Player } from '@/game/player/models';
import { updateState } from './updateState';

export function triggerWeaponAttack(props: { player: Player; clock: Clock }) {
  const { player, clock } = props;

  updateState({ player, state: CharacterState.Attack, clock });

  createTimer({
    clock,
    delay: 500,
    callback: () => {
      updateState({ player, state: CharacterState.Idle, clock });
    },
  });
}
