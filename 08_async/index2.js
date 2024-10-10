// Promise 객체
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 미래에 성공/ 실패에 대한 결과 값을 "약속" 한다는 의미
// - 성공 then, 실패 ,catch 메서드로 이어 받아서 처리 가능
// Pending : 대기, Fullfield : 이행, Reject : 거부, Settled : 결론

// 1. promise 객체 생성 코드
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `현재 프로미스의 상태는 fulfuiled(이행)! then 메서드로 연결 이때 flag 값은 ${flag}`
//       );
//     } else {
//       reject(
//         `현재 프로미스의 상태는 rejected(거절)! catch 메서드로 연결 이때 flag 값은 ${flag}`
//       );
//     }
//   });
// }

// // 2. promise 사용하는 코드
// promise1(5 < 3)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   // 성공 실패 상관없이 실행되는 코드
//   .finally(function () {
//     console.log("finally");
//   });

// // 화살표 함수로도 잘 된다
// promise1(5 < 3)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   // 성공 실패 상관없이 실행되는 코드
//   .finally(() => {
//     console.log("finally");
//   });

// ////////////////////////////////
// // 2. promise 예제
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink(callback) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝!!");
//       product = "제로 콜라";
//       price = 2000;
//       resolve();
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명: ${product},가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink().then(() => {
//   pay(product, price);
// });

// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1: ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

//////////////////////////////////////////////
// 3. 프로미스 체이닝
// 함수를 이용해서 (4+3) * 2 - 1 = 13
// add -> mul -> sub

function add(n1, n2) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      // resolve(result);
      reject("의도적으로 발새시킨 에러");
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let result = n - 2;
      resolve(result);
    });
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result); // 앞에서 쓴 함수에서 다시 return으로 promise 객체를 반환함을 통해 then(promise 체이닝)을 사용할 수 있음
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch((result) => {
    console.log(result);
  });
