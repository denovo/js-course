// global functions and variables can be UPPERCASE by convention
var MATHAPP = (function () {
  var // <-- Important - you need the var on this line or variables and functions will be defined as globals
    privateAddNumbers = function (x, y) {
      return x + y;
    }, // comma separated

    privateMultiplyNumbers = function (a, b) {
       return a * b;
    },

    privateDivideNumbers = function (x, y) {
      return x / y;
    }; // finish with semi-colon

  return {
    add: privateAddNumbers,
    multiply: privateMultiplyNumbers,
    divide: privateDivideNumbers
  };

})();


console.log("2 + 2 equals: " + MATHAPP.add(2,2));
console.log("2 x 10 equals: " + MATHAPP.multiply(2,10));
console.log("2 / 2 equals: " + MATHAPP.divide(2,2));
