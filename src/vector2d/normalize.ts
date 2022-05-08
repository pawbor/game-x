import { magnitude } from './magnitude';
import { Vector2d } from './Vector2d';

export function normalize(vector: Vector2d): Vector2d {
  const [x, y] = vector;
  const mag = magnitude(vector);
  return mag === 0 ? vector : [x / mag, y / mag];
}
