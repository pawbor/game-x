import { CharacterState } from '@/game/character/CharacterState';
import { HitBox } from '@/game/hitBox/HitBox';
import { calcMovement } from '@/game/movement/calcMovement';
import { MovingObject } from '@/game/movement/MovingObject';
import { Player } from '@/game/player/Player';
import { playerHitBox } from '@/game/player/playerHitBox';
import { Clock } from '@/time/Clock';
import { magnitude } from '@/vector2d/magnitude';
import { scale } from '@/vector2d/scale';
import { sum } from '@/vector2d/sum';
import { Vector2d } from '@/vector2d/Vector2d';
import { calcSpriteDirection } from './calcSpriteDirection';
import { updateState } from './updateState';

const speed = 0.5;

export function movePlayer(props: {
  player: Player;
  moveDirection: Vector2d;
  clock: Clock;
  obstacles: HitBox[];
}) {
  const { player, moveDirection, clock, obstacles } = props;

  const movingObject: MovingObject = {
    hitBox: player.hitBox,
    velocity: scale(moveDirection, speed),
  };
  const move = calcMovement({ clock, movingObject, obstacles });
  updatePlayer({ player, move, moveDirection, clock });
}

function updatePlayer(props: {
  player: Player;
  move: Vector2d;
  moveDirection: Vector2d;
  clock: Clock;
}) {
  const { player, move, moveDirection, clock } = props;

  player.position = sum(player.position, move);
  player.hitBox = playerHitBox(player.position);
  updateState({ player, state: calcCharacterState(move), clock });
  player.spriteDirection = calcSpriteDirection({
    move,
    moveDirection,
    previous: player.spriteDirection,
  });
}

function calcCharacterState(move: Vector2d) {
  const distance = magnitude(move);
  return distance === 0 ? CharacterState.Idle : CharacterState.Walk;
}
