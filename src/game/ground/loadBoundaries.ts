import { Tile } from '../tile';
import { parseTileMap } from '../tileMap';
import boundariesMap from './boundaries.csv';
import { Boundary } from './Boundary';
import { boundaryHitBox } from './boundaryHitBox';

export function loadBoundaries() {
  const tiles = parseTileMap(boundariesMap);
  const boundaries = tiles.map(createBoundary);
  return { boundaries };
}

function createBoundary(tile: Tile): Boundary {
  const { position } = tile;
  const hitBox = boundaryHitBox(position);
  return { position, hitBox };
}
