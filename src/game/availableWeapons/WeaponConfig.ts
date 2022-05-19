import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { HitBox } from '@/game/hitBox/HitBox';
import { SpriteDirection } from '@/game/sprite/SpriteDirection';
import { Vector2d } from '@/vector2d/Vector2d';

export interface WeaponConfig {
  sprites: WeaponSprites;
  attackPower: number;
  attackDuration: number;
  knockBackPower: KnockBackRatio;
}

export interface WeaponSprites {
  attackSprites: AttackSprites;
  inventorySprite: string;
}

export type AttackSprites = Record<SpriteDirection, AttackSprite>;

export interface AttackSprite {
  spriteSrc: string;
  spriteOffset: Vector2d;
  spriteHitBox: HitBox;
}
