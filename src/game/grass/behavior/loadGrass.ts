import { Grass } from '@/game/grass/models';
import { grassHitBox } from '@/game/grass/sprites';
import { Tile } from '@/game/tile';
import { parseTileMap } from '@/game/tileMap';
import grassMap from './grass.csv';

export function loadGrass() {
  const tiles = parseTileMap(grassMap);
  const grass = tiles.map(createGrass);
  return { grass };
}

function createGrass(tile: Tile): Grass {
  const { position } = tile;
  const hitBox = grassHitBox(position);
  return { position, hitBox, tileId: tile.tileId };
}
