import App from '../src/App.js';

const { validateCarNames, validateRounds } = App;

describe('Validator: 자동차 경주 게임 입력 유효성 검사', () => {
  describe('자동차 이름 유효성 검사 (validateCarNames)', () => {
    test.each([['pobi,woni,jun'], ['car1,car2'], ['a,b,c,d,e'], ['one']])(
      '정상적인 이름 입력 (%s)은 예외를 발생시키지 않아야 함',
      (input) => {
        expect(() => validateCarNames(input)).not.toThrow();
      }
    );

    const carNameErrorCases = [
      { input: 'pobi,woni,javascript', message: '[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.' },
      { input: 'pobi,,woni', message: '[ERROR] 자동차 이름은 비어있을 수 없습니다.' },
      { input: 'pobi, ,woni', message: '[ERROR] 자동차 이름은 비어있을 수 없습니다.' },
      { input: ',pobi,woni', message: '[ERROR] 잘못된 입력 포맷입니다. (쉼표로 시작/끝, 연속된 쉼표)' },
      { input: 'pobi,woni,', message: '[ERROR] 잘못된 입력 포맷입니다. (쉼표로 시작/끝, 연속된 쉼표)' },
      { input: ',,', message: '[ERROR] 잘못된 입력 포맷입니다. (쉼표로 시작/끝, 연속된 쉼표)' },
      { input: '', message: '[ERROR] 자동차 이름은 비어있을 수 없습니다.' },
      { input: ' ', message: '[ERROR] 자동차 이름은 비어있을 수 없습니다.' },
      { input: 'pobi,woni,pobi', message: '[ERROR] 자동차 이름은 중복될 수 없습니다.' },
      { input: 'pobi,woni,jun!,car1,car2', message: '[ERROR] 자동차 이름은 한글, 영어만 가능합니다.' },
      { input: '123,456', message: '[ERROR] 자동차 이름은 한글, 영어만 가능합니다.' },
    ];

    test.each(carNameErrorCases)('이름 입력 오류: $input (기대 메시지: $message)', ({ input, message }) => {
      expect(() => validateCarNames(input)).toThrow(message);
    });
  });

  describe('시도 횟수 유효성 검사 (validateRounds)', () => {
    test.each([['1'], ['10'], ['100'], [String(Number.MAX_SAFE_INTEGER)]])(
      '정상적인 시도 횟수 입력 (%s)은 예외를 발생시키지 않아야 함',
      (input) => {
        expect(() => validateRounds(input)).not.toThrow();
      }
    );

    const roundErrorCases = [
      { input: 'ten', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: ' ', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '0', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '-5', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '1.5', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '0xFF', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: ' 5 ', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '1,000', message: '[ERROR] 시도 횟수는 1 이상의 정수로 입력되어야 합니다.' },
      { input: '999999999999999999', message: '[ERROR] 시도 횟수가 너무 큽니다.' },
    ];

    test.each(roundErrorCases)('시도 횟수 입력 오류: $input (기대 메시지: $message)', ({ input, message }) => {
      expect(() => validateRounds(input)).toThrow(message);
    });
  });
});
