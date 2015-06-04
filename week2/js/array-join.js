var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  var result = [];
  result.push("obj.");
  result.push(prop);
  result.push(" = ");
  result.push(obj[prop]);

  console.log(result.join());
}



var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  var result = ["obj.", prop, " = ". obj[prop]];
  console.log(result.join(""));
}
