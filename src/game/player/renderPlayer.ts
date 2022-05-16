import { forceNonNullable } from '@/assertions/nonNullable';
import { Camera } from '@/game/camera/Camera';
import { transformPosition } from '@/game/camera/transformPosition';
import { Clock } from '@/game/clock/Clock';
import { getImage } from '@/game/imageCache/getImage';
import { Player } from '@/game/player/Player';
import { sprites } from '@/game/player/sprites';

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
  canvasCtx.drawImage(img, x, y);
}

function selectSprite(player: Player, clock: Clock): string {
  const animationElapsed = clock.now() - player.animationStart;
  const animationFrames = sprites[player.state][player.spriteDirection];
  const frameIndex =
    Math.floor(animationElapsed / 200) % animationFrames.length;

  return forceNonNullable(
    animationFrames[frameIndex],
    `Missing frame "${frameIndex}"`
  );
}
