import { validateCarNameInput, validateTryCountInput, validateCarNames } from '../src/validate/validator.js';
import { ERROR_MESSAGE } from '../src/constants/index.js';

const { COMMON: COMMON_ERROR, CAR_NAME: CAR_NAME_ERROR, ROUND: ROUND_ERROR } = ERROR_MESSAGE;

describe('Validator: 자동차 경주 게임 입력 유효성 검사', () => {
  describe('자동차 이름 문자열 입력 (validateCarNameInput)', () => {
    test.each([['pobi,woni,jun'], ['car1,car2'], ['a,b,c,d,e'], ['one']])(
      '정상적인 입력 (%s)은 예외를 발생시키지 않아야 함',
      (input) => {
        expect(() => validateCarNameInput(input)).not.toThrow();
      }
    );

    const errorCases = [
      { input: '', message: COMMON_ERROR.MUST_INPUT },
      { input: ' ', message: COMMON_ERROR.MUST_INPUT },
      { input: ',pobi,woni', message: CAR_NAME_ERROR.INVALID_SEPARATOR },
      { input: 'pobi,woni,', message: CAR_NAME_ERROR.INVALID_SEPARATOR },
      { input: ',,,,', message: CAR_NAME_ERROR.INVALID_SEPARATOR },
    ];

    test.each(errorCases)('입력 오류: "$input" (기대 메시지: $message)', ({ input, message }) => {
      expect(() => validateCarNameInput(input)).toThrow(message);
    });
  });

  describe('자동차 이름 배열 (validateCarNames)', () => {
    test.each([[['pobi', 'woni', 'jun']], [['car1', 'car2']], [['a', 'b', 'c', 'd', 'e']], [['one']]])(
      '정상적인 이름 배열 (%s)은 예외를 발생시키지 않아야 함',
      (names) => {
        expect(() => validateCarNames(names)).not.toThrow();
      }
    );

    const errorCases = [
      { names: ['pobi', '', 'woni'], message: CAR_NAME_ERROR.MUST_NOT_BE_EMPTY },
      { names: ['pobi', 'woni', 'javascript'], message: CAR_NAME_ERROR.INVALID_LENGTH },
      { names: ['pobi', ' ', 'woni'], message: CAR_NAME_ERROR.INVALID_FORMAT }, // space
      { names: ['pobi', 'jun!'], message: CAR_NAME_ERROR.INVALID_FORMAT }, // special char
      { names: ['pobi', 'woni', 'pobi'], message: CAR_NAME_ERROR.MUST_NOT_BE_DUPLICATED },
    ];

    test.each(errorCases)('이름 배열 오류: %s (기대 메시지: $message)', ({ names, message }) => {
      expect(() => validateCarNames(names)).toThrow(message);
    });
  });

  describe('시도 횟수 입력 (validateTryCountInput)', () => {
    test.each([['1'], ['10'], ['100'], ['  5  '], [String(Number.MAX_SAFE_INTEGER)]])(
      '정상적인 시도 횟수 입력 (%s)은 예외를 발생시키지 않아야 함',
      (input) => {
        expect(() => validateTryCountInput(input)).not.toThrow();
      }
    );

    const errorCases = [
      { input: '', message: COMMON_ERROR.MUST_INPUT },
      { input: ' ', message: COMMON_ERROR.MUST_INPUT },
      { input: 'ten', message: ROUND_ERROR.INVALID_FORMAT },
      { input: '-5', message: ROUND_ERROR.INVALID_FORMAT },
      { input: '1.5', message: ROUND_ERROR.INVALID_FORMAT },
      { input: ' 0 ', message: ROUND_ERROR.INVALID_FORMAT },
      { input: '1,000', message: ROUND_ERROR.INVALID_FORMAT },
      { input: '999999999999999999', message: ROUND_ERROR.MUST_NOT_OVERFLOW },
    ];

    test.each(errorCases)('시도 횟수 입력 오류: "$input" (기대 메시지: $message)', ({ input, message }) => {
      expect(() => validateTryCountInput(input)).toThrow(message);
    });
  });
});
