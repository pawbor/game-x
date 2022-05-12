import { PressedKeys } from '@/game/keyboard';
import { normalize, Vector2d } from '@/vector2d';
import { KeyMapping } from './KeyMapping';

export function calcMoveDirection(pressedKeys: PressedKeys) {
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
