import { addm, m, liftm } from './challenge8';
import { add, mul } from './challenge1';

describe('m', () => {
  it('should return an object', () => {
    const obj = m(10);
    expect(obj).toBeObject();
  });

  it('should return 10', () => {
    const obj = m(10);
    expect(obj.value).toBe(10);
    expect(obj.source).toBe('10');
  });

  it('should return PI', () => {
    const obj = m(Math.PI, 'pi');
    expect(obj.value).toBeCloseTo(3.1415);
    expect(obj.source).toBe('pi');
  });
});

describe('addm', () => {
  it('should return an object', () => {
    const obj = addm(m(10), m(20));
    expect(obj).toBeObject();
  });

  it('should add 10 & 20', () => {
    const obj = addm(m(10), m(20));
    expect(obj.value).toBe(30);
    expect(obj.source).toBe('(10+20)');
  });

  it('should return PI', () => {
    const obj = addm(m(1), m(Math.PI, 'pi'));
    expect(obj.value).toBeCloseTo(4.1415);
    expect(obj.source).toBe('(1+pi)');
  });
});

describe('liftm', () => {
  it('should return an function', () => {
    const obj = liftm(add, '+');
    expect(obj).toBeFunction();
  });

  it('should add 10 & 20', () => {
    const addm = liftm(add, '+');
    const obj = addm(m(10), m(20));
    expect(obj.value).toBe(30);
    expect(obj.source).toBe('(10+20)');
  });

  it('should multiply 10 & 20', () => {
    const addm = liftm(mul, '*');
    const obj = addm(m(10), m(20));
    expect(obj.value).toBe(200);
    expect(obj.source).toBe('(10*20)');
  });

});
