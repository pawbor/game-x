import { CharacterState } from '@/game/character';
import { HitBox } from '@/game/hitBox';
import { KeyboardState } from '@/game/keyboard';
import { Vector2d } from '@/vector2d';
import { SpriteDirection } from '@/game/sprite/SpriteDirection';
import { WeaponType } from '@/game/availableWeapons/WeaponType';

export interface Player {
  position: Vector2d;
  hitBox: HitBox;
  state: CharacterState;
  spriteDirection: SpriteDirection;
  keyboardState: KeyboardState;
  animationStart: number;
  wieldedWeapon: WeaponType;
}
