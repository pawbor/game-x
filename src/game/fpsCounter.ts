import { createAnimationClock } from '@/game/createAnimationClock';

export function runFpsCounter(props: { canvasCtx: CanvasRenderingContext2D }) {
  const { canvasCtx } = props;
  const state = { frames: 0 };
  const clock = createAnimationClock();
  return clock.onTick(() => {
    state.frames += 1;
    const diff = clock.timePassed();
    if (diff === 0) return;

    const fps = (state.frames * 1000) / diff;
    renderFps({ canvasCtx, fps });

    if (diff > 1000) {
      clock.reset();
      state.frames = 0;
    }
  });
}

function renderFps(props: {
  canvasCtx: CanvasRenderingContext2D;
  fps: number;
}) {
  const { canvasCtx, fps } = props;
  canvasCtx.font = '48px sans';
  canvasCtx.textBaseline = 'top';
  canvasCtx.fillText(fps.toFixed(1), 10, 10);
}
