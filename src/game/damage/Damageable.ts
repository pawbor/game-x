import { HitBox } from '@/game/hitBox/HitBox';
import { Timer } from '@/time/Timer';

export interface Damageable {
  health: number;
  invincibilityDuration: number;
  invincibilityTimer: Timer | undefined;
  hitBox: HitBox;
}
