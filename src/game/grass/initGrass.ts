import { scale } from '../../vector2d';
import { Tile, TileSize } from '../tile';
import { parseTileMap } from '../tileMap';
import grassMap from './assets/grass.csv';
import { Grass } from './Grass';
import { grassHitBox } from './grassHitBox';

export function initGrass() {
  const tiles = parseTileMap(grassMap);
  const grass = tiles.map(createGrass);
  return { grass };
}

function createGrass(tile: Tile): Grass {
  const position = scale(tile.position, TileSize);
  const hitBox = grassHitBox(position);
  return { position, hitBox, tileId: tile.tileId };
}
