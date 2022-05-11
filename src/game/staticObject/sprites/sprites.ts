import { forceNonNullable } from '@/assertions';
import { create, HitBox } from '@/game/hitBox';
import { TileSize } from '@/game/tile';
import { Vector2d } from '@/vector2d';
import so01 from './01.png';
import so02 from './02.png';
import so03 from './03.png';
import so04 from './04.png';
import so05 from './05.png';
import so06 from './06.png';
import so07 from './07.png';
import so08 from './08.png';
import so09 from './09.png';
import so10 from './10.png';
import so11 from './11.png';
import so12 from './12.png';
import so13 from './13.png';
import so14 from './14.png';
import so15 from './15.png';
import so16 from './16.png';
import so17 from './17.png';
import so18 from './18.png';
import so19 from './19.png';
import so20 from './20.png';

export interface Sprite {
  src: string;
  imgOffset: Vector2d;
  hitBox: HitBox;
}

const sprites: Sprite[] = [
  { src: so01, imgOffset: oneUp(), hitBox: stumpHitBox() },
  { src: so02, imgOffset: oneUp(), hitBox: treeHitBox() },
  { src: so03, imgOffset: oneUp(), hitBox: treeHitBox() },
  { src: so04, imgOffset: oneUp(), hitBox: treeHitBox() },
  { src: so05, imgOffset: oneUp(), hitBox: treeHitBox() },
  { src: so06, imgOffset: oneUp(), hitBox: treeHitBox() },
  { src: so07, imgOffset: oneUp(), hitBox: treeHitBox() },
  { src: so08, imgOffset: oneUp(), hitBox: rockHitBox() },
  { src: so09, imgOffset: oneUp(), hitBox: rockHitBox() },
  { src: so10, imgOffset: oneUp(), hitBox: rockHitBox() },
  { src: so11, imgOffset: oneUp(), hitBox: statueHitBox() },
  { src: so12, imgOffset: oneUp(), hitBox: statueHitBox() },
  { src: so13, imgOffset: oneUp(), hitBox: statueHitBox() },
  { src: so14, imgOffset: oneUp(), hitBox: statueHitBox() },
  { src: so15, imgOffset: oneUp(), hitBox: bigStatueHitBox() },
  { src: so16, imgOffset: oneUp(), hitBox: bigStatueHitBox() },
  { src: so17, imgOffset: oneUp(), hitBox: bigStatueHitBox() },
  { src: so18, imgOffset: oneUp(), hitBox: bigStatueHitBox() },
  { src: so19, imgOffset: oneUp(), hitBox: bigStatueHitBox() },
  { src: so20, imgOffset: oneUp(), hitBox: bigStatueHitBox() },
];

export function selectSprite(tileId: string): Sprite {
  return forceNonNullable(
    sprites[Number(tileId) - 1],
    `Missing sprite for "${tileId}"`
  );
}

function oneUp(): Vector2d {
  return [0, -TileSize];
}

function statueHitBox() {
  return create({ left: 0, top: 0, width: TileSize, height: TileSize });
}

function stumpHitBox() {
  return create({ left: 0, top: -30, width: TileSize * 2, height: TileSize });
}

function treeHitBox() {
  return create({ left: 0, top: 0, width: TileSize * 2, height: TileSize });
}

function bigStatueHitBox() {
  return create({ left: 0, top: 0, width: TileSize * 2, height: TileSize });
}

function rockHitBox() {
  return create({ left: 0, top: -20, width: TileSize * 2, height: TileSize });
}
