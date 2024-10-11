// async - await
// async 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스를 반환

// await : 기다리다
// - 성공 / 실패로 프로미스 객체의 실행이 완료되기를 기다림
// - awit 뒤에는 프로미스가 오게 됨
// - async 키워드를 사용한 함수 안에서만 await 키워드 사용 가능!

// 예제 1
async function f1() {
  return 0;
}

console.log("1 >> ", f1()); // Promise {<fulfilled>: 1} +) async가 붙은 함수는 promise 객체로 반환되기 때문에

f1().then((result) => {
  // 이렇게 then으로 반환을 해줘야한다!!
  console.log(result);
});

// 예제 2
// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      // resolve(fruits);
      reject(new Error("알수 없는 에러 발생!"));
    }, 1000);
  });
}

// then - catch 사용
fetchFruits()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// async - await 사용 시 에러 처리는 try-catch 구문으로 함!
async function printFruits() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printFruits();

///////////////////////////////////////////////////////////////
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  //3초 기다린 후에 코드 실행(3초 고민)
  setTimeout(function () {
    console.log("고민 끝!!");
    product = "제로 콜라";
    price = 2000;
    // pay() 함수 실행
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product},가격: ${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay(product, price);
}

let product;
let price;
