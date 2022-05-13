import { CharacterState } from '@/game/character';
import { listenKeyboard } from '@/game/keyboard';
import { Player, SpriteDirection } from '@/game/player/models';
import { playerHitBox } from '@/game/player/sprites';
import { Tile } from '@/game/tile';

export function initPlayer(props: {
  characterTiles: Tile[];
  creationTime: number;
}): Player {
  const { characterTiles, creationTime } = props;
  const playerTile = characterTiles.find((c) => c.tileId === '394');
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
    keyboardState: listenKeyboard(),
    animationStart: creationTime,
  };
}
