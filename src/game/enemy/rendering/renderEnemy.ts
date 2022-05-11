import { forceNonNullable } from '@/assertions';
import { Camera, transformPosition } from '@/game/camera';
import { Enemy } from '@/game/enemy/models';
import { selectEnemySprites, selectSpriteOffset } from '@/game/enemy/sprites';
import { getImage } from '@/game/imageCache';
import { sum } from '@/vector2d';

export function renderEnemy(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  enemy: Enemy;
}) {
  const { canvasCtx, camera, enemy } = props;
  const { position } = enemy;
  const spriteOffset = selectSpriteOffset(enemy);
  const [x, y] = transformPosition({
    position: sum(position, spriteOffset),
    canvasCtx,
    camera,
  });
  const img = getImage({ src: selectSprite(enemy) });
  canvasCtx.drawImage(img, x, y);
}

function selectSprite(enemy: Enemy): string {
  const frames = selectEnemySprites(enemy);
  const x = Math.floor(performance.now() / 200) % frames.length;
  return forceNonNullable(frames[x], `Missing frame ${x}`);
}
