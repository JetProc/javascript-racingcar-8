export function isInputEmpty(input) {
  return input === '';
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
export function isCarNameInvalidFormat(names) {
  const nameRegex = /^[a-zA-Z0-9가-힣]+$/;
  return names.some((name) => !nameRegex.test(name));
}
export function hasDuplicates(names) {
  const uniqueNames = new Set(names);
  return uniqueNames.size !== names.length;
}

export function isTryCountCorrectFormat(input) {
  return /^[0-9]+$/.test(input);
}
export function isPositive(input) {
  return Number(input) > 0;
}
export function isOverflowNumber(input) {
  return BigInt(input) > BigInt(Number.MAX_SAFE_INTEGER);
}
