import { add, addf, identityf, liftf, mul, sub } from './challenge1';
import { curry, curryWithLift } from './challenge2';
import { limit, twice, reverse, composeu, composeb } from './challenge3';

describe('twice', () => {
  it('should return a function', () => {
    const fn = twice(add);
    expect(fn).toBeFunction();
  });

  it('should add twice', () => {
    const double = twice(add);
    expect(double(4)).toBe(8);
  });

  it('should multiply twice', () => {
    const squre = twice(mul);
    expect(squre(3)).toBe(9);
  });
});

describe('reverse', () => {
  it('should return a function', () => {
    const fn = reverse(sub);
    expect(fn).toBeFunction();
  });

  it('should subtract x from y', () => {
    const bus = reverse(sub);
    expect(bus(4, 2)).toBe(-2);
  });
});

describe('composeu', () => {
  it('should return a function', () => {
    const fn = composeu(sub);
    expect(fn).toBeFunction();
  });

  it('should compose two unary functions', () => {
    const double = twice(add);
    const square = twice(mul);
    const composed = composeu(double, square);
    expect(composed(4)).toBe(64);
    expect(composed(5)).toBe(100);
  });
});

describe('composeb', () => {
  it('should return a function', () => {
    const fn = composeb(add, mul);
    expect(fn).toBeFunction();
  });

  it('should compose add and mul', () => {
    const addMul = composeb(add, mul);
    expect(addMul(2, 3, 7)).toBe(35);
    expect(addMul(5, 6, 10)).toBe(110);
  });

  it('should compose add and sub', () => {
    const addSub = composeb(add, sub);
    expect(addSub(2, 3, 7)).toBe(-2);
    expect(addSub(5, 6, 10)).toBe(1);
  });
});

describe('limit', () => {
  it('should return a function', () => {
    const fn = limit(add, 1);
    expect(fn).toBeFunction();
  });

  it('should add one time', () => {
    const addLimited = limit(add, 1);
    expect(addLimited(2, 3)).toBe(5);
    expect(addLimited(2, 3)).toBe(undefined);
  });

  it('should subtract 3 times', () => {
    const subLimited = limit(sub, 3);
    expect(subLimited(20, 3)).toBe(17);
    expect(subLimited(20, 7)).toBe(13);
    expect(subLimited(20, 10)).toBe(10);
    expect(subLimited(200, 1)).toBe(undefined);
    expect(subLimited(100, 10)).toBe(undefined);
    expect(subLimited(300, 30)).toBe(undefined);
  });
});
