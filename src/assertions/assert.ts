export function assert(
  condition: unknown,
  message = 'Failed assertion'
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
