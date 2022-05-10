import { parseTileMap } from '../tileMap';
import charactersMap from './characters.csv';

export function loadCharacterTiles() {
  return parseTileMap(charactersMap);
}
