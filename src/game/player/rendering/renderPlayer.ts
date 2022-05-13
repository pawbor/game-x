import { forceNonNullable } from '@/assertions';
import { Camera, transformPosition } from '@/game/camera';
import { Clock } from '@/game/clock/Clock';
import { getImage } from '@/game/imageCache';
import { Player } from '@/game/player/models';
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
