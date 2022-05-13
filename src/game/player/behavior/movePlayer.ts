import { CharacterState } from '@/game/character';
import { HitBox } from '@/game/hitBox';
import { Player } from '@/game/player/models';
import { playerHitBox } from '@/game/player/sprites';
import { Clock } from '@/game/clock/Clock';
import { magnitude, scale, sum, Vector2d } from '@/vector2d';
import { avoidCollision } from './avoidCollision';
import { calcSpriteDirection } from './calcSpriteDirection';
import { updateState } from './updateState';

const speed = 0.5;

export function movePlayer(props: {
  player: Player;
  moveDirection: Vector2d;
  clock: Clock;
  obstacles: HitBox[];
}) {
  const { player, moveDirection, clock } = props;
  const move = calcMove(props);
  updatePlayer({ player, move, moveDirection, clock });
}

function calcMove(props: {
  player: Player;
  moveDirection: Vector2d;
  clock: Clock;
  obstacles: HitBox[];
}) {
  const { moveDirection, clock, player, obstacles } = props;
  const tickDiff = clock.ticksDiff();
  const move = scale(moveDirection, speed * tickDiff);

  return avoidCollision({ player, move, obstacles });
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
