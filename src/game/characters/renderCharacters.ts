import { Vector2d } from '../../vector2d';
import { Camera, transformPosition } from '../camera';
import { TileSize } from '../tile';

export function renderCharacters(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
}) {
  const { canvasCtx, camera } = props;
  const position: Vector2d = [0, 0];
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  canvasCtx.fillRect(x, y, TileSize, TileSize);
}
