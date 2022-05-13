export type Cleanup = () => void;

export interface Clock {
  start(): void;
  stop(): void;
  toggle(): void;
  tick(): void;
  now(): number;
  ticksDiff(): number;
  onTick(listener: ClockUpdate): Cleanup;
}

export type ClockUpdate = (clock: Clock) => void;
