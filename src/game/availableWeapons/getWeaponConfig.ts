import { SpriteDirection } from '../sprite/SpriteDirection';
import { config as sword } from './sword';
import { WeaponConfig, AttackSprite } from './WeaponConfig';
import { WeaponType } from './WeaponType';

const configs: Record<WeaponType, WeaponConfig> = {
  sword,
};

export function getWeaponConfig(weaponType: WeaponType) {
  return configs[weaponType];
}

export function getWeaponAttackSprite(props: {
  weaponType: WeaponType;
  spriteDirection: SpriteDirection;
}): AttackSprite {
  return getWeaponConfig(props.weaponType).sprites.attackSprites[
    props.spriteDirection
  ];
}
