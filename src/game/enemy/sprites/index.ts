import { Vector2d } from '../../../vector2d';
import { CharacterState } from '../../character';
import { HitBox } from '../../hitBox';
import { EnemyType } from '../EnemyType';
import { bamboo } from './bamboo';
import { EnemySprites, StateSprites } from './EnemySprites';
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
