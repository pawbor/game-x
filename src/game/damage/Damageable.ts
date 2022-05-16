import { HitBox } from "@/game/hitBox/HitBox";

export interface Damageable {
  health: number;
  invincible: boolean;
  hitBox: HitBox;
}