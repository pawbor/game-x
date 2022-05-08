import { Camera, transformPosition } from '../camera';
import { TileSize } from '../tile';
import { Grass } from './Grass';

export function renderGrass(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  grass: Grass;
}) {
  const { canvasCtx, camera, grass } = props;
  const { position } = grass;
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  canvasCtx.fillStyle = 'green';
  canvasCtx.fillRect(x, y, TileSize, TileSize);
}
