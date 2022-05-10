import { scale } from '../../vector2d';
import { TileSize } from '../tile';
import { parseTileMap } from '../tileMap';
import { Tile } from '../tile';
import boundariesMap from './boundaries.csv';
import { Boundary } from './Boundary';
import { boundaryHitBox } from './boundaryHitBox';

export function initBoundaries() {
  const tiles = parseTileMap(boundariesMap);
  const boundaries = tiles.map(createBoundary);
  return { boundaries };
}

function createBoundary(tile: Tile): Boundary {
  const position = scale(tile.position, TileSize);
  const hitBox = boundaryHitBox(position);
  return { position, hitBox };
}
