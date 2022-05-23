import { WeaponType } from '@/game/availableWeapons/WeaponType';
import { CharacterState } from '@/game/character/CharacterState';
import { Damageable } from '@/game/damage/Damageable';
import { HitBox } from '@/game/hitBox/HitBox';
import { KeyboardState } from '@/game/keyboard';
import { SpriteDirection } from '@/game/sprite/SpriteDirection';
import { Vector2d } from '@/vector2d/Vector2d';

export interface Player extends Damageable {
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
  spriteDirection: SpriteDirection;
  keyboardState: KeyboardState;
  animationStart: number;
  wieldedWeapon: WeaponType;
}
