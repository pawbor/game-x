import { Tile } from '../tile';
import { create, updatePosition } from './Player';

export function initPlayer(charTiles: Tile[]) {
  const playerTile = charTiles.find((c) => c.tileId === '394');
  if (!playerTile) {
    throw new Error('Player position not configured');
  }
  const player = create();
  updatePosition({ player, position: playerTile.position });
  return player;
}
