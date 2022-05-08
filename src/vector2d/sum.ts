import { Vector2d } from './Vector2d';

export function sum(v1: Vector2d, v2: Vector2d): Vector2d {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}
