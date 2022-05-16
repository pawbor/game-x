import { Tile } from '@/game/tile/Tile';
import { TileSize } from '@/game/tile/config';
import { scale } from '@/vector2d/scale';
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
