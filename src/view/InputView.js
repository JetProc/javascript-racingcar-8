import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/index.js';

const InputView = {
  async inputCarNames() {
    const input = await Console.readLineAsync(CONSOLE_MESSAGE.INPUT.CAR_NAMES);
    return input;
  },

  async inputTryCount() {
    const input = await Console.readLineAsync(CONSOLE_MESSAGE.INPUT.TRY_COUNT);
    return input;
  },
};

export default InputView;
