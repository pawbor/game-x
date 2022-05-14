import { loadCharacterTiles } from '@/game/character';
import { initEnemies } from '@/game/enemy/behavior';
import { loadGrass } from '@/game/grass/behavior';
import { loadBoundaries } from '@/game/ground/behavior';
import { initPlayer } from '@/game/player/behavior';
import { loadStaticObjects } from '@/game/staticObject/behavior';

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
