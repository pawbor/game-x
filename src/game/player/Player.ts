import { Vector2d } from '../../vector2d';
import { CharacterState } from '../character';
import { HitBox } from '../hitBox';
import { SpriteDirection } from '../sprite';
import { playerHitBox } from './playerHitBox';

export interface Player {
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
  spriteDirection: SpriteDirection;
}

export function create(): Player {
  const position: Vector2d = [0, 0];
  const hitBox = playerHitBox(position);
  return {
    position,
    hitBox,
    state: CharacterState.Idle,
    spriteDirection: SpriteDirection.Down,
  };
}

export function updatePosition(props: { player: Player; position: Vector2d }) {
  const { player, position } = props;
  player.position = position;
  player.hitBox = playerHitBox(position);
}
