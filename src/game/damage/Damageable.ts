import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { HitBox } from '@/game/hitBox/HitBox';
import { Timer } from '@/time/Timer';
import { Vector2d } from '@/vector2d/Vector2d';

interface ActiveKnockBack {
  timer: Timer;
  velocity: Vector2d;
}

export interface Damageable {
  health: number;
  hitBox: HitBox;
  invincibilityDuration: number;
  invincibilityTimer: Timer | undefined;
  knockBackResistance: KnockBackRatio;
  knockBack: ActiveKnockBack | undefined;
}
