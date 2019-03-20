import { add, addf, identityf, liftf, mul } from './challenge1';
import { curry, curryWithLift } from './challenge2';

describe('curry', () => {
  it('should return a function', () => {
    const fn = curry(add, 3);
    expect(fn).toBeFunction();
  });

  it('should add 4', () => {
    const add4 = curry(add, 4);
    expect(add4(3)).toBe(7);
  });

  it('should multiply 10', () => {
    const mul10 = curry(mul, 10);
    expect(mul10(3)).toBe(30);
  });
});

describe('curryWithLift', () => {
  it('should return a function', () => {
    const fn = curryWithLift(add, 3);
    expect(fn).toBeFunction();
  });

  it('should add 4', () => {
    const add4 = curryWithLift(add, 4);
    expect(add4(3)).toBe(7);
  });

  it('should multiply 10', () => {
    const mul10 = curryWithLift(mul, 10);
    expect(mul10(3)).toBe(30);
  });
});

describe('inc', () => {
  const inc1 = liftf(add)(1);
  const inc2 = addf(1);
  const inc3 = curry(add, 1);

  it('should return 6', () => {
    expect(inc1).toBeFunction();
    expect(inc2).toBeFunction();
    expect(inc3).toBeFunction();
  });

  it('should increment by 1', () => {
    expect(inc1(5)).toBe(6);
    expect(inc2(5)).toBe(6);
    expect(inc3(5)).toBe(6);
  });

  it('should increment by 2', () => {
    expect(inc1(inc1(5))).toBe(7);
    expect(inc2(inc2(5))).toBe(7);
    expect(inc3(inc3(5))).toBe(7);
  });
});
