import { liftf } from './challenge1';

export function curry(binaryFunction, arg1) {
  return function curried(arg2) {
    return binaryFunction(arg1, arg2);
  };
}

export function curryWithLift(binaryFunction, arg1) {
  return liftf(binaryFunction)(arg1);
}