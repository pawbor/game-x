import { HitBox } from '@/game/hitBox/HitBox';
import { calcMovement } from '@/game/movement/calcMovement';
import { MovingObject } from '@/game/movement/MovingObject';
import { Player } from '@/game/player/Player';
import { playerHitBox } from '@/game/player/playerHitBox';
import { Clock } from '@/time/Clock';
import { sum } from '@/vector2d/sum';
import { Vector2d } from '@/vector2d/Vector2d';

export function knockBackPlayer(props: {
  player: Player;
  velocity: Vector2d;
  clock: Clock;
  obstacles: HitBox[];
}) {
  const { player, velocity, clock, obstacles } = props;

  const movingObject: MovingObject = {
    hitBox: player.hitBox,
    velocity,
  };
  const move = calcMovement({ clock, movingObject, obstacles });
  updatePlayer({ player, move });
}

function updatePlayer(props: { player: Player; move: Vector2d }) {
  const { player, move } = props;

  player.position = sum(player.position, move);
  player.hitBox = playerHitBox(player.position);
}
