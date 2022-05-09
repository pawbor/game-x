import { Camera, transformPosition } from '../camera';
import { getImage } from '../imageCache';
import grass1Src from './assets/grass1.png';
import grass2Src from './assets/grass2.png';
import grass3Src from './assets/grass3.png';
import { Grass } from './Grass';

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
      return grass1Src;
    case '9':
      return grass2Src;
    case '10':
      return grass3Src;
    default:
      throw new Error(`Unsupported grass tile: ${tileId}`);
  }
}
