import { Camera, transformPosition } from '@/game/camera';
import { getImage } from '@/game/imageCache';
import { StaticObject } from '@/game/staticObject/models';
import { selectSprite } from '@/game/staticObject/sprites';
import { sum } from '@/vector2d';

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
