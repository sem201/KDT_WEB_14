// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할

//spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];

console.log(spread); // [1,2,3,4,5]

//spread in string
const c = [..."hello"];
console.log(c); //['h', 'e', 'l', 'l', 'o']
const d = "hello".split("");
console.log(d);

const chip = {
  base: "chip",
  company: "lotte",
};

const potatoChip = {
  ...chip,
  flavor: "potato",
};
console.log(chip);
console.log(potatoChip);

// 만약 동일한 키값을 가진 요소로 만들어준다면
const sweetPotatoChip = {
  ...potatoChip,
  flavor: "sweetPotato", // 키값의 밸류만 바꿔서 적용한다.
};
console.log(sweetPotatoChip);

const word1 = "abc";
const word2 = "xyz";
console.log([...word1, ...word2]);
