import { Player } from '../player';
import { Camera } from './Camera';

export function followPlayer(props: { player: Player; camera: Camera }) {
  const { player, camera } = props;
  const [x, y] = player.position;
  camera.center[0] = x;
  camera.center[1] = y;
}
