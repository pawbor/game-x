import { Vector2d } from '@/vector2d/Vector2d';

export interface HitBox {
  center: Vector2d;
  leftTop: Vector2d;
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

type TLCorner = Pick<HitBox, 'top' | 'left' | 'width' | 'height'>;
type Center = Pick<HitBox, 'center' | 'width' | 'height'>;
type CreateProps = TLCorner | Center;

export function create(props: CreateProps): HitBox {
  if ('center' in props) {
    return fromCenter(props);
  }

  return fromTopLeft(props);
}

function fromCenter(props: Center): HitBox {
  const { width, height, center } = props;
  const left = center[0] - width / 2;
  const top = center[1] - height / 2;

  return {
    left,
    right: center[0] + width / 2,
    top,
    bottom: center[1] + height / 2,
    width,
    height,
    center,
    leftTop: [left, top],
  };
}

function fromTopLeft(props: TLCorner): HitBox {
  const { width, height, top, left } = props;
  return fromCenter({
    width,
    height,
    center: [left + width / 2, top + height / 2],
  });
}
