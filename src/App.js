import Race from './domain/Race.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import { validateCarNameInput, validateTryCountInput, validateCarNames } from './validate/validator.js';

class App {
  async run() {
    try {
      const carNamesInput = await InputView.inputCarNames();
      validateCarNameInput(carNamesInput);

      const carNames = carNamesInput.split(',').map((name) => name.trim());
      validateCarNames(carNames);

      const tryCount = await InputView.inputTryCount();
      validateTryCountInput(tryCount);

      const race = new Race(carNames);

      OutputView.printResultHeader();

      for (let _ = 0; _ < tryCount; _++) {
        race.playRound();
      }

      const winners = race.getWinners();
      OutputView.printWinners(winners);
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }
}

export default App;
