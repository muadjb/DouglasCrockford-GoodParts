import { from } from './challenge4';

export const gensymf = sym => {
  const f = from(1);
  return () => sym + f();
};

export const fibf = (seed1, seed2) => {
  let numCalls = 0;
  let a = seed1;
  let b = seed2;
  let sum = 0;

  return () => {
    // a = 0;
    // b = seed1;
    // sum = a + b;

    // if (a === 0 && b === seed1) {
    //   b = seed2;
    // }
    // sum = a + b;

    if (numCalls === 0) {
      numCalls++;
      return seed1;
    }
    if (numCalls === 1) {
      numCalls++;
      return seed2;
    }

    sum = a + b;
    a = b;
    b = sum;
    return sum;
  };
};
