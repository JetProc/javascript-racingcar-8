import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printResultHeader() {
    Console.print(CONSOLE_MESSAGE.OUTPUT.RESULT_HEADER);
  },

  printRoundResult(cars) {
    cars.forEach(({ name, moveCount }) => {
      Console.print(`${name} : ${'-'.repeat(moveCount)}`);
    });
    Console.print('');
  },

  printWinners(winners) {
    Console.print(`${CONSOLE_MESSAGE.OUTPUT.WINNERS}${winners.join(', ')}`);
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;
