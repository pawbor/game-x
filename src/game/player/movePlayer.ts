import { normalize, scale, sum, Vector2d } from '../../vector2d';
import { GameLoopContext } from '../gameLoop';
import { HitBox } from '../hitBox';
import { avoidCollision } from './avoidCollision';
import { Player } from './Player';
import { playerHitBox } from './playerHitBox';

const speed = 0.5;

export function movePlayer(props: {
  player: Player;
  pressedKeys: Record<string, boolean>;
  loopCtx: GameLoopContext;
  obstacles: HitBox[];
}) {
  const { pressedKeys, loopCtx, player, obstacles } = props;
  const timeDiff = loopCtx.framesTimeDiff;
  const direction = calcDirection(pressedKeys);

  const move = scale(direction, speed * timeDiff);
  const safeMove = avoidCollision({ player, move, obstacles });

  updatePosition({ player, position: sum(player.position, safeMove) });
}

function updatePosition(props: { player: Player; position: Vector2d }) {
  const { player, position } = props;
  player.position = position;
  player.hitBox = playerHitBox(position);
}

function calcDirection(pressedKeys: Record<string, boolean>) {
  const direction: Vector2d = [0, 0];

  if (pressedKeys['ArrowUp']) {
    direction[1] -= 1;
  }
  if (pressedKeys['ArrowDown']) {
    direction[1] += 1;
  }
  if (pressedKeys['ArrowLeft']) {
    direction[0] -= 1;
  }
  if (pressedKeys['ArrowRight']) {
    direction[0] += 1;
  }

  return normalize(direction);
}
