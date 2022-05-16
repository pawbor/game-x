import { EnemyType } from '@/game/availableEnemies/EnemyType';
import { CharacterState } from '@/game/character/CharacterState';
import { Damageable } from '@/game/damage/Damageable';
import { Vector2d } from '@/vector2d/Vector2d';

export interface Enemy extends Damageable {
  type: EnemyType;
  position: Vector2d;
  state: CharacterState;
  animationStart: number;
}
