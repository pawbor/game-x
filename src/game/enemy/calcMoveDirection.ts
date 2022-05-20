import { Enemy } from '@/game/enemy/Enemy';
import { calcDistance } from '@/game/hitBox/calcDistance';
import { Player } from '@/game/player/Player';
import { diff } from '@/vector2d/diff';
import { normalize } from '@/vector2d/normalize';
import { Vector2d } from '@/vector2d/Vector2d';

export function calcMoveDirection(props: {
  player: Player;
  enemy: Enemy;
}): Vector2d {
  const { player, enemy } = props;
  const distance = calcDistance(player.hitBox, enemy.hitBox);
  if (distance <= 0 || distance >= 300) {
    return [0, 0];
  }

  return normalize(diff(player.hitBox.center, enemy.hitBox.center));
}
