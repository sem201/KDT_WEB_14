const nickObjs = { hello: "안녕", apple: "사과" };

// Object.values(): object에서 value만 뽑아서 배열로 만듦
console.log(Object.values(nickObjs)); // [ '안녕', '사과' ]
// 배열 메서드의 indexOf() -> 없으면 -1 반환
console.log(Object.values(nickObjs).indexOf("안녕"));
console.log(Object.values(nickObjs).indexOf("사과"));
console.log(Object.values(nickObjs).indexOf("오렌지")); // -1
