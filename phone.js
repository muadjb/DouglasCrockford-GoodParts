export function extractDigits(input) {
  return input.replace(/[\D]/g, '');
}

export function format(digits) {
  if ( !digits) return '';

  const match = digits.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : '';
  // return match ? `(${match[1]}) ${match[2]}-${match[3]}` : '';
}
