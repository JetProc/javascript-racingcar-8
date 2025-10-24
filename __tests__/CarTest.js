import Car from '../src/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

describe('Car 클래스 단위 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  test('자동차는 이름을 정확하게 가져야 한다.', () => {
    expect(car.getName()).toBe('pobi');
  });

  test('초기 위치는 0이어야 한다.', () => {
    expect(car.getPosition()).toBe(0);
  });

  test('랜덤 값이 4 이상일 때 (4) 자동차는 1만큼 전진해야 한다.', () => {
    mockRandoms([4]);
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    expect(car.getPosition()).toBe(1);
  });

  test('랜덤 값이 9일 때 자동차는 1만큼 전진해야 한다.', () => {
    mockRandoms([9]);
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    expect(car.getPosition()).toBe(1);
  });

  test('랜덤 값이 3 이하일 때 (3) 자동차는 멈춰야 한다.', () => {
    mockRandoms([3]);
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    expect(car.getPosition()).toBe(0);
  });

  test('랜덤 값이 0일 때 자동차는 멈춰야 한다.', () => {
    mockRandoms([0]);
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    expect(car.getPosition()).toBe(0);
  });

  test('여러 라운드 이동 시 위치가 누적되어야 한다.', () => {
    mockRandoms([4, 3, 5, 1]);
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    car.move(MissionUtils.Random.pickNumberInRange(0, 9));
    expect(car.getPosition()).toBe(2);
  });
});
