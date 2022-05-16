import { StaticObject } from '@/game/staticObject/StaticObject';
import { staticObjectHitBox } from '@/game/staticObject/staticObjectHitBox';
import { Tile } from '@/game/tile/Tile';
import { parseTileMap } from '@/game/tileMap/parseTileMap';
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
