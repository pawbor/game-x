import { CharacterState } from '@/game/character';
import { Player, SpriteDirection } from '@/game/player/models';
import { playerHitBox } from '@/game/player/sprites';
import { Tile } from '@/game/tile';

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
