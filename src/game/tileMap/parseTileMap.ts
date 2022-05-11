import { Tile, TileSize } from '@/game/tile';
import { scale } from '@/vector2d';
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
