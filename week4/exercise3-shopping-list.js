var myShoppingList = (function() {
  var
    shoppingList = [],

    // functions needed: addItem(), removeItem(), returnList(), countNoOfItems(), itemNotAlreadyInList()

    privateAddItemToList = function(val) {
      if (itemNotAlreadyInList(val)) {
        shoppingList.push(val);
        privateOutputList();
      }
      return this;
    },
    privateRemoveItemFromList = function(val) {
      if (itemInList(val)) {
        shoppingList.slice(val);
        privateOutputList();
      }
      return this;
    },

    itemNotAlreadyInList = function(item) {
      if (shoppingList.indexOf(item) === -1) {
        return true;
      } else {
        return false;
      }
    },

    itemInList = function(item) {
      if (shoppingList.indexOf(item) !== -1) {
        return true;
      } else {
        return false;
      }
    },
    privateCountItems = function() {
      console.log("nuber of items in list: " + shoppingList.length);
      return this;
    },
    privateOutputList = function() {
      console.log("the shopping list is: " + shoppingList);
      return this;
    };

  return {
    add: privateAddItemToList,
    remove: privateRemoveItemFromList,
    print: privateOutputList,
    countItems: privateCountItems
  };

})();
myShoppingList.add('milk').add('eggs').add('beans');
myShoppingList.print();
myShoppingList.countItems();
