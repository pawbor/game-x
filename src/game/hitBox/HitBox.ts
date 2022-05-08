import { Vector2d } from '../../vector2d';

export interface HitBox {
  center: Vector2d;
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

  function fromCenter(props: Center): HitBox {
    const { width, height, center } = props;
    return {
      left: center[0] - width / 2,
      right: center[0] + width / 2,
      top: center[1] - height / 2,
      bottom: center[1] + height / 2,
      width,
      height,
      center,
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
}
