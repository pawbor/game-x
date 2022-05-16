import { forceNonNullable } from '@/assertions/nonNullable';
import { EnemyAnimation } from '@/game/availableEnemies/EnemySprites';
import { EnemyType } from '@/game/availableEnemies/EnemyType';
import { getEnemyConfig } from '@/game/availableEnemies/getEnemyConfig';
import { Camera } from '@/game/camera/Camera';
import { transformPosition } from '@/game/camera/transformPosition';
import { CharacterState } from '@/game/character/CharacterState';
import { Clock } from '@/game/clock/Clock';
import { Enemy } from '@/game/enemy/Enemy';
import { getImage } from '@/game/imageCache/getImage';
import { sum } from '@/vector2d/sum';
import { Vector2d } from '@/vector2d/Vector2d';

export function renderEnemy(props: {
  canvasCtx: CanvasRenderingContext2D;
  camera: Camera;
  enemy: Enemy;
  clock: Clock;
}) {
  const { canvasCtx, camera, enemy, clock } = props;
  const { position } = enemy;
  const spriteOffset = selectSpriteOffset(enemy);
  const [x, y] = transformPosition({
    position: sum(position, spriteOffset),
    canvasCtx,
    camera,
  });
  const img = getImage({ src: selectSprite(enemy, clock) });
  canvasCtx.drawImage(img, x, y);
}

function selectSprite(enemy: Enemy, clock: Clock): string {
  const animationFrames = selectAnimation(enemy);
  const animationElapsed = clock.now() - enemy.animationStart;
  const frameIndex =
    Math.floor(animationElapsed / 200) % animationFrames.length;

  return forceNonNullable(
    animationFrames[frameIndex],
    `Missing frame ${frameIndex}`
  );
}

export function selectAnimation(props: {
  type: EnemyType;
  state: CharacterState;
}): EnemyAnimation {
  return getEnemyConfig(props.type).sprites.stateAnimations[props.state];
}

export function selectSpriteOffset(props: { type: EnemyType }): Vector2d {
  return getEnemyConfig(props.type).sprites.spriteOffset;
}
