export const collect = (gen, array) => () => {
  const next = gen();
  if (next !== undefined) {
    array.push(next);
  }
  return next;
};

export const filter = (generator, predicate) => {
  return function checkNext() {
    // checkNext(generator());

    const next = generator();
    // while (next !== undefined && !predicate(next)) {
    //   next = generator();
    // }
    // return next;

    if (next === undefined || predicate(next)) {
      return next;
    }

    return checkNext();
  };
};

export const concat = (gen1, gen2) => () => {
  let next = gen1();
  if (next !== undefined) {
    return next;
  } else {
    next = gen2();
    return next;
  }
};
