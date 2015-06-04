City Uni Class 2 notes:
-------------
#Arrays:
- Associative arrays
eg. foo["size"] = "small";
## NOT recommended in Javascript - better to use objects {}

Arrays in javascript are zero-based (start at 0)

#Array.slice()
creates a new array from an exisiting array  - does not change the original

#Array.join()
array.join(seperator) // converts the array to a string,
                      // each value delimited by the seperator parameter
                      eg. myArray.join(","); // returns "a,b,c"

#Recommendations for working with Arrays

##When you need to copy an array, use slice:

`var myArray = ["123", "456", "789"];

`var newArray = myArray.slice();


##When building strings, use an array and .join():
eg.
var myArray = [
  "this needs to be a long string",
  "but it makes it difficult to build",
  "and type in one go",
  "and some browsers have issues with assigning strings",
  "with long values in a simple var assigment"
];

var myString = myArray.join(" ");

-- this can be faster than concatenating using "+" in older browsers

---------------------
#Objects

## "Everything in javascript is an object"

If you need to iterate over objects, you can use a for...in loop:

eg

var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

## when defining functions, if you have lots of arguments it's good to pass those as an object

## Useful to use objects as config values  for an application

## Next week hoisting, scoping, global scope
