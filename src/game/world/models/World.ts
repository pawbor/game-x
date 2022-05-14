import { Camera } from '@/game/camera';
import { Clock } from '@/game/clock/Clock';
import { Enemy } from '@/game/enemy/models';
import { Grass } from '@/game/grass/models';
import { Boundary } from '@/game/ground/models';
import { Player } from '@/game/player/models';
import { StaticObject } from '@/game/staticObject/models';
import { WeaponAttack } from '@/game/weaponAttack/WeaponAttack';

export interface World {
  weaponAttacks: WeaponAttack[];
  clock: Clock;
  camera: Camera;
  player: Player;
  enemies: Enemy[];
  boundaries: Boundary[];
  grasses: Grass[];
  staticObjects: StaticObject[];
}
