import { Camera, transformPosition } from '../camera';
import { TileSize } from '../tile';
import { Player } from './Player';

export function renderPlayer(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  player: Player;
}) {
  const { canvasCtx, camera, player } = props;
  const { position } = player;
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  canvasCtx.fillStyle = 'blue';
  canvasCtx.fillRect(x, y, TileSize, TileSize);
}
