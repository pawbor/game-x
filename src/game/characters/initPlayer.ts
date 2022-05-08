import { scale } from '../../vector2d';
import { create } from '../player';
import { TileSize } from '../tile';
import { Tile } from '../tile/Tile';

export function initPlayer(charTiles: Tile[]) {
  const playerTile = charTiles.find((c) => c.tileId === '394');
  if (!playerTile) {
    throw new Error('Player position not configured');
  }
  const player = create();
  player.position = scale(playerTile.position, TileSize);
  return player;
}
