import { magnitude, normalize, scale, sum, Vector2d } from '../../vector2d';
import { GameLoopContext } from '../gameLoop';
import { HitBox } from '../hitBox';
import { avoidCollision } from './avoidCollision';
import { Player, PlayerState, SpriteDirection } from './Player';
import { playerHitBox } from './playerHitBox';

const speed = 0.5;

export function movePlayer(props: {
  player: Player;
  pressedKeys: Record<string, boolean>;
  loopCtx: GameLoopContext;
  obstacles: HitBox[];
}) {
  const move = calcMove(props);
  updatePlayer({ player: props.player, move });
}

function calcMove(props: {
  player: Player;
  pressedKeys: Record<string, boolean>;
  loopCtx: GameLoopContext;
  obstacles: HitBox[];
}) {
  const { pressedKeys, loopCtx, player, obstacles } = props;
  const timeDiff = loopCtx.framesTimeDiff;
  const direction = calcDirection(pressedKeys);

  const move = scale(direction, speed * timeDiff);
  return avoidCollision({ player, move, obstacles });
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

function updatePlayer(props: { player: Player; move: Vector2d }) {
  const { player, move } = props;
  player.position = sum(player.position, move);
  player.hitBox = playerHitBox(player.position);
  player.state = calcPlayerState(move);
  player.spriteDirection = calcSpriteDirection(move);
}

function calcPlayerState(move: Vector2d) {
  const distance = magnitude(move);
  return distance === 0 ? PlayerState.Idle : PlayerState.Walk;
}

function calcSpriteDirection(move: Vector2d): SpriteDirection {
  if (move[1] < 0) return SpriteDirection.Up;
  if (move[1] > 0) return SpriteDirection.Down;
  if (move[0] < 0) return SpriteDirection.Left;
  if (move[0] > 0) return SpriteDirection.Right;
  return SpriteDirection.Down;
}
