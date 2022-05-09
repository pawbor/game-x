import { Vector2d } from '../../vector2d';
import { HitBox } from '../hitBox';
import { playerHitBox } from './playerHitBox';

export enum PlayerState {
  Idle = 'idle',
  Walk = 'walk',
  Attack = 'attack',
}

export enum SpriteDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export interface Player {
  position: Vector2d;
  hitBox: HitBox;
  state: PlayerState;
  spriteDirection: SpriteDirection;
}

export function create(): Player {
  const position: Vector2d = [0, 0];
  const hitBox = playerHitBox(position);
  return {
    position,
    hitBox,
    state: PlayerState.Idle,
    spriteDirection: SpriteDirection.Down,
  };
}
