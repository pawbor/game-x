import { forceNonNullable } from '@/assertions';
import { Camera, transformPosition } from '@/game/camera';
import { CharacterState } from '@/game/character';
import { getImage } from '@/game/imageCache';
import { Player } from '@/game/player/models';
import { sprites } from '@/game/player/sprites';

export function renderPlayer(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  player: Player;
}) {
  const { canvasCtx, camera, player } = props;
  const { position } = player;
  const [x, y] = transformPosition({ position, canvasCtx, camera });
  const img = getImage({ src: selectSprite(player) });
  canvasCtx.drawImage(img, x, y);
}

function selectSprite(player: Player): string {
  if (player.state === CharacterState.Walk) {
    const x = Math.floor(performance.now() / 200) % 4;
    return forceNonNullable(
      sprites[player.state][player.spriteDirection][x],
      `Missing frame "${x}"`
    );
  }
  return sprites[player.state][player.spriteDirection];
}
