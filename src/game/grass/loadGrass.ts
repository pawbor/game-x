import { Tile } from '../tile';
import { parseTileMap } from '../tileMap';
import { Grass } from './Grass';
import grassMap from './grass.csv';
import { grassHitBox } from './grassHitBox';

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
