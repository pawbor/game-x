import { Enemy } from '@/game/enemy/models';
import { Grass } from '@/game/grass/models';
import { Boundary } from '@/game/ground/models';
import { Player } from '@/game/player/models';
import { StaticObject } from '@/game/staticObject/models';

export interface World {
  player: Player;
  enemies: Enemy[];
  boundaries: Boundary[];
  grass: Grass[];
  staticObjects: StaticObject[];
}
