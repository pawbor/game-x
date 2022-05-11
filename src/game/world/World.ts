import { Enemy } from '../enemy';
import { Grass } from '../grass';
import { Boundary } from '../ground';
import { Player } from '../player';
import { StaticObject } from '../staticObjects';

export interface World {
  player: Player;
  enemies: Enemy[];
  boundaries: Boundary[];
  grass: Grass[];
  staticObjects: StaticObject[]
}