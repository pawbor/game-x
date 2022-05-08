import { Player } from '../player';
import { Camera } from './Camera';

export function followPlayer(props: { player: Player; camera: Camera }) {
  const { player, camera } = props;
  camera.center[0] = player.position[0];
  camera.center[1] = player.position[1];
}
