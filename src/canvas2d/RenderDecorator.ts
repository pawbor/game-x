export type Render = (props: { canvasCtx: CanvasRenderingContext2D }) => void;

export type RenderDecorator = (render: Render) => Render;
