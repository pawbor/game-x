import { create, HitBox } from '@/game/hitBox/HitBox';
import { testCollision } from '@/game/hitBox/testCollision';
import { sum } from '@/vector2d/sum';
import { Vector2d } from '@/vector2d/Vector2d';

export function avoidCollision(props: {
  movingHitBox: HitBox;
  movement: Vector2d;
  obstacles: HitBox[];
}): Vector2d {
  const safeX = safeHorizontal(props);

  const { movement } = props;
  const safeY = safeVertical({ ...props, movement: [safeX, movement[1]] });

  return [safeX, safeY];
}

function safeHorizontal(props: {
  movingHitBox: HitBox;
  movement: Vector2d;
  obstacles: HitBox[];
}): number {
  const { movingHitBox, movement, obstacles } = props;
  const moveX = movement[0];

  if (moveX === 0) {
    return moveX;
  }

  const testBox = movedHitBox({ hitBox: movingHitBox, movement: [moveX, 0] });

  const collisions = obstacles.filter((obstacle) =>
    testCollision(obstacle, testBox)
  );

  if (collisions.length < 1) return moveX;

  if (moveX > 0) {
    const candidates = collisions.map(
      (obstacle) => obstacle.left - movingHitBox.right
    );
    return Math.max(0, Math.min(...candidates, moveX));
  }

  const candidates = collisions.map(
    (obstacle) => obstacle.right - movingHitBox.left
  );
  return Math.min(0, Math.max(...candidates, moveX));
}

function safeVertical(props: {
  movingHitBox: HitBox;
  movement: Vector2d;
  obstacles: HitBox[];
}): number {
  const { movingHitBox, movement, obstacles } = props;
  const moveY = movement[1];

  if (moveY === 0) {
    return moveY;
  }

  const testBox = movedHitBox({ hitBox: movingHitBox, movement: [0, moveY] });

  const collisions = obstacles.filter((obstacle) =>
    testCollision(obstacle, testBox)
  );

  if (collisions.length < 1) return moveY;

  if (moveY > 0) {
    const candidates = collisions.map(
      (obstacle) => obstacle.top - movingHitBox.bottom
    );
    return Math.max(0, Math.min(...candidates, moveY));
  }

  const candidates = collisions.map(
    (obstacle) => obstacle.bottom - movingHitBox.top
  );
  return Math.min(0, Math.max(...candidates, moveY));
}

function movedHitBox(props: { hitBox: HitBox; movement: Vector2d }): HitBox {
  const { hitBox, movement } = props;
  const { leftTop, width, height } = hitBox;
  const [left, top] = sum(movement, leftTop);
  return create({ left, top, width, height });
}
