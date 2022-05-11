import { EnemySprites } from '@/game/enemy/models';
import { create } from '@/game/hitBox';
import { TileSize } from '@/game/tile';
import { attack } from './attack';
import { idle } from './idle';
import { walk } from './walk';

export const squid: EnemySprites = {
  states: { walk, idle, attack },
  spriteOffset: [0, 0],
  hitBox: create({
    left: 0,
    top: 30,
    width: TileSize,
    height: TileSize - 30,
  }),
};
