export function add(x, y) {
  return x + y;
}

export function sub(x, y) {
  return x - y;
}

export function mul(x, y) {
  return x * y;
}

export const identityf = x => () => x;

export const addf = x => y => x + y;

export const liftf = binaryFunction => x => y => binaryFunction(x, y);
