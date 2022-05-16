import { diff } from '@/vector2d/diff';
import { Vector2d } from '@/vector2d/Vector2d';
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
