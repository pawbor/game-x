import { parseTileMap } from '@/game/tileMap';
import charactersMap from './characters.csv';

export function loadCharacterTiles() {
  return parseTileMap(charactersMap);
}
