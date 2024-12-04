function print(a: number, b: number, c?: number): void {
  // return이 없는경우 void로 반환
  console.log("print() 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2, 4, 6); // 2 4 6
print(2, 4); // 2 4 undefined

function print2(a: number, b: number, c = 100): void {
  //
  console.log("print() 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(2, 4, 6); // 2 4 6
print2(2, 4); // 2 4 100 ?를 이용해 값을 안넣으면 기본값으로 나옴

// string을 리턴
function sayHello(): string {
  // 반환값이 이미 string이므로 명시를 안해도 되간함
  return "Hello";
}

function concatString(x: string, y: string) {
  return x + y;
}

// number 리턴
function squareArea(x: number, y: number) {
  return x * y;
}

const circleArea = (r: number): number => {
  return r * r * Math.PI;
};

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const std: Greet = {
  name: "gildong",
  hi() {
    return "안녕" + this.name;
  },
  bye(a: number) {
    return `작별 인사 ${a}번 하기`;
  },
};

console.log(std.bye(4));

//  never
// : 함수의 끝에 절대 도달하지 않는 경우
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

// 실습
function sum1(num1: number, num2: number) {
  console.log(num1 + num2);
}

sum1(5, 11);

// 실습2
function sum2(...n: Array<number>): number {
  let sum = 0;
  n.forEach((el) => (sum += el));
  return sum;
}

console.log(sum2(1, 2, 3));
