import { CharacterState } from '../../character';
import { Tile } from '../../tile';
import { Player, SpriteDirection } from '../models';
import { playerHitBox } from '../sprites';

export function initPlayer(charTiles: Tile[]): Player {
  const playerTile = charTiles.find((c) => c.tileId === '394');
  if (!playerTile) {
    throw new Error('Player position not configured');
  }

  const { position } = playerTile;
  const hitBox = playerHitBox(position);
  return {
    position,
    hitBox,
    state: CharacterState.Idle,
    spriteDirection: SpriteDirection.Down,
  };
}
