// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 객체를 만들어보자!
/*
*속성
*  만들어진 연도
*  집의 이름
*  창문 갯수 ...

*메소드
*  건물 나이 출력 메소드...
 */
// 클래스정의(틀을 만듦)
class House {
  // 생성자 함수
  // : 클래스를 이용해 객체를 생성할 떄마다 속성을 초기화
  constructor(year, name, window) {
    console.log(this); // House(객체)
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메소드 : 집의 나이를 출력
  getAge() {
    console.log(`${this.name}은 건축한지 ${2024 - this.year}년 되었어요!`);
  }
}

//클래스를 이용해 객체를 생성!
const house1 = new House(1990, "롯데캐슬", 100);
console.log(house1);
console.log(house1.name);
house1.getAge();

const house2 = new House(2007, "자이", 200);
console.log(house2);

// 클래스상속
// 부모 클래스 : House
// 자식 클래스 : Apartment

class Apartment extends House {
  constructor(year, name, window, floor) {
    super(year, name, window);
    this.floor = floor;
  }
  getApartInfo() {
    reutnr`${this.yead}년에 지어진 ${this.name}아파트위 총 층수는 ${this.floor}.`;
  }
}

const apart1 = new Apartment(2022, "레미아", 100, 30);
console.log(apart1.name);
console.log(apart1.getApartInfo);

class Shape {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getArea() {
    return this.row * this.col;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(row, col, rowcol) {
    super(row, col);
    this.rowcol = rowcol;
  }
  getRowCol() {
    this.rowcol = Math.sqrt(this.row ** 2 + this.col ** 2);
    return this.rowcol;
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec2.getRowCol());

class Triangle {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getArea() {
    return (this.row * this.col) / 2;
  }
}

let tri = new Triangle(3, 4);
console.log(tri.getArea());

class Circle extends Shape {
  constructor(row, col, radius) {
    super(row, col);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let circle = new Circle(3, 4, 3);
console.log(circle.getArea());
