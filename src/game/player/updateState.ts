import { CharacterState } from '@/game/character/CharacterState';
import { Clock } from '@/game/clock/Clock';
import { Player } from '@/game/player/Player';

export function updateState(props: {
  player: Player;
  state: CharacterState;
  clock: Clock;
}) {
  const { player, state, clock } = props;
  if (player.state === state) return;
  player.state = state;
  player.animationStart = clock.now();
}
