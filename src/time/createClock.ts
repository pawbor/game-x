import { removeItem } from '@/array/removeItem';
import { Clock, ClockUpdate } from '@/time/Clock';

export function createClock(): Clock {
  let timePassed = 0;
  let lastTickDuration = 0;
  const tickListeners: ClockUpdate[] = [];

  const clock: Clock = {
    tick(duration) {
      lastTickDuration = duration;
      timePassed += lastTickDuration;
      tickListeners.forEach((listener) => listener(clock));
    },
    reset() {
      timePassed = 0;
    },
    timePassed() {
      return timePassed;
    },
    lastTickDuration() {
      return lastTickDuration;
    },
    onTick(listener: ClockUpdate) {
      tickListeners.push(listener);
      return () => {
        removeItem({ array: tickListeners, item: listener });
      };
    },
  };

  return clock;
}
