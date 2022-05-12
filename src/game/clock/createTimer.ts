import { Clock } from './Clock';

export function createTimer(props: {
  clock: Clock;
  delay: number;
  callback: () => void;
}) {
  const { clock, delay, callback } = props;
  const refTime = clock.now();
  const cleanup = clock.onTick(() => {
    const now = clock.now();
    if (now - refTime >= delay) {
      callback();
      cleanup();
    }
  });
}
