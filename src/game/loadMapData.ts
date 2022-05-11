import { loadCharacterTiles } from './character';
import { initEnemies } from './enemy';
import { loadGrass } from './grass';
import { initBoundaries } from './ground';
import { initPlayer } from './player';
import { loadStaticObjects } from './staticObjects';

export function loadMapData() {
  const characterTiles = loadCharacterTiles();
  const player = initPlayer(characterTiles);
  const enemies = initEnemies(characterTiles);
  const staticObjects = loadStaticObjects();
  const { boundaries } = initBoundaries();
  const { grass } = loadGrass();
  return { player, boundaries, grass, enemies, staticObjects };
}
