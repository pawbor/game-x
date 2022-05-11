import { loadCharacterTiles } from './character';
import { initEnemies } from './enemy';
import { loadGrass } from './grass';
import { loadBoundaries } from './ground';
import { initPlayer } from './player/initialization';
import { loadStaticObjects } from './staticObjects';

export function loadMapData() {
  const characterTiles = loadCharacterTiles();
  const player = initPlayer(characterTiles);
  const enemies = initEnemies(characterTiles);
  const staticObjects = loadStaticObjects();
  const { boundaries } = loadBoundaries();
  const { grass } = loadGrass();
  return { player, boundaries, grass, enemies, staticObjects };
}
