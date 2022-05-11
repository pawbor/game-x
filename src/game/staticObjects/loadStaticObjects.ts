import { scale } from '../../vector2d';
import { Tile, TileSize } from '../tile';
import { parseTileMap } from '../tileMap';
import { StaticObject } from './StaticObject';
import { staticObjectHitBox } from './staticObjectHitBox';
import objectsMap from './staticObjects.csv';

export function loadStaticObjects() {
  const tiles = parseTileMap(objectsMap);
  return tiles.map(createStaticObject);
}

function createStaticObject(tile: Tile): StaticObject {
  const position = scale(tile.position, TileSize);
  const { tileId } = tile;
  const hitBox = staticObjectHitBox({ tileId, position });
  return { position, hitBox, tileId };
}
