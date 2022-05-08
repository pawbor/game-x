import { Vector2d } from '../../vector2d';
import { HitBox, testCollision } from '../hitBox';
import { Player } from './Player';
import { playerHitBox } from './playerHitBox';

export function avoidCollision(props: {
  player: Player;
  move: Vector2d;
  obstacles: HitBox[];
}): Vector2d {
  const { player, move, obstacles } = props;
  const { position, hitBox } = player;

  return [safeHorizontal(), safeVertical()];

  function safeHorizontal(): number {
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

  function safeVertical(): number {
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
}
