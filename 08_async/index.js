// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

///////////////////////////////////
// 편의점에 가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink() {
//   //3초 기다린 후에 코드 실행(3초 고민)
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로 콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product},가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);

///////////////////////////////////////////
// 1. 콜백 함수를 이용해 비동기 처리

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink(callback) {
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

let product;
let price;
goMart();
pickDrink(pay);
