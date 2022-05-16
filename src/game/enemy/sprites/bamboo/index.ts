import { EnemySprites } from '@/game/enemy/EnemySprites';
import { create } from '@/game/hitBox/HitBox';
import { TileSize } from '@/game/tile/config';
import { attack } from './attack';
import { idle } from './idle';
import { walk } from './walk';

export const bamboo: EnemySprites = {
  states: { walk, idle, attack },
  spriteOffset: [0, 0],
  hitBox: create({
    left: 0,
    top: 20,
    width: TileSize,
    height: TileSize - 20,
  }),
};
