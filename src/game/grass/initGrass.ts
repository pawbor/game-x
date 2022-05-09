import { scale } from '../../vector2d';
import { TileSize } from '../tile';
import { parseTileMap } from '../tile/parseTileMap';
import { Tile } from '../tile/Tile';
import { Grass } from './Grass';
import grassMap from './assets/grass.csv';
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
