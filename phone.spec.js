import { extractDigits, format } from './phone';

describe('extractNumbers', () => {
  const expected = '1234567890';

  it('should return all digits', () => {
    const input = '12345678902345';
    expect(extractDigits(input)).toBe('12345678902345');
  });

  it('should remove dashes', () => {
    const input = '123-456-7890';
    expect(extractDigits(input)).toBe(expected);
  });

  it('should remove parens', () => {
    const input = '(123) 456-7890';
    expect(extractDigits(input)).toBe(expected);
  });

  it('should remove spaces', () => {
    const input = '  123  456      7890';
    expect(extractDigits(input)).toBe(expected);
  });

  it('should remove special characters', () => {
    const input = '123#(*%^*456,./`~7890';
    expect(extractDigits(input)).toBe(expected);
  });
});

describe('format', () => {
  it('should return empty string for null', () => {
    const digts = null;
    const expected = '';
    expect(format(digts)).toBe(expected);
  });

  it('should return empty string for empty string', () => {
    const digts = '';
    const expected = '';
    expect(format(digts)).toBe(expected);
  });

  it('should return empty string if too few digits', () => {
    const digts = '127890';
    const expected = '';
    expect(format(digts)).toBe(expected);
  });

  it('should return formatted digits', () => {
    const digts = '1234567890';
    const expected = '123-456-7890';
    expect(format(digts)).toBe(expected);
  });
});
