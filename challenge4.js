export const from = start => {
  return () => start++;
};

export const to = (from, end) => () => {
  const next = from();
  return end > next ? next : undefined;
};

export const fromTo = (start, end) => to(from(start), end);

export const element = (array, gen) => {
  if (gen === undefined) {
    gen = from(0);
  }
  return () => array[gen()];
};
