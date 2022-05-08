import { normalize, Vector2d } from '../vector2d';

const speed = 0.5;

export const position: Vector2d = [10, 10];

export function playerMove(props: {
  pressedKeys: Record<string, boolean>;
  timeDiff: number;
}) {
  const { pressedKeys, timeDiff } = props;
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

  const normalized = normalize(direction);
  position[0] += speed * timeDiff * normalized[0];
  position[1] += speed * timeDiff * normalized[1];
}
