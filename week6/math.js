var MATH = (function () {

  var total = {
    start: 30
  },
  setInitialValue = function (x) {
    this.total = x;
    return this;
  },
  privateAdd = function (x) {
    this.total = this.total + x;
    return this;
  },
  privateSubtract = function (x) {
    this.total = this.total - x;
    return this;
  },
  privateMultiply = function (x) {
    this.total = this.total * x;
    return this;
  },
  privateDivide = function (x) {
    this.total = this.total / x;
    return this;
  },
  testFunc = function (x) {
    console.log("running testFunc: " + this.total);
    return this;
  };

  return {
    total: total.start,
    set: setInitialValue,
    add: privateAdd,
    sub: privateSubtract,
    multiply: privateMultiply,
    divide: privateDivide
  };

})();
