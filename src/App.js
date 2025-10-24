import Race from './domain/Race.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    try {
      const carNamesInput = await InputView.inputCarNames();
      const tryCount = await InputView.inputTryCount();

      //유효성 검증
      const carNames = carNamesInput.split(',');
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
