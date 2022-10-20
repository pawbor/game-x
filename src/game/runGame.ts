import { createAnimationClock } from '@/game/createAnimationClock';
import { runFpsCounter } from './fpsCounter';
import { listenKeyboard } from './keyboard';
import { createWorld } from './world/createWorld';
import { renderWorld } from './world/renderWorld';

export function runGame(parent: HTMLElement) {
  const canvas = document.createElement('canvas');
  parent.append(canvas);
  const broken = document.createElement('div');
  Object.assign(broken.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '100px',
    background: 'red',
    transform: 'translate(-50%, -50%)',
  });

  broken.innerHTML = 'This is a "broken" version (testing Vercel)';
  parent.append(broken);

  const observer = new ResizeObserver((els) => {
    canvas.width = els[0]?.borderBoxSize[0]?.inlineSize ?? 0;
    canvas.height = els[0]?.borderBoxSize[0]?.blockSize ?? 0;
  });
  observer.observe(parent);

  const canvasCtx = canvas.getContext('2d');
  if (!canvasCtx) {
    throw new Error('Canvas not supported');
  }

  const pauseController = createPauseController();

  const world = createWorld();
  const animationClock = createAnimationClock();
  animationClock.onTick((c) => {
    if (!pauseController.isPaused()) {
      world.clock.tick(c.lastTickDuration());
    }

    renderWorld({
      canvasCtx,
      world,
    });
  });

  runFpsCounter({ canvasCtx });
}

function createPauseController() {
  const clock = createAnimationClock();
  const keyboardState = listenKeyboard();
  const state = { paused: false };

  clock.onTick(() => {
    if (testThrottle() && keyboardState.pressedKeys['Escape']) {
      state.paused = !state.paused;
      clock.reset();
    }
  });

  return {
    isPaused() {
      return state.paused;
    },
  };

  function testThrottle(): boolean {
    return clock.timePassed() > 500;
  }
}
