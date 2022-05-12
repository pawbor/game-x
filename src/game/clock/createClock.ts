import { Clock, ClockUpdate } from './Clock';

export function createClock(): Clock {
  let running = false;
  let lastTick = 0;
  let worldNow = 0;
  let ticksDiff = 0;
  const listeners: ClockUpdate[] = [];

  const clock = {
    start() {
      running = true;
      lastTick = performance.now();
    },
    stop() {
      running = false;
    },
    tick() {
      if (!running) return;
      const realNow = performance.now();
      ticksDiff = realNow - lastTick;
      worldNow += ticksDiff;
      lastTick = realNow;
      listeners.forEach((listener) => listener(clock));
    },
    now() {
      return worldNow;
    },
    ticksDiff() {
      return ticksDiff;
    },
    onTick(listener: ClockUpdate) {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index < 0) return;
        listeners.splice(index, 1);
      };
    },
  };

  return clock;
}
