import Car from './Car.js';
import RandomGenerator from '../utils/RandomGenerator.js';
import { RANDOM_NUM } from '../constants/index.js';

class Race {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  playRound() {
    this.#cars.forEach((car) => {
      const randomNum = RandomGenerator(RANDOM_NUM.START, RANDOM_NUM.END);
      car.move(randomNum);
    });
  }

  getWinners() {
    return this.#getCarsWithMaxMove().map((car) => car.name);
  }

  #getCarsWithMaxMove() {
    const maxMove = this.#getMaxMoveCount();
    return this.#cars.filter((car) => car.moveCount === maxMove);
  }

  #getMaxMoveCount() {
    return Math.max(...this.#cars.map((car) => car.moveCount));
  }
}

export default Race;
