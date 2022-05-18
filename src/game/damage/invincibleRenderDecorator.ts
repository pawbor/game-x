import { Render, RenderDecorator } from '@/canvas2d/RenderDecorator';
import { Damageable } from '@/game/damage/Damageable';
import { Timer } from '@/time/Timer';

export function invincibleRenderDecorator(decoratorProps: {
  damageable: Damageable;
}): RenderDecorator {
  const { damageable } = decoratorProps;
  const { invincibilityTimer } = damageable;
  return (render): Render => {
    if (!invincibilityTimer) return render;

    return (renderProps) => {
      const { canvasCtx } = renderProps;
      const baseAlpha = canvasCtx.globalAlpha;
      canvasCtx.globalAlpha =
        baseAlpha * calcInvincibilityAlpha(invincibilityTimer);
      render({ canvasCtx });
      canvasCtx.globalAlpha = baseAlpha;
    };
  };
}

function calcInvincibilityAlpha(timer: Timer): number {
  const timeLeft = timer.timeLeft();
  const timePassed = timer.timePassed();
  const duration = timeLeft + timePassed;
  const fullCircle = 2 * Math.PI;
  const numberOfBlinks = Math.ceil(duration / 200);
  const progress = timePassed / duration;
  const radians = fullCircle * numberOfBlinks * progress;
  return (Math.cos(radians) + 1) / 2;
}
