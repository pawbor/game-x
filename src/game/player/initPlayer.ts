import { create } from '.';
import { scale } from '../../vector2d';
import { Tile, TileSize } from '../tile';
import { updatePosition } from './Player';

export function initPlayer(charTiles: Tile[]) {
  const playerTile = charTiles.find((c) => c.tileId === '394');
  if (!playerTile) {
    throw new Error('Player position not configured');
  }
  const player = create();
  updatePosition({ player, position: scale(playerTile.position, TileSize) });
  return player;
}
