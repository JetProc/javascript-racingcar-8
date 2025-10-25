export const PREFIX = Object.freeze({
  ERROR: '[ERROR] ',
});

export const CONSOLE_MESSAGE = Object.freeze({
  INPUT: {
    CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  },
  OUTPUT: {
    RESULT_HEADER: '\n실행 결과',
    WINNERS: '최종 우승자 : ',
  },
});

export const ERROR_MESSAGE = Object.freeze({
  COMMON: {
    MUST_INPUT: `${PREFIX.ERROR}입력값은 비어있을 수 없습니다.`,
  },
  CAR_NAME: {
    INVALID_SEPARATOR: `${PREFIX.ERROR}자동차 이름 입력 형식이 올바르지 않습니다.`,
    MUST_NOT_BE_EMPTY: `${PREFIX.ERROR}자동차 이름이 비어 있습니다.`,
    INVALID_LENGTH: `${PREFIX.ERROR}자동차 이름은 5자 이하로만 입력할 수 있습니다.`,
    MUST_NOT_BE_DUPLICATED: `${PREFIX.ERROR}자동차 이름은 중복될 수 없습니다.`,
  },
  ROUND: {
    INVALID_FORMAT: `${PREFIX.ERROR}시도할 횟수는 자연수여야 합니다.`,
    MUST_NOT_OVERFLOW: `${PREFIX.ERROR}입력한 숫자가 너무 큽니다.`,
  },
});
