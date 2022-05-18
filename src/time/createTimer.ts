import { Clock } from '@/time/Clock';
import { connectClocks } from '@/time/connectClocks';
import { createClock } from '@/time/createClock';
import { Timer } from '@/time/Timer';

export function createTimer(props: {
  referenceClock: Clock;
  duration: number;
  onDone: () => void;
}): Timer {
  const { referenceClock, duration, onDone } = props;
  const internalClock = createClock();
  const disconnect = connectClocks({
    reference: referenceClock,
    connected: internalClock,
  });

  const timer: Timer = {
    timePassed() {
      return Math.min(duration, internalClock.timePassed());
    },
    timeLeft() {
      return Math.max(duration - internalClock.timePassed(), 0);
    },
  };

  internalClock.onTick(() => {
    if (timer.timeLeft() === 0) {
      onDone();
      disconnect();
    }
  });

  return timer;
}
