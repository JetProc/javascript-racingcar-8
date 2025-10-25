export function isTrimmedInputEmpty(input) {
  return input.trim() === '';
}
export function startsWith(input, char) {
  return input.startsWith(char);
}
export function endsWith(input, char) {
  return input.endsWith(char);
}

export function hasEmptyName(names) {
  return names.some((name) => name === '');
}
export function hasNameLongerThan(names, maxLength) {
  return names.some((name) => name.length > maxLength);
}
export function hasDuplicates(names) {
  const uniqueNames = new Set(names);
  return uniqueNames.size !== names.length;
}

export function isCorrectFormat(input) {
  return /^[0-9]+$/.test(input);
}
export function isOverflowNumber(input) {
  return BigInt(input) > BigInt(Number.MAX_SAFE_INTEGER);
}
