import { getWeaponAttackSprite } from '@/game/availableWeapons/getWeaponConfig';
import { transformPosition } from '@/game/camera';
import { getImage } from '@/game/imageCache';
import { WeaponAttack } from '@/game/weaponAttack/WeaponAttack';
import { World } from '@/game/world/models';
import { sum } from '@/vector2d';

export function renderWeaponAttack(props: {
  canvasCtx: CanvasRenderingContext2D;
  weaponAttack: WeaponAttack;
  world: World;
}) {
  const { canvasCtx, weaponAttack, world } = props;
  const { camera } = world;
  const { position, type: weaponType, spriteDirection } = weaponAttack;
  const spriteConfig = getWeaponAttackSprite({
    weaponType,
    spriteDirection,
  });

  const { spriteSrc: sprite, spriteOffset } = spriteConfig;
  const [x, y] = transformPosition({
    position: sum(position, spriteOffset),
    canvasCtx,
    camera,
  });
  const img = getImage({ src: sprite });
  canvasCtx.drawImage(img, x, y);
}
