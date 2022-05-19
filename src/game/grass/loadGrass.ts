import { KnockBackRatio } from '@/game/damage/KnockBackRatio';
import { Grass } from '@/game/grass/Grass';
import { grassHitBox } from '@/game/grass/grassHitBox';
import { Tile } from '@/game/tile/Tile';
import { parseTileMap } from '@/game/tileMap/parseTileMap';
import grassMap from './grass.csv';

export function loadGrass() {
  const tiles = parseTileMap(grassMap);
  return tiles.map(createGrass);
}

function createGrass(tile: Tile): Grass {
  const { position } = tile;
  const hitBox = grassHitBox(position);
  return {
    position,
    hitBox,
    tileId: tile.tileId,
    health: 1,
    invincibilityDuration: 0,
    invincibilityTimer: undefined,
    knockBackResistance: KnockBackRatio.validate(1),
    knockBack: undefined,
  };
}
