import { fromTo } from './challenge4';
import { fibf, gensymf } from './challenge6';

describe('gensymf', () => {
  it('should return a function', () => {
    const fn = gensymf('G');
    expect(fn).toBeFunction();
  });

  it('should generate symbol series', () => {
    const geng = gensymf('G');
    expect(geng()).toBe('G1');
    expect(geng()).toBe('G2');
    expect(geng()).toBe('G3');
  });
});

describe('fibf', () => {
  it('should return a function', () => {
    const fn = fibf(0, 1);
    expect(fn).toBeFunction();
  });

  it('should return first seed', () => {
    const fib = fibf(0, 1);
    expect(fib()).toBe(0);
  });

  it('should return second seed', () => {
    const fib = fibf(0, 1);
    expect(fib()).toBe(0);
    expect(fib()).toBe(1);
  });

  it('should return sum of seed2', () => {
    const fib = fibf(0, 1);
    expect(fib()).toBe(0);
    expect(fib()).toBe(1);
    expect(fib()).toBe(1);
  });

  it('should return sum of prior sum and next number', () => {
    const fib = fibf(0, 1);
    expect(fib()).toBe(0);
    expect(fib()).toBe(1);
    expect(fib()).toBe(1);
    expect(fib()).toBe(2);
    expect(fib()).toBe(3);
    expect(fib()).toBe(5);
  });

  it('should return first seed', () => {
    const fib = fibf(2, 4);
    expect(fib()).toBe(2);
  });

  it('should return second seed', () => {
    const fib = fibf(2, 4);
    expect(fib()).toBe(2);
    expect(fib()).toBe(4);
  });

  it('should return sum of seeds', () => {
    const fib = fibf(2, 4);
    expect(fib()).toBe(2);
    expect(fib()).toBe(4);
    expect(fib()).toBe(6);
  });

  it('should return sum of prior sum and next number', () => {
    const fib = fibf(2, 4);
    expect(fib()).toBe(2);
    expect(fib()).toBe(4);
    expect(fib()).toBe(6);
    expect(fib()).toBe(10);
    expect(fib()).toBe(16);
  });
});

