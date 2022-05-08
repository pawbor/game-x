import { parseTileMap } from '../tile/parseTileMap';
import charactersMap from './characters.csv';
import { initPlayer } from './initPlayer';

export function initCharacters() {
  const tiles = parseTileMap(charactersMap);
  const player = initPlayer(tiles);
  return { player };
}
