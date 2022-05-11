import { sum } from '../../vector2d';
import { Camera, transformPosition } from '../camera';
import { getImage } from '../imageCache';
import { selectSprite } from './sprites';
import { StaticObject } from './StaticObject';

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
