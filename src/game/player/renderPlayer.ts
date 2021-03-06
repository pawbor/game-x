import { forceNonNullable } from '@/assertions/nonNullable';
import { Camera } from '@/game/camera/Camera';
import { transformPosition } from '@/game/camera/transformPosition';
import { Clock } from '@/time/Clock';
import { getImage } from '@/game/imageCache/getImage';
import { Player } from '@/game/player/Player';
import { sprites } from '@/game/player/sprites';
import { invincibleRenderDecorator } from '@/game/damage/invincibleRenderDecorator';

export function renderPlayer(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  player: Player;
  clock: Clock;
}) {
  const { canvasCtx, camera, player, clock } = props;
  const { position } = player;
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  const img = getImage({ src: selectSprite(player, clock) });
  const decorator = invincibleRenderDecorator({ damageable: player });
  const renderer = decorator(() => {
    canvasCtx.drawImage(img, x, y);
  });
  renderer({ canvasCtx });
}

function selectSprite(player: Player, clock: Clock): string {
  const animationElapsed = clock.timePassed() - player.animationStart;
  const animationFrames = sprites[player.state][player.spriteDirection];
  const frameIndex =
    Math.floor(animationElapsed / 200) % animationFrames.length;

  return forceNonNullable(
    animationFrames[frameIndex],
    `Missing frame "${frameIndex}"`
  );
}
