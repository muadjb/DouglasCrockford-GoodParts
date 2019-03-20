export const m = (value, source) => ({
  value: value,
  source: typeof source === 'string' ? source : String(value),
});

export const addm = (m1, m2) => m(m1.value + m2.value, `(${m1.source}+${m2.source})`);

export const liftm = (binaryFunction, str) => (m1, m2) =>
  m(binaryFunction(m1.value, m2.value), `(${m1.source}${str}${m2.source})`);
