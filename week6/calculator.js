// create a calculator which depends on the MATH module, referred to inside the function as "calc"
var myCalculator = (function (calc) {
  "use strict";
    var
      calcOperatorFlag = null,
      calcWrap = document.querySelectorAll(".calc")[0],
      view = document.querySelectorAll(".calc-view .form-control")[0],
      isChained = false, // used to tell if more than one operation has been added to the calculator before pressing =

      whichButtonType = function(event) {
        var btnClicked = event.target,
            btnType = btnClicked.getAttribute('data-type'), // the data-type of the button that was clicked
            existingData = view.value, // value of the view before the button was clicked
            // actionType = btnClicked.getAttribute('data-type'); // digit, add, sub, total, clear etc
            buttonTypes = {
              digit: function() { digitFunc(); },
              sub: function(){ subFunc(); },
              add: function(){ addFunc(); },
              divide: function(){ divideFunc(); },
              multiply: function(){ multiplyFunc(); },
              clear: function(){ clearFunc(); },
              result: function(){ resultFunc(); },
            },

            digitFunc = function () {
              view.value = existingData + btnClicked.getAttribute('data-value');
            },
            subFunc = function () {
              calcOperatorFlag = "sub";
              updateTotal();
            },
            addFunc = function () {
              calcOperatorFlag = "add";
              updateTotal();
            },
            divideFunc = function () {
              calcOperatorFlag = "divide";
              updateTotal();
            },
            multiplyFunc = function () {
              calcOperatorFlag = "multiply";
              updateTotal();
            },
            clearFunc = function () {
              view.value = "";
              calc.total = 0;
              isChained = false;
            },
            resultFunc = function () {
              calc.total = doCalcOperation(calcOperatorFlag);
              view.value = calc.total;
              isChained = false;
              console.log ("the total is: " + calc.total);
            },

            updateTotal = function () {
              updateSubTotal();
              calc.set(parseInt(view.value));
              view.value = "";
              isChained = true;
            };

            // use the data-type of the button clicked to know which function to invoke
            buttonTypes[btnType]();
      },


      updateSubTotal = function() {
        if (isChained) {
          calc.total = doCalcOperation(calcOperatorFlag);
          view.value = calc.total;
          isChained = false;
        }
      },

      doCalcOperation = function(state) {
        var val = parseInt(view.value),
        calcOperations = {
          add : function () { calc.add(val); },
          sub : function () { calc.sub(val); },
          multiply : function() { calc.multiply(val); },
          divide : function() { calc.divide(val); },
        };
        calcOperations[state]();
        view.value = calc.total;
        return calc.total;
      },

      init = function () {
        // sets up click handler for the calculator buttons
        calcWrap.addEventListener("click", whichButtonType);
      };

  return {
    init: init
  };

}(MATH));

myCalculator.init();
