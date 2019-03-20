export const twice = binaryFunction => x => binaryFunction(x, x);

// export function twice(binaryFunction) {
//   return function(arg) {
//     return binaryFunction(arg, arg);
//   };
// }

export const reverse = binaryFunction => (x, y) => binaryFunction(y, x);

export const composeu = (f, g) => x => g(f(x));

export const composeb = (f, g) => (x, y, z) => g(f(x, y), z);

// export const limit = (binaryFunction, numCalls) => {
//   let totalCalls = 0;
//   return (x, y) => (totalCalls++ < numCalls ? binaryFunction(x, y) : undefined);
// };

export const limit = (binaryFunction, numCalls) => {
  return (x, y) => (numCalls-- > 0 ? binaryFunction(x, y) : undefined);
};

// export function limit (binaryFunction, numCalls){
//   let totalCalls = 0;

//   return function jb(x, y) {
//     if (totalCalls++ < numCalls) {
//       return binaryFunction(x, y);
//     } else {
//       return undefined;
//     }
//   };
// };

// export function limit (binaryFunction, numCalls){
//   return function limitedBinary(x, y) {
//     console.log(numCalls)
//     if (numCalls-- > 0) {
//       return binaryFunction(x, y);
//     } else {
//       return undefined;
//     }
//   };
// };
