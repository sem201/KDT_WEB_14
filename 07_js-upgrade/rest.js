//rest 파라미터
// 1. 함수에서 rest 사용할 때
const values = [10, 20, 30, 40, 50, 60];

function get(a, b, ...rest) {
  console.log("a:", a);
  console.log("b:", b);
  console.log(rest);
}
console.log(...values);
get(...values); // spread 연산자를 사용하지 않는다면 함수에 그냥 배열 하나만 넣는 코드가 되므로 a에 전부 들어가고 b에는 undefined가 들어가게 된다. rest 에는 빈 배열이 들어감

// 2. 객체에서 rest 사용
const icecream = {
  conpany: "lotte",
  flavor: "choco",
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor);
console.log(rest);

// 3. 배열에서 rest 사용
const number = [1, 2, 3, 4, 5];
const [one, two, ...rest1] = number;
console.log(one, two, rest1);
