import { Camera } from '@/game/camera/Camera';
import { transformPosition } from '@/game/camera/transformPosition';
import { getImage } from '@/game/imageCache/getImage';
import groundSrc from './ground.png';

export function renderGround(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
}) {
  const { canvasCtx, camera } = props;
  const img = getImage({ src: groundSrc });
  const [x, y] = transformPosition({ position: [0, 0], canvasCtx, camera });
  canvasCtx.drawImage(img, x, y);
}
