export type PressedKeys = Record<string, boolean>;

export interface KeyboardState {
  pressedKeys: PressedKeys;
}

export function listenKeyboard(): KeyboardState {
  const pressedKeys: PressedKeys = {};

  document.addEventListener('keydown', (event) => {
    pressedKeys[event.code] = true;
  });

  document.addEventListener('keyup', (event) => {
    pressedKeys[event.code] = false;
  });

  return { pressedKeys };
}
