import { ERROR_MESSAGE, MAX_NAME_LENGTH, SEPARATOR } from '../constants/index.js';
import {
  isTrimmedInputEmpty,
  startsWith,
  endsWith,
  isTryCountCorrectFormat,
  isOverflowNumber,
  hasEmptyName,
  hasNameLongerThan,
  isCarNameInvalidFormat,
  hasDuplicates,
} from './checkers.js';

const { COMMON: COMMON_ERROR, CAR_NAME: CAR_NAME_ERROR, ROUND: ROUND_ERROR } = ERROR_MESSAGE;

// 입력 문자열 검증
export function validateCarNameInput(input) {
  console.log('INPT:', input);
  if (isTrimmedInputEmpty(input)) {
    throw new Error(COMMON_ERROR.MUST_INPUT);
  }

  if (startsWith(input, SEPARATOR) || endsWith(input, SEPARATOR)) {
    throw new Error(CAR_NAME_ERROR.INVALID_SEPARATOR);
  }
}

// 시도 횟수 검증
export function validateTryCountInput(input) {
  if (isTrimmedInputEmpty(input)) {
    throw new Error(COMMON_ERROR.MUST_INPUT);
  }

  if (!isTryCountCorrectFormat(input)) {
    throw new Error(ROUND_ERROR.INVALID_FORMAT);
  }

  if (isOverflowNumber(input)) {
    throw new Error(ROUND_ERROR.MUST_NOT_OVERFLOW);
  }
}

// 자동차 이름 검증
export function validateCarNames(names) {
  if (hasEmptyName(names)) {
    throw new Error(CAR_NAME_ERROR.MUST_NOT_BE_EMPTY);
  }

  if (hasNameLongerThan(names, MAX_NAME_LENGTH)) {
    throw new Error(CAR_NAME_ERROR.INVALID_LENGTH);
  }

  if (isCarNameInvalidFormat(names)) {
    throw new Error(CAR_NAME_ERROR.INVALID_FORMAT);
  }

  if (hasDuplicates(names)) {
    throw new Error(CAR_NAME_ERROR.MUST_NOT_BE_DUPLICATED);
  }
}
