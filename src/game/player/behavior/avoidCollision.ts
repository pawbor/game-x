import { HitBox, testCollision } from '@/game/hitBox';
import { Player } from '@/game/player/models';
import { playerHitBox } from '@/game/player/sprites';
import { Vector2d } from '@/vector2d';

export function avoidCollision(props: {
  player: Player;
  move: Vector2d;
  obstacles: HitBox[];
}): Vector2d {
  const safeX = safeHorizontal(props);

  const { move } = props;
  const safeY = safeVertical({ ...props, move: [safeX, move[1]] });

  return [safeX, safeY];
}

function safeHorizontal(props: {
  player: Player;
  move: Vector2d;
  obstacles: HitBox[];
}): number {
  const { player, move, obstacles } = props;
  const { position, hitBox } = player;
  const moveX = move[0];

  if (moveX === 0) {
    return moveX;
  }

  const testBox = playerHitBox([position[0] + moveX, position[1]]);

  const collisions = obstacles.filter((obstacle) =>
    testCollision(obstacle, testBox)
  );

  if (moveX > 0) {
    return Math.min(
      ...collisions.map((obstacle) => obstacle.left - hitBox.right),
      moveX
    );
  }

  return Math.max(
    ...collisions.map((obstacle) => obstacle.right - hitBox.left),
    moveX
  );
}

function safeVertical(props: {
  player: Player;
  move: Vector2d;
  obstacles: HitBox[];
}): number {
  const { player, move, obstacles } = props;
  const { position, hitBox } = player;
  const moveY = move[1];

  if (moveY === 0) {
    return moveY;
  }

  const testBox = playerHitBox([position[0], position[1] + moveY]);

  const collisions = obstacles.filter((obstacle) =>
    testCollision(obstacle, testBox)
  );

  if (moveY > 0) {
    return Math.min(
      ...collisions.map((obstacle) => obstacle.top - hitBox.bottom),
      moveY
    );
  }

  return Math.max(
    ...collisions.map((obstacle) => obstacle.bottom - hitBox.top),
    moveY
  );
}
