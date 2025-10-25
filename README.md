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
│ └── Constants.js
│
├── domain/                 # Model (핵심 로직 및 데이터 관리)
│ ├── Car.js                 ## Car 클래스 (이름, 위치, move 메서드)
│ └── Race.js                ## Race 클래스 (Car 배열 관리, 라운드 실행, 우승자 판별)
│
├── utils/                  # Utilities (보조 도구)
│ └── RandomGenerator.js     ## 0~9 사이 무작위 숫자 생성
│
├── validate/               # Validator (유효성 검증)
│ └── Validator.js
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

## 3. 📄 구현할 기능 목록

- **[공통]**
  - [ ] `App.js`의 `run()` 메서드를 구현하여 프로그램 전체 흐름을 제어한다.
  - [ ] `Constants.js`에 모든 입력/출력/에러 메시지와 매직 넘버를 정의한다.
- **[View]**
  - [ ] `InputView`: 자동차 이름 입력을 받는 기능을 구현한다.
  - [ ] `InputView`: 시도할 횟수 입력을 받는 기능을 구현한다.
  - [ ] `OutputView`: "실행 결과" 헤더를 출력하는 기능을 구현한다.
  - [ ] `OutputView`: 각 라운드별 실행 결과(`pobi : --`)를 출력하는 기능을 구현한다.
  - [ ] `OutputView`: 최종 우승자 목록을 포맷에 맞게 출력하는 기능을 구현한다.
  - [ ] `OutputView`: 에러 메시지를 `[ERROR]` 접두사와 함께 출력하는 기능을 구현한다.
- **[Validator]**
  - [ ] `Validator`: 자동차 이름이 5자 이하인지 검증하는 기능을 구현한다.
  - [ ] `Validator`: 자동차 이름이 비어있지 않은지 검증한다.
  - [ ] `Validator`: 시도할 횟수가 1 이상의 숫자인지 검증한다.
  - [ ] `Validator`: 유효하지 않은 경우 `[ERROR]`가 포함된 에러를 `throw` 한다.
- **[Model] - `Car.js`**
  - [ ] `Car` 클래스는 `name`과 `position` (초기값 0)을 갖는다.
  - [ ] `Car` 클래스는 `move(randomNumber)` 메서드를 갖는다.
  - [ ] `move` 메서드는 숫자가 4 이상일 때 `position`을 1 증가시킨다.
- **[Model] - `Race.js`**
  - [ ] `Race` 클래스는 생성자에서 자동차 이름 문자열을 받아 `Car` 인스턴스 배열을 생성한다.
  - [ ] `playRound()` 메서드를 구현한다. (모든 `Car`에 대해 `move` 실행)
  - [ ] `getWinners()` 메서드를 구현한다. (가장 `position`이 높은 자동차들의 `name` 배열을 반환)
  - [ ] `getCars()` 메서드를 구현한다. (현재 `Car` 배열 상태 반환)
- **[Utils]**
  - [ ] `RandomGenerator`: 0에서 9 사이의 무작위 숫자를 반환하는 기능을 구현한다.

---

## 4. ‼️ 예외 처리 고려 사항

1. **자동차 이름 입력 (`validateCarNames`)**
   - **이름 길이**
     - [ ] 이름이 5자를 초과하는 경우 (`pobi,woni,javascript`)
   - **이름 내용 (공백/비어있음)**
     - [ ] 이름 중간에 빈 값이 있는 경우 (`pobi,,woni`) - `split` 결과: `['pobi', '', 'woni']`
     - [ ] 이름이 공백 문자로만 이루어진 경우 (`pobi, ,woni`) - `split` 결과: `['pobi', ' ', 'woni']`
   - **구분자(`,`) 위치 오류**
     - [ ] 문자열이 쉼표로 시작하는 경우 (`,pobi,woni`)
     - [ ] 문자열이 쉼표로 끝나는 경우 (`pobi,woni,`)
     - [ ] 쉼표만 입력된 경우 (`,,,`)
   - **입력 없음**
     - [ ] 빈 문자열(`""`)이 입력된 경우 (사용자가 `Enter`만 입력)
     - [ ] 공백 문자열(`" "`)만 입력된 경우
   - **이름 중복**
     - [ ] 동일한 이름이 중복된 경우 (`pobi,woni,pobi`)
   - **이름 포맷**
     - [ ] 이름 포맷: 5자 이하, 공백 없는 한글, 영문, 숫자 조합만 가능.
2. **시도할 횟수 입력 (`validateRounds`)**
   - **숫자 형태 아님**
     - [ ] 숫자가 아닌 문자 (한글, 영어, 특수문자 등)
     - [ ] 빈 문자열 (`""`)
     - [ ] 공백 문자열 (`" "`)
   - **숫자 범위 (1 미만)**
     - [ ] `0` 불가
     - [ ] `음수` 불가
   - **숫자 타입 (정수 아님)**
     - [ ] 소수 (`1.5`, `0.1`) 불가
     - [ ] 지수 표기법 (`1e3`) 불가
     - [ ] 16진수 등 다른 진수 (`0xFF`) 불가
   - **포맷팅 오류**
     - [ ] 숫자 앞뒤로 공백이 있는 경우
     - [ ] 천 단위 쉼표가 포함된 경우 (`1,000`)
   - **overflow**
     - [ ] `Number.MAX_SAFE_INTEGER`를 초과하는 매우 큰 수
