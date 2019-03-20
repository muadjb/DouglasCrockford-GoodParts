export const counter = seed => ({
  up: () => ++seed,
  down: () => --seed,
});

// My solution
/*
export const revocable = binaryFunction => {
  let canRun = true;
  return {
    invoke: (x,y) => (canRun ? binaryFunction(x,y) : undefined),
    revoke: () => (canRun = false),
  };
};
*/

// Doug's solution
export const revocable = binaryFunction => {
  return {
    invoke: (x,y) => (binaryFunction !== undefined ? binaryFunction(x,y) : undefined),
    revoke: () => (binaryFunction = undefined),
  };
};
