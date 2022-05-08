import { Vector2d } from '../../vector2d';
import { HitBox } from '../hitBox';
import { playerHitBox } from './playerHitBox';

export interface Player {
  position: Vector2d;
  hitBox: HitBox;
}

export function create(): Player {
  const position: Vector2d = [0, 0];
  const hitBox = playerHitBox(position);
  return {
    position,
    hitBox,
  };
}
