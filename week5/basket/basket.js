var myShoppingBasket = (function() {
  var
    // an array to store objects for each item in the basket
    basket = [],

    // checks if object with an id passed to the function exists in basket, if exists it returns the index of the postiong for that item, if not found it will return -1
    // input: the id of the item you want to check for
    // output: the index of the item or null if not found
    findInBasket = function(item) {
      for (var i = 0; i < basket.length; i++) {
        if ( basket[i].id === item.id ) {
          return i;
        }
      }
      return null;
    },


    // add an item to the basket, if not already an item with that ID in the basket
    addItemToBasket = function(item) {
      if(findInBasket(item) === null) {
        this.basket.push(item);
      }
      else {
        console.log("item with ID: " + item.id + " already exists in basket");
      }
    },

    // remove an item from the basket
    removeItemFromBasket = function(item) {
      var itemPosition = findInBasket(item);
      if(itemPosition !== null) {
        this.basket.splice(itemPosition, 1);
      }
      else {
        console.log("no item with ID: " + item.id + " found in basket");
      }
    },


    // checks how many items are in the basket - adds up the total qty
    // input: nothing
    // output: sum of all the qty's in the basket
    countItemsInBasket = function() {
      var numItems = 0;
      for (var i = 0; i < this.basket.length; i++) {
        numItems += this.basket[i].qty;
      }
      return numItems;
    },

    printBasket = function() {
      console.log("basket contents: ");

      for (var i = 0; i < basket.length; i++) {
        console.log("id: " + this.basket[i].id + " - " + this.basket[i].name + " qty: " + this.basket[i].qty);
      }

      console.log("number of items in basket = " + countItemsInBasket() );
      console.log("the total is: £" + basketTotal());

      return this;
    },

    // calculates the total cost of all items in basket
    basketTotal = function () {
      var total = 0;
      for (var i = 0; i < this.basket.length; i++) {
        total += (this.basket[i].price * this.basket[i].qty);
      }
      return total;
    },

    // Updates the quantity of an item in already in the basket - checks if item exists and updates qty - will remove item if quantity set to 0
    // input: the id of the item you want to check for, the value to update the quantity to
    // output: returns the updated basket
    updateItemInBasket = function(item, updatedQty) {
      var itemPos = findInBasket(item);
      // if item is in basket, then go ahead to update qty
      if ( itemPos !== null) {

        // if qty to update to is 0, then remove item completely from basket, else set item qty to new qty
        if (updatedQty === 0 ){
          this.removeItemFromBasket(item);
        } else {
          this.basket[itemPos].qty = updatedQty;
        }
      }
    };

  return {
    basket: basket,
    print: printBasket,
    countItems: countItemsInBasket,
    add: addItemToBasket,
    remove: removeItemFromBasket,
    update: updateItemInBasket,
    total: basketTotal
    // countItems: ,
    // basketTotal
  };

})();


myShoppingBasket.add({id:"3", name: "headphones", price:2, qty: 1});
myShoppingBasket.add({id:"23", name: "usb cable", price:3, qty:3});
myShoppingBasket.add({id:"6", name: "ipad", price:20, qty: 3});


// myShoppingBasket.remove({id:"6", name: "ipad", price:20, qty: 3});

myShoppingBasket.update({id:"6", name: "ipad", price:20, qty: 3}, 25);

myShoppingBasket.print();
