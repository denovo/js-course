var myModule = (function () {

  var

    elementWrapper = document.querySelectorAll(".element-wrapper")[0];
    addNewElemBtn = document.getElementById('btn-add-new');


    initialise = function () {

      // add click handler to add new element button
      addNewElemBtn.addEventListener(
        "click",
        function (event) {
          var description = document.getElementById('input-description').value;

          // if the description box is not empty..
          if (description.length > 0) {
            // add new element
            addElementToList(description);
          }
          else {
            console.log("please enter a description");
          }
        }
      );


      // add click handler to list items
      elementWrapper.addEventListener(
        "click",
        function (event) {
          if (event.target.nodeName === "LI") {
            var el = event.target;
            removeElementFromList(el);

          }
        }
      );
    },


    addElementToList = function (text) {
      elemHtml = [ "<li class=\"element\">", text, "</li>" ];
      elementWrapper.insertAdjacentHTML("afterbegin", elemHtml.join(""));
    }

    removeElementFromList = function (elem) {
      if (elem.classList.contains("element")) {
        elem.parentNode.removeChild(elem);
      }
    }


    return {
      init: initialise,
      add: addElementToList
    };

})();

myModule.init();
myModule.add("pete test");
