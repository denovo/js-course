# Javascript Course - Week 3 Notes

gilles email : gilles@city.ac.uk

 JavaScript does not have block scope.
 In the language, only functions introduce a new scope.


 Using an immediately-invoked functions, we can create a temporary scope where any variable declared will not effect the outside scope.

 eg/

var a = "hello";

if(true) {

  (function () {
    var a = 1;
    console.log(a);
  }());

  console.log(a);
}

console.log(a);

# this would output "1", "hello", "hello"


## be careful though, eg.

What does console log return?

var a = "hello";

if(true) {

  (function () {
    a = 1;
  }());

}
console.log(a);

This would log "1" to the console because a = 1 inside the immediately-invoced function is creating and setting the global variable a



#HOISTING
#Important!
when javascript code runs, the variables and function names are hoisted to the top no matter where they are declared in the original code.

eg.

This code:

function foo () {
  bar(); // do something here
  var a = 0;
  function MyFunction () {
    // statement
  }
}
Will be parsed as:

function foo () {
  var a;
  function MyFunction () {
    // statement
  }
  bar(); // do something here
  a = 0;
}

## It does not matter if a variable or function declaration is never used, it will still get hoisted to the top of the scope.


In javascript, sometimes code will break the interpreter, which will stop any further scripts from running, big problem!


# The "this" keyword in javascript

When you create a function, the inner scope automatically gets a this keyword that is created and assigned a value.

The value of the keyword varies on how the function is called

http://staff.city.ac.uk/~sbbh718/js-course-2/session3/#/31
#function as an object method
var o = {
    property: "value",
    methodName: function () {
      return this.property
    }
}
o.methodName(); //returns "value"



#call, apply, bind

When using a function's call, apply or bind method, you can chose the value of this.

#call
http://staff.city.ac.uk/~sbbh718/js-course-2/session3/#/34

function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};
add.call(o, 5, 7);

#apply
http://staff.city.ac.uk/~sbbh718/js-course-2/session3/#/35

Using apply, you pass an object as the first argument to the method, along with the rest of the target function arguments as an array.

function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

add.apply(o, [10, 20]);

#bind

http://staff.city.ac.uk/~sbbh718/js-course-2/session3/#/36

#shit the bed -> get a grasp on this one below

#Using bind you can extract a function that has been set as an object method, and use it in another context.

this.x = 9;

var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81

var pete = {
  x: 10,
  y: 5
}
var bindPete = module.bind(module);
bindPete();
// this would return 10

using bind you can reassign "this" to another object


# look at exercise 6 at home

# Using the this keyword, you can build chainable methods!

#homework for next week
http://staff.city.ac.uk/~sbbh718/js-course-2/session3/#/41
