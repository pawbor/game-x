export type GameFrameRenderer = () => void;

export function gameLoop(renderGameFrame: GameFrameRenderer) {
  requestAnimationFrame(() => {
    render();
  });

  function render() {
    renderGameFrame();

    requestAnimationFrame(render);
  }
}
