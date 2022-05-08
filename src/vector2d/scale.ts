import { Vector2d } from './Vector2d';

export function scale(v1: Vector2d, s: number): Vector2d {
  return [v1[0] * s, v1[1] * s];
}
