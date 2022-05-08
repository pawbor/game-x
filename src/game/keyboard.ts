export function keyboard() {
  const pressedKeys: Record<string, boolean> = {};

  document.addEventListener('keydown', (event) => {
    pressedKeys[event.key] = true;
  });

  document.addEventListener('keyup', (event) => {
    pressedKeys[event.key] = false;
  });

  return { pressedKeys };
}
