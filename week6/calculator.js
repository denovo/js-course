// create a calculator which depends on the MATH module, referred to inside the function as "calc"
var myCalculator = (function (calc) {

    var
      calcOperatorFlag = null,
      calcWrap = document.querySelectorAll(".calc")[0],
      view = document.querySelectorAll(".calc-view .form-control")[0],
      isChained = false; // used to tell if more than one operation has been added to the calculator before pressing =

      whichButtonType = function(event) {
        var btnClicked = event.target, // the button that was clicked
            existingData = view.value, // value of the view before the button was clicked
            // actionType = btnClicked.getAttribute('data-type'); // digit, add, sub, total, clear etc
            buttonTypes = {
              digit: function(){ console.log(this.name); },
              sub: function(){ console.log(this.name); },
              add: function(){ console.log(this.name); },
              divide: function(){ console.log(this.name); },
              multiply: function(){ console.log(this.name); },
              clear: function(){ console.log(this.name); },
              result: function(){ console.log(this.name); },
            },

            buttonTypes[btnClicked.getAttribute('data-type')](),

        // switch (btnClicked.getAttribute('data-type')) {
        //   case 'digit':
        //     view.value = existingData + btnClicked.getAttribute('data-value');
        //     break;
        //   case 'add':
        //     calcOperatorFlag = "add";
        //     updateSubTotal();
        //     calc.set(parseInt(view.value));
        //     view.value = "";
        //     isChained = true;
        //     break;
        //   case 'sub':
        //     calcOperatorFlag = "sub";
        //     updateSubTotal();
        //     calc.set(parseInt(view.value));
        //     view.value = "";
        //     isChained = true;
        //     break;
        //   case 'multiply':
        //     calcOperatorFlag = "multiply";
        //     updateSubTotal();
        //     calc.set(parseInt(view.value));
        //     view.value = "";
        //     isChained = true;
        //     break;
        //   case 'divide':
        //     calcOperatorFlag = "divide";
        //     updateSubTotal();
        //     calc.set(parseInt(view.value));
        //     view.value = "";
        //     isChained = true;
        //     break;
        //   case 'clear':
        //     view.value = "";
        //     calc.total = 0;
        //     isChained = false;
        //     break;
        //   case 'result':
        //     isChained = false;
        //     calc.total = doCalcOperation(calcOperatorFlag);
        //     // console.log("the calcOperatorFlag is: " + calcOperatorFlag);
        //     view.value = calc.total;
        //     console.log ("the total is: " + calc.total);
        //     break;
        // }
        // console.log(calc.total);
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
        // console.log("trying to do something with : " + val);
        view.value = calc.total;
        // console.log("the total is:" + calc.total);
        return calc.total;




        // switch (state) {
        //   case 'add':
        //     calc.add(val);
        //     break;
        //   case 'sub':
        //     calc.sub(val);
        //     break;
        //   case 'multiply':
        //     calc.mulitply(val);
        //     break;
        //   case 'divide':
        //     calc.divide(val);
        //     break;
        // }

      },

      init = function () {
        // add click handler to the calculator
        calcWrap.addEventListener("click", whichButtonType);
      };

  return {
    init: init
  };

}(MATH));

myCalculator.init();
