import { Camera, transformPosition } from '../camera';
import groundSrc from './ground.png';

export function renderGround(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
}) {
  const { canvasCtx, camera } = props;
  const img = new Image();
  img.src = groundSrc;
  const [x, y] = transformPosition({ position: [0, 0], canvasCtx, camera });
  canvasCtx.drawImage(img, x, y);
}
