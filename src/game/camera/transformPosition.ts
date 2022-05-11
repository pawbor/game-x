import { diff, Vector2d } from '@/vector2d';
import { Camera } from './Camera';
import { cameraOffset } from './cameraOffset';

export function transformPosition(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  position: Vector2d;
}) {
  const { canvasCtx, camera, position } = props;
  return diff(position, cameraOffset({ canvasCtx, camera }));
}
