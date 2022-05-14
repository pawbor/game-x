import { WeaponType } from '@/game/availableWeapons/WeaponType';
import { create } from '@/game/hitBox';
import { Player } from '@/game/player/models';
import { SpriteDirection } from '@/game/sprite/SpriteDirection';
import { Vector2d } from '@/vector2d';
import { getWeaponAttackSprite } from '../availableWeapons/getWeaponConfig';
import { WeaponAttack } from './WeaponAttack';

export function createWeaponAttack(props: { player: Player }): WeaponAttack {
  const { player } = props;
  const { wieldedWeapon: type, spriteDirection } = player;
  const position = calcPosition(player);

  return {
    type,
    position,
    hitBox: weaponHitBox({ type, position, spriteDirection }),
    spriteDirection,
    attackPower: 20
  };
}

function calcPosition(player: Player): Vector2d {
  const { spriteDirection, hitBox } = player;
  switch (spriteDirection) {
    case SpriteDirection.Down:
      return [hitBox.center[0], hitBox.bottom];
    case SpriteDirection.Up:
      return [hitBox.center[0], hitBox.top];
    case SpriteDirection.Right:
      return [hitBox.right, hitBox.center[1]];
    case SpriteDirection.Left:
      return [hitBox.left, hitBox.center[1]];
  }
}

function weaponHitBox(props: {
  type: WeaponType;
  position: Vector2d;
  spriteDirection: SpriteDirection;
}) {
  const { type, position, spriteDirection } = props;
  const { left, top, width, height } = getWeaponAttackSprite({
    weaponType: type,
    spriteDirection,
  }).spriteHitBox;

  return create({
    left: position[0] + left,
    top: position[1] + top,
    width,
    height,
  });
}
