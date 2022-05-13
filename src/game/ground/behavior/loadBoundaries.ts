import { Boundary } from '@/game/ground/models';
import { Tile } from '@/game/tile';
import { parseTileMap } from '@/game/tileMap';
import boundariesMap from './boundaries.csv';
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
