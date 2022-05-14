import { HitBox } from "@/game/hitBox";

export interface Damageable {
  health: number;
  invincible: boolean;
  hitBox: HitBox;
}