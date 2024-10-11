// math 모듈을 불러와서 사용
const add = require("./math");
console.log(add(5, 7));

//다른 이름으로도 변수 선언 가능(1개만 불러오고 있는경우)
const hello = require("./math");
console.log(hello(3, 4));

////////////
// math2 모듈 불러오기
const math2 = require("./math2");
console.log(math2.add(3, 4));
console.log(math2.PI);
// 구조분해 할당
const { add, PI } = require("./math2");
