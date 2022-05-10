import { loadCharacterTiles } from './character';
import { initEnemies } from './enemy';
import { initGrass } from './grass';
import { initBoundaries } from './ground';
import { initPlayer } from './player';

export function loadMapData() {
  const characterTiles = loadCharacterTiles();
  const player = initPlayer(characterTiles);
  const enemies = initEnemies(characterTiles);
  const { boundaries } = initBoundaries();
  const { grass } = initGrass();
  return { player, boundaries, grass, enemies };
}
