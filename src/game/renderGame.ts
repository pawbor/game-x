import { gameLoop } from './gameLoop';
import { keyboard } from './keyboard';
import { playerMove, position } from './player';

export function renderGame(parent: HTMLElement) {
  const canvas = document.createElement('canvas');
  parent.append(canvas);

  const observer = new ResizeObserver((els) => {
    canvas.width = els[0].borderBoxSize[0].inlineSize;
    canvas.height = els[0].borderBoxSize[0].blockSize;
  });
  observer.observe(parent);

  const ctx = canvas.getContext('2d');
  const { pressedKeys } = keyboard();

  gameLoop(({ framesDiff }) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerMove({ pressedKeys, timeDiff: framesDiff });
    ctx.fillRect(position[0], position[1], 30, 30);
  });
}


