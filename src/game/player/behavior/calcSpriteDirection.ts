import { SpriteDirection } from '@/game/sprite/SpriteDirection';
import { Vector2d } from '@/vector2d';

export function calcSpriteDirection(props: {
  move: Vector2d;
  moveDirection: Vector2d;
  previous: SpriteDirection;
}): SpriteDirection {
  const { move, moveDirection, previous } = props;
  const dx = Math.abs(move[0]);
  const dy = Math.abs(move[1]);
  if (dx > dy) {
    if (moveDirection[0] < 0) return SpriteDirection.Left;
    if (moveDirection[0] > 0) return SpriteDirection.Right;
  }

  if (dx < dy) {
    if (moveDirection[1] < 0) return SpriteDirection.Up;
    if (moveDirection[1] > 0) return SpriteDirection.Down;
  }

  if (moveDirection[1] < 0) return SpriteDirection.Up;
  if (moveDirection[1] > 0) return SpriteDirection.Down;
  if (moveDirection[0] < 0) return SpriteDirection.Left;
  if (moveDirection[0] > 0) return SpriteDirection.Right;
  return previous;
}
