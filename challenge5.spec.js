import { fromTo } from './challenge4';
import { collect, concat, filter } from './challenge5';

describe('collect', () => {
  const array = [];
  beforeEach(() => (array.length = 0));

  it('should return a function', () => {
    const fn = collect(fromTo(0, 2), array);
    expect(fn).toBeFunction();
  });

  it('should count to 2 from 0', () => {
    const col = collect(fromTo(0, 2), array);
    expect(col()).toBe(0);
    expect(col()).toBe(1);
    expect(col()).toBeUndefined();
    expect(array).toMatchObject([0, 1]);
  });
});

describe('filter', () => {
  const isEven = x => x % 2 === 0;
  it('should return a function', () => {
    const fn = filter(fromTo(0, 2), isEven);
    expect(fn).toBeFunction();
  });

  it('should return 0 & 2', () => {
    const fil = filter(fromTo(0, 3), isEven);
    expect(fil()).toBe(0);
    expect(fil()).toBe(2);
    expect(fil()).toBeUndefined();
  });

  it('should return 3 & 4', () => {
    const gt2 = x => x > 2;
    const fil = filter(fromTo(0, 5), gt2);
    expect(fil()).toBe(3);
    expect(fil()).toBe(4);
    expect(fil()).toBeUndefined();
  });

  it('should return undefined', () => {
    const lt0 = x => x < 0;
    const fil = filter(fromTo(0, 5), lt0);
    expect(fil()).toBeUndefined();
    expect(fil()).toBeUndefined();
    expect(fil()).toBeUndefined();
    expect(fil()).toBeUndefined();
  });
});

describe('concat', () => {
  it('should return a function', () => {
    const fn = concat(fromTo(0, 2), fromTo(0, 4));
    expect(fn).toBeFunction();
  });

  it('should return undefined', () => {
    const con = concat(fromTo(0, 0), fromTo(0, -2));
    expect(con()).toBeUndefined();
    expect(con()).toBeUndefined();
    expect(con()).toBeUndefined();
  });

  it('should return 0 & 2', () => {
    const con = concat(fromTo(0, 2), fromTo(0, 4));
    expect(con()).toBe(0);
    expect(con()).toBe(1);
    expect(con()).toBe(0);
    expect(con()).toBe(1);
    expect(con()).toBe(2);
    expect(con()).toBe(3);
    expect(con()).toBeUndefined();
  });
});
