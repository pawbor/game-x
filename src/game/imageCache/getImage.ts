const cache = new Map<string, HTMLImageElement>();

export function getImage(props: { src: string }): HTMLImageElement {
  const { src } = props;
  const fromCache = cache.get(src);
  if (fromCache) return fromCache;

  const img = new Image();
  img.src = props.src;
  cache.set(src, img);

  return img;
}
