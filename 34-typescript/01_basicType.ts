// typescript basic type

// 명시적으로
let a: number = 1;
a = 2;
// a= "hello"
let b: string = "str";
let c: boolean = true;
let d: undefined;
let e: null = null;

// 타입 추론
let aa = 1; // 정의하지 않았지만 number로 되어 있음
let bb = "hi";
let cc = false;
let dd;
let ee = null;

// 배열
let numArr: number[] = [1, 2, 3, 4, 5]; // 기본 타입 뒤에 [] 이 있으면 배열안에 정해진 타입이 있다.

let strArr: Array<string> = ["apple", "banana", "orange"]; // string 배열 이라는 뜻

// 배열원소가 여러 타입일 경우
let arr1: (string | number | boolean)[] = [1, true, "string"];
let arr2: Array<string | number[] | boolean> = [[1, 2], true, "string"];

// 어떤 자료형이든 상관 없는배열
let arr3: any[] = [1, 2, 3, "wow", true, null];

// object
let obj1: object = {
  name: "홍길동",
  grade: 1,
};
