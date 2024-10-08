function MyClass() {
  this.property = "value1";
}

MyClass.prototype.method1 = function () {
  console.log(this.property);
};

var my1 = new MyClass();
my1.method1();
