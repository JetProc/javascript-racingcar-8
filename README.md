# javascript-racingcar-precourse

## 1. 🔆 프로젝트 큰 흐름

1. `InputView`를 통해 `자동차 이름 문자열`과 `시도 횟수` **입력 받기**

   a) `Validator`를 통해 입력받은 값들의 **유효성 검사**

2. 유효성 검사를 통과하면, 이 입력값들을 `Race` 클래스로 전달하여 새로운 **`Race` 인스턴스 생성**

3. `OutputView`를 통해 결과 `실행 결과` **헤더 문구 출력**

4. 입력받은 `시도 횟수`만큼 **`for` 루프 실행**

   a) `Race` 모델의 **`playRound()` 메서드 호출**

   1. `Race` 모델의 `this.cars` 배열을 `forEach`로 순회하며 **각 `Car` 인스턴스의 `move()` 메서드 호출**

   2. `RandomGenerator`로 0~9 사이 숫자를 받고, 4 이상이면 **자신의 `moveCount` 1 증가**

   3. `OutputView`를 통해 **현재 라운드의 실행 결과 출력**

5. `for` 루프가 종료되면, `Race` 모델의 `getWinners()` 메서드를 호출하여 **최종 우승자 이름 배열 받기**

6. `OutputView`를 통해 **최종 우승자 출력**

---

## 2. 📁 프로젝트 구조

```
src
├── App.js                  # Controller (메인 로직 담당)
├── index.js
│
├── constants/              # Constants (상수 관리)
│ ├── index.js
│ ├── messages.js
│ └── config.js
│
├── domain/                 # Model (핵심 로직 및 데이터 관리)
│ ├── Car.js                 ## Car 클래스 (이름, 위치, move 메서드)
│ └── Race.js                ## Race 클래스 (Car 배열 관리, 라운드 실행, 우승자 판별)
│
├── utils/                  # Utilities (보조 도구)
│ └── RandomGenerator.js     ## 0~9 사이 무작위 숫자 생성
│
├── validate/               # Validator (유효성 검증)
│ ├── validator.js
│ └── checkers.js
│
├── view/                   # View (입출력 담당)
│ ├── InputView.js
│ └── OutputView.js
│
tests/                      # Test
  ├── CarTest.js             ## Car 클래스 테스트
  ├── RaceTest.js            ## Race 클래스 테스트
  └── ValidatorTest.js       ## Validator 테스트
```

---

## 3. ✅ 구현할 기능 목록

- **[공통]**
  - [x] `App.js`의 `run()` 메서드를 구현하여 프로그램 전체 흐름 제어
  - [x] `constants`폴더에 모든 입력/출력/에러 메시지와 config를 정의
- **[View]**
  - [x] `InputView`: 자동차 이름을 입력 받는 기능 구현
  - [x] `InputView`: 시도할 횟수를 입력 받는 기능 구현
  - [x] `OutputView`: "실행 결과" 헤더를 출력하는 기능 구현
  - [x] `OutputView`: 각 라운드별 실행 결과를 출력하는 기능 구현
  - [x] `OutputView`: 최종 우승자 목록을 포맷에 맞게 출력하는 기능 구현
  - [x] `OutputView`: 에러 메시지를 출력하는 기능 구현
- **[Validator]**
  - [x] **`validateCarNameInput`**: 입력값이 비어있지 않은지 검증
  - [x] **`validateCarNameInput`**: 구분자로 시작하거나 끝나지 않는지 검증
  - [x] **`validateCarNames`**: 자동차 이름이 비어있지 않은지 검증
  - [x] **`validateCarNames`**: 자동차 이름 형식이 올바른지 검증
  - [x] **`validateCarNames`**: 자동차 이름이 최대 길이를 넘지 않는지 검증
  - [x] **`validateCarNames`**: 자동차 이름에 중복이 없는지 검증
  - [x] **`validateTryCountInput`**: 입력값이 비어있지 않은지 검증
  - [x] **`validateTryCountInput`**: 시도 횟수 형식(자연수만 가능)이 올바른지 검증
  - [x] **`validateTryCountInput`**: 시도 횟수 숫자가 너무 크지 않은지(overflow) 검증
