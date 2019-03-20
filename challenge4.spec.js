import { add, addf, identityf, liftf, mul, sub } from './challenge1';
import { from, to, fromTo, element } from './challenge4';

describe('from', () => {
  it('should return a function', () => {
    const fn = from(0);
    expect(fn).toBeFunction();
  });

  it('should count to 2 from 0', () => {
    const fromZero = from(0);
    expect(fromZero()).toBe(0);
    expect(fromZero()).toBe(1);
    expect(fromZero()).toBe(2);
  });

  it('should count to 5 from 3', () => {
    const fromThree = from(3);
    expect(fromThree()).toBe(3);
    expect(fromThree()).toBe(4);
    expect(fromThree()).toBe(5);
  });
});

describe('to', () => {
  it('should return a function', () => {
    const fn = to(3);
    expect(fn).toBeFunction();
  });

  it('should be undefined for end less than start', () => {
    const zeroToTwo = to(from(1), 0);
    expect(zeroToTwo()).toBeUndefined();
    expect(zeroToTwo()).toBeUndefined();
    expect(zeroToTwo()).toBeUndefined();
  });

  it('should count from 0 to 0', () => {
    const zeroToTwo = to(from(0), 0);
    expect(zeroToTwo()).toBeUndefined();
  });

  it('should count from 0 to 2', () => {
    const zeroToTwo = to(from(0), 2);
    expect(zeroToTwo()).toBe(0);
    expect(zeroToTwo()).toBe(1);
    expect(zeroToTwo()).toBeUndefined();
  });

  it('should count from -2 to 2', () => {
    const zeroToTwo = to(from(-2), 2);
    expect(zeroToTwo()).toBe(-2);
    expect(zeroToTwo()).toBe(-1);
    expect(zeroToTwo()).toBe(0);
    expect(zeroToTwo()).toBe(1);
    expect(zeroToTwo()).toBeUndefined();
  });
});

describe('fromTo', () => {
  it('should return a function', () => {
    const fn = fromTo(3);
    expect(fn).toBeFunction();
  });

  it('should be undefined for end less than start', () => {
    const oneToZero = fromTo(1, 0);
    expect(oneToZero()).toBeUndefined();
    expect(oneToZero()).toBeUndefined();
    expect(oneToZero()).toBeUndefined();
  });

  it('should count from 0 to 0', () => {
    const zeroToZero = fromTo(0, 0);
    expect(zeroToZero()).toBeUndefined();
  });

  it('should count from 0 to 2', () => {
    const zeroToTwo = fromTo(0, 2);
    expect(zeroToTwo()).toBe(0);
    expect(zeroToTwo()).toBe(1);
    expect(zeroToTwo()).toBeUndefined();
  });

  it('should count from -2 to 2', () => {
    const zeroToTwo = fromTo(-2, 2);
    expect(zeroToTwo()).toBe(-2);
    expect(zeroToTwo()).toBe(-1);
    expect(zeroToTwo()).toBe(0);
    expect(zeroToTwo()).toBe(1);
    expect(zeroToTwo()).toBeUndefined();
  });
});

describe('element', () => {
  const arr = ['a', 'b', 'c', 'd'];

  it('should return a function', () => {
    const fn = element(arr, fromTo(1, 3));
    expect(fn).toBeFunction();
  });

  it('should be undefined for end less than start', () => {
    const ele = element(arr, fromTo(1, 0));
    expect(ele()).toBeUndefined();
    expect(ele()).toBeUndefined();
    expect(ele()).toBeUndefined();
  });

  it('should count from 0 to 0', () => {
    const ele = element(arr, fromTo(0, 0));
    expect(ele()).toBeUndefined();
  });

  it('should return b & c', () => {
    const ele = element(arr, fromTo(1, 3));
    expect(ele()).toBe('b');
    expect(ele()).toBe('c');
    expect(ele()).toBeUndefined();
  });

  it('should return entire array if generate is omitted', () => {
    const ele = element(arr);
    expect(ele()).toBe('a');
    expect(ele()).toBe('b');
    expect(ele()).toBe('c');
    expect(ele()).toBe('d');
    expect(ele()).toBeUndefined();
  });
});
