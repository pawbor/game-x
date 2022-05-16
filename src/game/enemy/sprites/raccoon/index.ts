import { EnemySprites } from '@/game/enemy/EnemySprites';
import { create } from '@/game/hitBox/HitBox';
import { TileSize } from '@/game/tile/config';
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
