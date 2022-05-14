export function removeItem<T>(props: { array: T[]; item: T }): void {
  const { array, item } = props;
  const index = array.indexOf(item);
  if (index < 0) return;
  array.splice(index, 1);
}
