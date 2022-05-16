import { Boundary } from '@/game/ground/Boundary';
import { Tile } from '@/game/tile/Tile';
import { parseTileMap } from '@/game/tileMap/parseTileMap';
import boundariesMap from './boundaries.csv';
import { boundaryHitBox } from './boundaryHitBox';

export function loadBoundaries() {
  const tiles = parseTileMap(boundariesMap);
  return tiles.map(createBoundary);
}

function createBoundary(tile: Tile): Boundary {
  const { position } = tile;
  const hitBox = boundaryHitBox(position);
  return { position, hitBox };
}
