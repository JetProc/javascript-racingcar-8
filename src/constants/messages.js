export const PREFIX = {
  ERROR: '[ERROR] ',
};

export const CONSOLE_MESSAGE = {
  INPUT: {
    CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  },
  OUTPUT: {
    HEADER: '실행 결과\n',
    WINNERS: '최종 우승자 : ',
  },
};

export const ERROR_MESSAGE = {
  CAR_NAME: {
    INVALID_LENGTH: `${PREFIX.ERROR}자동차 이름은 5자 이하로만 입력할 수 있습니다.`,
    MUST_NOT_BE_EMPTY: `${PREFIX.ERROR}자동차 이름이 비어 있거나 공백으로만 이루어져 있습니다.`,
    INVALID_SEPARATOR: `${PREFIX.ERROR}자동차 이름 입력 형식이 올바르지 않습니다. (쉼표 위치를 확인하세요)`,
    MUST_NOT_BE_DUPLICATED: `${PREFIX.ERROR}자동차 이름은 중복될 수 없습니다.`,
    INVALID_FORMAT: `${PREFIX.ERROR}자동차 이름에는 숫자나 특수문자를 포함할 수 없습니다.`,
    MUST_NOT_BE_ONLY_NUMBERS: `${PREFIX.ERROR}자동차 이름은 숫자로만 이루어질 수 없습니다.`,
    MUST_BE_INPUT: `${PREFIX.ERROR}자동차 이름을 반드시 입력해야 합니다.`,
  },
  ROUND: {
    MUST_BE_NUMBER: `${PREFIX.ERROR}시도할 횟수는 숫자만 입력할 수 있습니다.`,
    MUST_BE_INPUT: `${PREFIX.ERROR}시도할 횟수를 입력해야 합니다.`,
    MUST_BE_POSITIVE: `${PREFIX.ERROR}시도할 횟수는 1 이상이어야 합니다.`,
    MUST_BE_INTEGER: `${PREFIX.ERROR}시도할 횟수는 정수로 입력해야 합니다.`,
    INVALID_FORMAT: `${PREFIX.ERROR}시도할 횟수 입력 형식이 올바르지 않습니다.`,
    MUST_NOT_OVERFLOW: `${PREFIX.ERROR}입력한 숫자가 너무 큽니다. 다시 입력해주세요.`,
  },
};
