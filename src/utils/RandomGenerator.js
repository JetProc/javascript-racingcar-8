import { MissionUtils } from '@woowacourse/mission-utils';
import { RANDOM_NUM } from '../constants/index.js';

export default function RandomGenerator() {
  return MissionUtils.Random.pickNumberInRange(RANDOM_NUM.START, RANDOM_NUM.END);
}
