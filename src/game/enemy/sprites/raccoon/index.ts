import { EnemySprites } from '@/game/enemy/models';
import { create } from '@/game/hitBox';
import { TileSize } from '@/game/tile';
import { attack } from './attack';
import { idle } from './idle';
import { walk } from './walk';

export const raccoon: EnemySprites = {
  states: { walk, idle, attack },
  spriteOffset: [0, -150],
  hitBox: create({
    left: 10,
    top: 0,
    width: 220,
    height: TileSize,
  }),
};
