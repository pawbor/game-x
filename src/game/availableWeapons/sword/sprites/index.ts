import {
  AttackSprite,
  WeaponSprites,
} from '@/game/availableWeapons/WeaponConfig';
import { create } from '@/game/hitBox';
import downSrc from './down.png';
import fullSrc from './full.png';
import leftSrc from './left.png';
import rightSrc from './right.png';
import upSrc from './up.png';

const swordWidth = 20;
const swordLength = 45;

export const sprites: WeaponSprites = {
  attackSprites: {
    down: downSprite(),
    up: upSprite(),
    left: leftSprite(),
    right: rightSprite(),
  },
  inventorySprite: fullSrc,
};

function downSprite(): AttackSprite {
  const width = swordWidth;
  const height = swordLength;
  const left = 0;
  const top = 0;
  return {
    spriteSrc: downSrc,
    spriteOffset: [left, top],
    spriteHitBox: create({ left, top, width, height }),
  };
}

function upSprite(): AttackSprite {
  const width = swordWidth;
  const height = swordLength;
  const left = 0;
  const top = -height;
  return {
    spriteSrc: upSrc,
    spriteOffset: [left, top],
    spriteHitBox: create({ left, top, width, height }),
  };
}

function leftSprite(): AttackSprite {
  const width = swordLength;
  const height = swordWidth;
  const left = -width;
  const top = -8;
  return {
    spriteSrc: leftSrc,
    spriteOffset: [left, top],
    spriteHitBox: create({ left, top, width, height }),
  };
}

function rightSprite(): AttackSprite {
  const width = swordLength;
  const height = swordWidth;
  const left = 0;
  const top = -8;
  return {
    spriteSrc: rightSrc,
    spriteOffset: [left, top],
    spriteHitBox: create({ left, top, width, height }),
  };
}
