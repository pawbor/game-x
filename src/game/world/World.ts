import { Enemy } from '../enemy/models';
import { Grass } from '../grass/models';
import { Boundary } from '../ground';
import { Player } from '../player/models';
import { StaticObject } from '../staticObject/models';

export interface World {
  player: Player;
  enemies: Enemy[];
  boundaries: Boundary[];
  grass: Grass[];
  staticObjects: StaticObject[];
}
