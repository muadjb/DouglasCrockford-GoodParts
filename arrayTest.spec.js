import { remove, concatUnique, getUniqueById } from './arrayTest';

xdescribe('getUniqueById', () => {
  it('should return empty array', () => {
    const a = [];
    const b = [];
    expect(getUniqueById(a, b)).toMatchObject([]);
  });

  it('should return empty array', () => {
    const a = [''];
    const b = [''];
    expect(getUniqueById(a, b)).toMatchObject([]);
  });

  it('should return empty array', () => {
    const a = [1];
    const b = [2];
    expect(getUniqueById(a, b)).toMatchObject([2]);
  });

  it('should return empty array', () => {
    const a = [1];
    const b = [1];
    expect(getUniqueById(a, b)).toMatchObject([]);
  });

  it('should return empty array', () => {
    const a = [{}];
    const b = [{}];
    expect(getUniqueById(a, b)).toMatchObject([]);
  });

  it('should return empty array', () => {
    const a = [{ id: 1, label: 'a' }, { id: 2, label: 'b' }, { id: 3, label: 'c' }];
    const b = [{ id: 3, label: 'c' }, { id: 4, label: 'd' }];
    expect(getUniqueById(a, b)).toMatchObject([
      { id: 4, label: 'd' },
    ]);
  });
});

xdescribe('concatUnique', () => {
  it('should return empty array', () => {
    const a = [];
    const b = [];
    expect(concatUnique(a, b)).toMatchObject([]);
  });

  it('should return empty array', () => {
    const a = [''];
    const b = [''];
    expect(concatUnique(a, b)).toMatchObject(['']);
  });

  it('should return empty array', () => {
    const a = [1];
    const b = [2];
    expect(concatUnique(a, b)).toMatchObject([1, 2]);
  });

  it('should return empty array', () => {
    const a = [1];
    const b = [1];
    expect(concatUnique(a, b)).toMatchObject([1]);
  });

  it('should return empty array', () => {
    const a = [{}];
    const b = [{}];
    expect(concatUnique(a, b)).toMatchObject([{}]);
  });

  it('should return empty array', () => {
    const a = [{ id: 1, label: 'a' }, { id: 2, label: 'b' }, { id: 3, label: 'c' }];
    const b = [{ id: 3, label: 'c' }, { id: 4, label: 'd' }];
    expect(concatUnique(a, b)).toMatchObject([
      { id: 1, label: 'a' },
      { id: 2, label: 'b' },
      { id: 3, label: 'c' },
      { id: 4, label: 'd' },
    ]);
  });
});

describe('remove', () => {
  it('', () => {
    const a = [{ id: 1, label: 'a' }, { id: 2, label: 'b' }, { id: 3, label: 'c' }];
    const b = [{ id: 3, label: 'c' }];
    expect(remove(a, b)).toMatchObject([
      { id: 1, label: 'a' },
      { id: 2, label: 'b' },
    ]);
  });
});
