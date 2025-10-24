import { MissionUtils } from '@woowacourse/mission-utils';

export default function RandomGenerator(startNum, endNum) {
  return MissionUtils.Random.pickNumberInRange(startNum, endNum);
}
