import { Camera } from '@/game/camera/Camera';
import { transformPosition } from '@/game/camera/transformPosition';
import { Grass } from '@/game/grass/Grass';
import { sprites } from '@/game/grass/sprites';
import { getImage } from '@/game/imageCache/getImage';

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
