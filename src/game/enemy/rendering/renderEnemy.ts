import { forceNonNullable } from '@/assertions';
import { Camera, transformPosition } from '@/game/camera';
import { Clock } from '@/game/clock/Clock';
import { Enemy } from '@/game/enemy/models';
import { selectEnemySprites, selectSpriteOffset } from '@/game/enemy/sprites';
import { getImage } from '@/game/imageCache';
import { sum } from '@/vector2d';

export function renderEnemy(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  enemy: Enemy;
  clock: Clock;
}) {
  const { canvasCtx, camera, enemy, clock } = props;
  const { position } = enemy;
  const spriteOffset = selectSpriteOffset(enemy);
  const [x, y] = transformPosition({
    position: sum(position, spriteOffset),
    canvasCtx,
    camera,
  });
  const img = getImage({ src: selectSprite(enemy, clock) });
  canvasCtx.drawImage(img, x, y);
}

function selectSprite(enemy: Enemy, clock: Clock): string {
  const animationFrames = selectEnemySprites(enemy);
  const animationElapsed = clock.now() - enemy.animationStart;
  const frameIndex =
    Math.floor(animationElapsed / 200) % animationFrames.length;

  return forceNonNullable(
    animationFrames[frameIndex],
    `Missing frame ${frameIndex}`
  );
}
