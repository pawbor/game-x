export interface Clock {
  reset(): void;
  tick(duration: number): void;
  timePassed(): number;
  lastTickDuration(): number;
  onTick(listener: ClockUpdate): Cleanup;
}

export type ClockUpdate = (clock: Clock) => void;

export type Cleanup = () => void;
