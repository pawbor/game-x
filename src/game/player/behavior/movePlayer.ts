import { CharacterState } from '@/game/character';
import { GameLoopContext } from '@/game/gameLoop';
import { HitBox } from '@/game/hitBox';
import { KeyboardState } from '@/game/keyboard';
import { Player, SpriteDirection } from '@/game/player/models';
import { playerHitBox } from '@/game/player/sprites';
import { magnitude, normalize, scale, sum, Vector2d } from '@/vector2d';
import { avoidCollision } from './avoidCollision';

const speed = 0.5;

enum KeyMapping {
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
}

export function movePlayer(props: {
  player: Player;
  keyboardState: KeyboardState;
  loopCtx: GameLoopContext;
  obstacles: HitBox[];
}) {
  const move = calcMove(props);
  updatePlayer({ player: props.player, move });
}

function calcMove(props: {
  player: Player;
  keyboardState: KeyboardState;
  loopCtx: GameLoopContext;
  obstacles: HitBox[];
}) {
  const { keyboardState, loopCtx, player, obstacles } = props;
  const timeDiff = loopCtx.framesTimeDiff;
  const direction = calcDirection(keyboardState);

  const move = scale(direction, speed * timeDiff);
  return avoidCollision({ player, move, obstacles });
}

function calcDirection(keyboardState: KeyboardState) {
  const { pressedKeys } = keyboardState;
  const direction: Vector2d = [0, 0];

  if (pressedKeys[KeyMapping.Up]) {
    direction[1] -= 1;
  }
  if (pressedKeys[KeyMapping.Down]) {
    direction[1] += 1;
  }
  if (pressedKeys[KeyMapping.Left]) {
    direction[0] -= 1;
  }
  if (pressedKeys[KeyMapping.Right]) {
    direction[0] += 1;
  }

  return normalize(direction);
}

function updatePlayer(props: { player: Player; move: Vector2d }) {
  const { player, move } = props;

  player.position = sum(player.position, move);
  player.hitBox = playerHitBox(player.position);
  player.state = calcCharacterState(move);
  player.spriteDirection = calcSpriteDirection(move);
}

function calcCharacterState(move: Vector2d) {
  const distance = magnitude(move);
  return distance === 0 ? CharacterState.Idle : CharacterState.Walk;
}

function calcSpriteDirection(move: Vector2d): SpriteDirection {
  if (move[1] < 0) return SpriteDirection.Up;
  if (move[1] > 0) return SpriteDirection.Down;
  if (move[0] < 0) return SpriteDirection.Left;
  if (move[0] > 0) return SpriteDirection.Right;
  return SpriteDirection.Down;
}
