import { add } from './challenge1';
import {counter, revocable} from './challenge7';

describe('counter', () => {
  it('should return an object', () => {
    const obj = counter(10);
    expect(obj).toBeObject();
  });

  it('should contain up method', () => {
    const obj = counter(10);
    expect(obj.up).toBeFunction();
    expect(obj.up()).toBe(11);
  });

  it('should contain down method', () => {
    const obj = counter(10);
    expect(obj.down).toBeFunction();
    expect(obj.down()).toBe(9);
  });
});

describe('revocable', () => {
  it('should return an object', () => {
    const obj = revocable(add);
    expect(obj).toBeObject();
  });

  it('should invoke ', () => {
    const rev = revocable(add);
    const add_rev = rev.invoke;
    expect(add_rev(3,4)).toBe(7);
  });

  it('should invoke and revoke', () => {
    const rev = revocable(add);
    const add_rev = rev.invoke;
    expect(add_rev(3,4)).toBe(7);
    rev.revoke();
    expect(add_rev(5,4)).toBe(undefined);
  });

});