- **[Model]**
  - `Car` class: 각 자동차의 정보를 가짐
    1. **property**
       - [x] `name`
       - [x] `moveCount` (초깃값 0)
    2. **method**
       - [x] `move(randomNumber)`: `randomNumber`가 4 이상이면 `movecount`를 1 올림
- **[Model]**
  - `Race` class: 자동차 이름 문자열을 받아 `Car` 인스턴스 배열 생성
    1. **property**
       - [x] `#cars`
    2. **method**
       - [x] `playRound()`: 모든 `Car`에 대해 `move()` 실행 후 결과 출력
       - [x] `getWinners()`: 가장 `moveCount` 가 높은 `Car` 의 `name` 배열 return
       - [x] `#getCarsWithMaxMove()`: 가장 높은 `moveCount` 를 가진 `Car` 인스턴스 return
       - [x] `#getMaxMoveCount()`: 모든 `Car` 중 가장 높은 `moveCount` return
- **[Utils]**
  - [x] `RandomGenerator`: startNum과 endNum 사이의 무작위 정수 return

---

## 4. ‼️ 예외 처리 고려 사항

1. **자동차 이름 입력 (`validateCarNameInput`)**
   - **입력 없음 (COMMON_ERROR.MUST_INPUT)**
     - [x] 빈 문자열 (`""`)
     - [x] 공백 문자열 (`" "`)
   - **구분자(`,`) 위치 오류 (CAR_NAME_ERROR.INVALID_SEPARATOR)**
     - [x] 문자열이 구분자로 시작하는 경우 (`,pobi,woni`)
     - [x] 문자열이 구분자로 끝나는 경우 (`pobi,woni,`)
     - [x] 구분자만 입력된 경우 (`,,,`)
2. **자동차 이름 검증 (`validateCarNames`)**
   - **이름 내용 (공백/비어있음) (CAR_NAME_ERROR.MUST_NOT_BE_EMPTY)**
     - [x] 이름 중간에 빈 값이 있는 경우 (`pobi,,woni`) -> `['pobi', '', 'woni']`
   - **이름 길이 (CAR_NAME_ERROR.INVALID_LENGTH)**
     - [x] 이름이 5자를 초과하는 경우 (`pobi,woni,javascript`)
   - **이름 포맷 (CAR_NAME_ERROR.INVALID_FORMAT)**
     - [x] 이름이 공백 문자로만 이루어진 경우 (`pobi, ,woni`) -> `['pobi', ' ', 'woni']`
     - [x] 이름에 허용되지 않는 특수문자가 포함된 경우 (`pobi,jun!`)
     - [x] 이름 포맷: 공백 없는 한글, 영문, 숫자 조합만 가능.
   - **이름 중복 (CAR_NAME_ERROR.MUST_NOT_BE_DUPLICATED)**
     - [x] 동일한 이름이 중복된 경우 (`pobi,woni,pobi`)
3. **시도할 횟수 입력 (`validateTryCountInput`)**
   - **입력 없음 (COMMON_ERROR.MUST_INPUT)**
     - [x] 빈 문자열 (`""`)
     - [x] 공백 문자열 (`" "`)
   - **올바른 형식 아님 (ROUND_ERROR.INVALID_FORMAT)**
     - [x] 숫자가 아닌 문자 (한글, 영어, 특수문자 등) (`ten`)
     - [x] 음수 (`5`)
     - [x] 소수 (`1.5`, `0.1`)
     - [x] 천 단위 쉼표가 포함된 경우 (`1,000`)
     - [x] 0
   - **Overflow (ROUND_ERROR.MUST_NOT_OVERFLOW)**
     - [x] `Number.MAX_SAFE_INTEGER`를 초과하는 매우 큰 수
