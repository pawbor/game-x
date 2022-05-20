import { HitBox } from './HitBox';

export function testCollision(b1: HitBox, b2: HitBox) {
  return testXDist(b1, b2) && testYDist(b1, b2);
}

function testYDist(b1: HitBox, b2: HitBox) {
  const yDist = Math.abs(b1.center[1] - b2.center[1]);
  const yLimit = (b1.height + b2.height) / 2;

  return yDist < yLimit;
}

function testXDist(b1: HitBox, b2: HitBox) {
  const xDist = Math.abs(b1.center[0] - b2.center[0]);
  const xLimit = (b1.width + b2.width) / 2;

  return xDist < xLimit;
}
