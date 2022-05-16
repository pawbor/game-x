import { CharacterState } from '@/game/character/CharacterState';
import { EnemySprites, StateSprites } from '@/game/enemy/EnemySprites';
import { EnemyType } from '@/game/enemy/EnemyType';
import { HitBox } from '@/game/hitBox/HitBox';
import { Vector2d } from '@/vector2d/Vector2d';
import { bamboo } from './bamboo';
import { raccoon } from './raccoon';
import { spirit } from './spirit';
import { squid } from './squid';

const sprites: Record<EnemyType, EnemySprites> = {
  bamboo,
  raccoon,
  spirit,
  squid,
};

export function selectEnemySprites(props: {
  type: EnemyType;
  state: CharacterState;
}): StateSprites {
  return sprites[props.type].states[props.state];
}

export function selectSpriteOffset(props: { type: EnemyType }): Vector2d {
  return sprites[props.type].spriteOffset;
}

export function selectSpriteHitBox(props: { type: EnemyType }): HitBox {
  return sprites[props.type].hitBox;
}
