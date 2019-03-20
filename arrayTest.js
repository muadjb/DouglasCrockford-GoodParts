export function concatUnique(a, b) {
  // const unique = b.filter(x => !a.includes(x));
  return a.concat(getUniqueById(a, b));
}

export function getUniqueById(a, b) {
  return b.filter(y => !a.map(x => x.id).includes(y.id));
}

export function notInB(a, b) {
  return !b.map(y => y.id).includes(b.id);
}

export function remove(a, b) {
  // const unique = b.filter(x => !a.includes(x));
  return a.filter(x => !b.map(y => y.id).includes(x.id));
}
