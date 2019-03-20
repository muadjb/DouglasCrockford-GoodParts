import { add, addf, identityf, liftf, mul } from './challenge1';

describe('identityf', () => {
  it('has identity of 3 ', () => {
    const three = identityf(3);
    expect(three()).toBe(3);
  });

  it('has identity of array ', () => {
    const testArray = [1, 2, 3];
    const id = identityf(testArray);
    expect(id()).toBe(testArray);
  });

  it('has identity of object ', () => {
    const testObject = { jb: 42, false: true };
    const id = identityf(testObject);
    expect(id()).toBe(testObject);
  });
});

describe('addf', () => {
  it('should return a function', () => {
    const fn = addf(3);
    expect(fn).toBeFunction();
  });

  it('should add 3 and 4', () => {
    const seven = addf(3)(4);
    expect(seven).toBe(7);
  });
});

describe('liftf', () => {
  it('should return a function', () => {
    const fn = liftf(add);
    expect(fn).toBeFunction();
  });

  it('should add 3 and 4', () => {
    const addf = liftf(add);
    const seven = addf(3)(4);
    expect(seven).toBe(7);
  });

  it('should multiply 5 and 7', () => {
    const mulf = liftf(mul);
    const thirtyFive = mulf(5)(7);
    expect(thirtyFive).toBe(35);
  });
});
