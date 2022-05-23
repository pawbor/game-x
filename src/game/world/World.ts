import { Camera } from '@/game/camera/Camera';
import { Clock } from '@/time/Clock';
import { Enemy } from '@/game/enemy/Enemy';
import { Grass } from '@/game/grass/Grass';
import { Boundary } from '@/game/ground/Boundary';
import { Player } from '@/game/player/Player';
import { StaticObject } from '@/game/staticObject/StaticObject';
import { WeaponAttack } from '@/game/weaponAttack/WeaponAttack';
import { DamageDealer } from '@/game/damage/DamageDealer';

export interface World {
  enemyAttacks: DamageDealer[];
  weaponAttacks: WeaponAttack[];
  clock: Clock;
  camera: Camera;
  player: Player;
  enemies: Enemy[];
  boundaries: Boundary[];
  grasses: Grass[];
  staticObjects: StaticObject[];
}
