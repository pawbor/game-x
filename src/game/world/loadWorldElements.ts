import { loadCharacterTiles } from '@/game/character/loadCharacterTiles';
import { initEnemies } from '@/game/enemy/initEnemies';
import { loadGrass } from '@/game/grass/loadGrass';
import { loadBoundaries } from '@/game/ground/loadBoundaries';
import { initPlayer } from '@/game/player/initPlayer';
import { loadStaticObjects } from '@/game/staticObject/loadStaticObjects';

export function loadWorldElements(props: { creationTime: number }) {
  const { creationTime } = props;
  const characterTiles = loadCharacterTiles();
  const player = initPlayer({ characterTiles, creationTime });
  const enemies = initEnemies({ characterTiles, creationTime });
  const staticObjects = loadStaticObjects();
  const boundaries = loadBoundaries();
  const grasses = loadGrass();
  return { player, boundaries, grasses, enemies, staticObjects };
}
