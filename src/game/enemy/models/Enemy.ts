import { CharacterState } from '@/game/character';
import { Damageable } from '@/game/damage/Damageable';
import { Vector2d } from '@/vector2d';
import { EnemyType } from './EnemyType';

export interface Enemy extends Damageable {
  type: EnemyType;
  position: Vector2d;
  state: CharacterState;
  animationStart: number;
}
