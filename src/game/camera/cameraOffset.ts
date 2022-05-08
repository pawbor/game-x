import { diff, Vector2d } from '../../vector2d';
import { Camera } from './Camera';

export function cameraOffset(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
}): Vector2d {
  const { canvasCtx, camera } = props;
  return diff(camera.center, [
    canvasCtx.canvas.width / 2,
    canvasCtx.canvas.height / 2,
  ]);
}
