import { Vector2d } from '@/vector2d';

export interface Camera {
  center: Vector2d;
}

export function createCamera(): Camera {
  return { center: [0, 0] };
}
