// only typesctipt type

// Tuple
let drink: [string, string] = ["사이다", "롯데"];
drink[0] = "cider";
drink[1] = "lotte";
// drink.push("wow");  // 동작이 됨 -> tuple의 한계 (2개만 넣기로 했는데 푸쉬로 하나더 추가해도 동작함)
console.log(drink);

// readonly : 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ["사이다", 2000];
// drink2.push // error(readonly 속성이라)

let olimpic_newgame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성계주" },
  true,
];

// olimpic_newgame[1]=false; // Cannot assign to '1' because it is a read-only property.ts(2540)
console.log(olimpic_newgame);

// enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum cake { // 따로 값을 지정안하면 그냥 0,1, ... 이렇게 저장됨
  choco,
  vanila,
  lemon = "레몬",
}

console.log(cake.choco, cake.vanila, cake.lemon);

// any
// 명시적으로
let val: any;
val = true;
val = 10;
val = "string";

// 암묵적으로
let val2; // 아무것도 안쓰면 any로 자동으로 됨

// 사용자 정의 타입 : type & interface

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "홍길동",
  isPassed: true,
  // addr:"seoul", 이런식으로 다른 값이 들어오는 것도 막아준다.
};

const student2: object = {
  name: "홍길동",
  isPassed: true,
  addr: "seoul", // object로 하면 이렇게 잘됨
};

// interface 상속
enum Score {
  Aplus = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

interface BasballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ? : 있어도 ㅚ고 없어도 됨
  [grade: number]: Score;
}

const baseballStudent: BasballClub = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  height: 190,
  backNumber: 17, // 없어도됨
  1: Score.B,
  2: Score.A,
};

console.log(baseballStudent);

// 실습 2.
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨쳐파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log("A", heroGame_A);
console.log("B", heroGame_B);

///// 2. Type
type Bp1 = 500 | 700 | 1000; // type의 경우 지정된 값만 쓸 수 있도록
enum Bp2 { // enum의 경우 지정된 값을 이해하기 쉽도록 이름으로 설정
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

// 교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;

const toycar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발~");
  },
  color: "blue",
  price: 5000,
};

type Gender = "F" | "M";
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};
