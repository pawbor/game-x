import { Vector2d } from './Vector2d';

export function magnitude(vector: Vector2d) {
  const [x, y] = vector;
  return Math.sqrt(x * x + y * y);
}
