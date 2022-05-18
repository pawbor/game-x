import { HitBox } from '@/game/hitBox/HitBox';
import { Timer } from '@/time/Timer';

export interface Damageable {
  health: number;
  invincibilityTimer: Timer | undefined;
  hitBox: HitBox;
}
