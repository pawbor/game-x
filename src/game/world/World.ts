import { Enemy } from '../enemy/models';
import { Grass } from '../grass';
import { Boundary } from '../ground';
import { Player } from '../player/models';
import { StaticObject } from '../staticObjects';

export interface World {
  player: Player;
  enemies: Enemy[];
  boundaries: Boundary[];
  grass: Grass[];
  staticObjects: StaticObject[];
}
