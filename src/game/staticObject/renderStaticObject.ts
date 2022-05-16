import { Camera } from '@/game/camera/Camera';
import { transformPosition } from '@/game/camera/transformPosition';
import { getImage } from '@/game/imageCache/getImage';
import { StaticObject } from '@/game/staticObject/StaticObject';
import { selectSprite } from '@/game/staticObject/sprites';
import { sum } from '@/vector2d/sum';

export function renderStaticObject(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  staticObject: StaticObject;
}) {
  const { canvasCtx, camera, staticObject } = props;
  const { position, tileId } = staticObject;
  const { src, imgOffset } = selectSprite(tileId);
  const [x, y] = transformPosition({
    position: sum(position, imgOffset),
    canvasCtx,
    camera,
  });
  const img = getImage({ src });
  canvasCtx.drawImage(img, x, y);
}
