class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.moveCount++;
    }
  }
}

export default Car;
