import { Clock } from '@/time/Clock';
import { createClock } from '@/time/createClock';

export function createAnimationClock(): Clock {
  const clock = createClock();

  requestAnimationFrame((timestamp) => {
    let prevTimestamp = timestamp;
    scheduleTick();

    function scheduleTick() {
      requestAnimationFrame((nextTimestamp) => {
        const duration = nextTimestamp - prevTimestamp;
        prevTimestamp = nextTimestamp;
        clock.tick(duration);
        scheduleTick();
      });
    }
  });

  return clock;
}
