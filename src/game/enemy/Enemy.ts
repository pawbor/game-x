import { EnemyType } from '@/game/availableEnemies/EnemyType';
import { CharacterState } from '@/game/character/CharacterState';
import { Damageable } from '@/game/damage/Damageable';
import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { Vector2d } from '@/vector2d/Vector2d';

export interface Enemy extends Damageable {
  knockBackPower: KnockBackRatio;
  attackPower: number;
  type: EnemyType;
  position: Vector2d;
  state: CharacterState;
  animationStart: number;
}
