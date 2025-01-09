export function camelCase2underscoreCase(value: string): string {
  return value
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_+/, '');
}
export function camelCase2CssVariable(value: string): string {
  return '--' + camelCase2underscoreCase(value).replace('_', '-');
}
export async function awaitAll<T extends object | any[]>(
  src: PromiseAble<T>,
  target: Optional<AllAwaited<T>>
) {
  src = await src;
  for (const i in src) {
    target[i] = await src[i];
  }
  return target as AllAwaited<T>;
}
export function objectMap(
  src: object,
  handler: (key: Keyable, value: any) => { value: any; key: Keyable }
): object {
  const target: Record<Keyable, any> = {};
  for (const i of Object.getOwnPropertyNames(src)) {
    const { key, value } = handler(i, src[i as keyof typeof src]);
    target[key as keyof typeof target] = value;
  }
  for (const i of Object.getOwnPropertySymbols(src)) {
    const { key, value } = handler(i, src[i as keyof typeof src]);
    target[key as keyof typeof target] = value;
  }
  return target;
}

export const windowSize = reactive({ width: window.innerWidth, height: window.innerHeight });
window.addEventListener('resize', () => {
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;
});
export function round(value: number, precision = 2) {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}
