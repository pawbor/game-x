import { scale } from '../../vector2d';
import { Tile, TileSize } from '../tile';
import { TileMap } from './TileMap';

export function parseTileMap(tileMap: TileMap): Tile[] {
  return tileMap
    .map((row, rowI) =>
      row.map(
        (tileId, colI): Tile => ({
          tileId,
          position: scale([colI, rowI], TileSize),
        })
      )
    )
    .flat(1)
    .filter((char) => char.tileId && char.tileId !== '-1');
}
