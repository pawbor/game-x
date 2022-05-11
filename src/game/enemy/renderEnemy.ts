import { forceNonNullable } from '../../assertions';
import { Camera, transformPosition } from '../camera';
import { getImage } from '../imageCache';
import { sprites } from './sprites';
import { Enemy } from './Enemy';
import { EnemyType } from './EnemyType';

const imageOffsets: Record<EnemyType, number> = {
  [EnemyType.Bamboo]: 0,
  [EnemyType.Spirit]: 0,
  [EnemyType.Raccoon]: -150,
  [EnemyType.Squid]: 0,
};

export function renderEnemy(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  enemy: Enemy;
}) {
  const { canvasCtx, camera, enemy } = props;
  const { position } = enemy;
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  const img = getImage({ src: selectSprite(enemy) });
  canvasCtx.drawImage(img, x, y + imageOffsets[enemy.type]);
}

function selectSprite(enemy: Enemy): string {
  const frames = sprites[enemy.type][enemy.state];
  const x = Math.floor(performance.now() / 200) % frames.length;
  return forceNonNullable(frames[x], `Missing frame ${x}`);
}
