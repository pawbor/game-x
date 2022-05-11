import { loadCharacterTiles } from './character';
import { initEnemies } from './enemy/initialization';
import { loadGrass } from './grass/initialization';
import { loadBoundaries } from './ground/initialization';
import { initPlayer } from './player/initialization';
import { loadStaticObjects } from './staticObject/initialization';

export function loadMapData() {
  const characterTiles = loadCharacterTiles();
  const player = initPlayer(characterTiles);
  const enemies = initEnemies(characterTiles);
  const staticObjects = loadStaticObjects();
  const { boundaries } = loadBoundaries();
  const { grass } = loadGrass();
  return { player, boundaries, grass, enemies, staticObjects };
}
