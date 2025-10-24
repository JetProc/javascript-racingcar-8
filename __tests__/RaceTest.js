import App from '../src/App.js';
import { Console, Random } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 게임 통합 테스트 (RaceTest)', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test('단일 우승자가 올바르게 결정되어야 한다.', async () => {
    mockQuestions(['pobi,woni,jun', '3']);
    mockRandoms([4, 0, 7, 5, 6, 8, 1, 3, 9]);

    const app = new App();
    await app.run();

    const logs = logSpy.mock.calls.map((call) => call[0]);
    expect(logs).toEqual(expect.arrayContaining(['최종 우승자 : jun']));
  });

  test('공동 우승자가 올바르게 결정되어야 한다.', async () => {
    mockQuestions(['a,b', '2']);
    mockRandoms([5, 6, 4, 7]);

    const app = new App();
    await app.run();

    const logs = logSpy.mock.calls.map((call) => call[0]);
    expect(logs).toEqual(expect.arrayContaining(['최종 우승자 : a, b']));
  });

  test('라운드별 실행 결과가 올바르게 출력되어야 한다.', async () => {
    mockQuestions(['a,b', '2']);
    mockRandoms([4, 3, 6, 1]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('실행 결과'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('a : -'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('b : '));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('a : --'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('b : '));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('최종 우승자 : a'));
  });

  test('유효성 검사 실패 시 오류 메시지를 출력하고 throw 되어야 한다.', async () => {
    const invalidCarNames = 'pobi,woni,javascript';
    const errorMessage = '[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.';
    mockQuestions([invalidCarNames]);

    const app = new App();

    await expect(app.run()).rejects.toThrow(errorMessage);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
  });
});
