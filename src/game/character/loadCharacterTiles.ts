import { parseTileMap } from '@/game/tileMap/parseTileMap';
import charactersMap from './characters.csv';

export function loadCharacterTiles() {
  return parseTileMap(charactersMap);
}
