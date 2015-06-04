var basket = {
  items: 0,
  totalPrice: 0.50,
  addItem: function () {},
  removeItem: function () {},
  howManyItems: function () {}
};

var propCount = 0, methCount = 0;
for (var prop in basket) {
  console.log(typeof basket[prop]);
  if(typeof basket[prop] === 'function') {
    methCount++;
  }
  else {
    propCount++;
  }
}

console.log("the number of properties is: " + propCount);

console.log("the number of methods is: " + methCount);
