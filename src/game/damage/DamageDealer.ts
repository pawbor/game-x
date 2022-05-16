import { HitBox } from '@/game/hitBox/HitBox';

export interface DamageDealer {
  attackPower: number;
  hitBox: HitBox;
}
