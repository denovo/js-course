// global functions and variables named in UPPERCASE by convention
var MATHAPP = (function () {
  var // <-- Important - you need the var on this line or variables and functions will be defined as globals
    total = 0,

    privateSetValue = function (val) {
      this.total = val;
      return this
    },
    privateAdd = function (x) {
      this.total = this.total + x;
      return this
    },

    privateSub = function (x) {
      this.total = this.total - x;
      return this
    },
    privateIncrement = function () {
      this.total++;
      return this
    },
    privateDecrement = function () {
      this.total--;
      return this
    };
    privateResultFunc = function () {
      console.log("the result is: " + this.total);
      return this
    }

  return {
    setValue: privateSetValue,
    add: privateAdd,
    sub: privateSub,
    increment: privateIncrement,
    decrement: privateDecrement,
    result: privateResultFunc
  };

})();

MATHAPP.setValue(10).add(2).sub(2).increment().increment().decrement().result();
