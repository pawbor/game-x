import { StaticObject } from '@/game/staticObject/models';
import { staticObjectHitBox } from '@/game/staticObject/sprites';
import { Tile } from '@/game/tile';
import { parseTileMap } from '@/game/tileMap';
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
