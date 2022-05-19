import { WeaponConfig } from '@/game/availableWeapons/WeaponConfig';
import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { sprites } from './sprites';

export const config: WeaponConfig = {
  sprites,
  attackDuration: 200,
  attackPower: 20,
  knockBackPower: KnockBackRatio.validate(0.5),
};
