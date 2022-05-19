import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';

export interface DamageDealer {
  hitBox: HitBox;
  attackDirection: Vector2d;
  attackPower: number;
  knockBackPower: KnockBackRatio;
}
