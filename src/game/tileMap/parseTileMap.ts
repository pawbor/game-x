import { Tile } from '../tile';
import { TileMap } from './TileMap';

export function parseTileMap(tileMap: TileMap): Tile[] {
  return tileMap
    .map((row, rowI) =>
      row.map((tileId, colI): Tile => {
        return { tileId, position: [colI, rowI] };
      })
    )
    .flat(1)
    .filter((char) => char.tileId && char.tileId !== '-1');
}
