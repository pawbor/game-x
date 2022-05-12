import { CharacterState } from '@/game/character';
import { Clock } from '@/game/clock/Clock';
import { createTimer } from '@/game/clock/createTimer';
import { Player } from '@/game/player/models';

export function triggerWeaponAttack(props: {
  player: Player;
  worldClock: Clock;
}) {
  const { player, worldClock } = props;
  player.state = CharacterState.Attack;
  createTimer({
    clock: worldClock,
    delay: 500,
    callback: () => {
      player.state = CharacterState.Idle;
    },
  });
}
