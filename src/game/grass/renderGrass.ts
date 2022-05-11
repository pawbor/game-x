import { Camera, transformPosition } from '../camera';
import { getImage } from '../imageCache';
import { Grass } from './Grass';
import { sprites } from './sprites';

export function renderGrass(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  grass: Grass;
}) {
  const { canvasCtx, camera, grass } = props;
  const { position, tileId } = grass;
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  const img = getImage({ src: selectGrass(tileId) });
  canvasCtx.drawImage(img, x, y);
}

function selectGrass(tileId: string) {
  switch (tileId) {
    case '8':
      return sprites.grass1;
    case '9':
      return sprites.grass2;
    case '10':
      return sprites.grass3;
    default:
      throw new Error(`Unsupported grass tile: ${tileId}`);
  }
}
