import { WeaponType } from '@/game/availableWeapons/WeaponType';
import { DamageDealer } from '@/game/damage/DamageDealer';
import { SpriteDirection } from '@/game/sprite/SpriteDirection';
import { Vector2d } from '@/vector2d';

export interface WeaponAttack extends DamageDealer {
  type: WeaponType;
  position: Vector2d;
  spriteDirection: SpriteDirection;
}
