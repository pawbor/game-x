import { assert } from '@/assertions/assert';

export class KnockBackRatio {
  #value = 0;

  private constructor(value: number) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  static validate(value: number): KnockBackRatio {
    assert(value >= 0, `${value} can't be less than zero`);
    assert(value <= 1, `${value} can't be more than one`);
    return new KnockBackRatio(value);
  }

  static clip(value: number): KnockBackRatio {
    const clipped = Math.min(Math.max(0, value), 1);
    return new KnockBackRatio(clipped);
  }
}
