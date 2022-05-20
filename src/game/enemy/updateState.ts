import { CharacterState } from '@/game/character/CharacterState';
import { Clock } from '@/time/Clock';
import { Enemy } from '@/game/enemy/Enemy';

export function updateState(props: {
  enemy: Enemy;
  state: CharacterState;
  clock: Clock;
}) {
  const { enemy, state, clock } = props;
  if (enemy.state === state) return;
  enemy.state = state;
  enemy.animationStart = clock.timePassed();
}
