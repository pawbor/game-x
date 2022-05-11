import { Tile } from '../tile';
import { parseTileMap } from '../tileMap';
import { StaticObject } from './StaticObject';
import { staticObjectHitBox } from './staticObjectHitBox';
import objectsMap from './staticObjects.csv';

export function loadStaticObjects() {
  const tiles = parseTileMap(objectsMap);
  return tiles.map(createStaticObject);
}

function createStaticObject(tile: Tile): StaticObject {
  const { tileId, position } = tile;
  const hitBox = staticObjectHitBox({ tileId, position });
  return { position, hitBox, tileId };
}
