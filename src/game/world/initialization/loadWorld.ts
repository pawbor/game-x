import { loadCharacterTiles } from '@/game/character';
import { initEnemies } from '@/game/enemy/initialization';
import { loadGrass } from '@/game/grass/initialization';
import { loadBoundaries } from '@/game/ground/initialization';
import { initPlayer } from '@/game/player/initialization';
import { loadStaticObjects } from '@/game/staticObject/initialization';

export function loadWorld() {
  const characterTiles = loadCharacterTiles();
  const player = initPlayer(characterTiles);
  const enemies = initEnemies(characterTiles);
  const staticObjects = loadStaticObjects();
  const { boundaries } = loadBoundaries();
  const { grass } = loadGrass();
  return { player, boundaries, grass, enemies, staticObjects };
}
