import { Clock } from '@/time/Clock';

export function connectClocks(props: { reference: Clock; connected: Clock }) {
  const { reference, connected } = props;
  return reference.onTick(() => connected.tick(reference.lastTickDuration()))
}
