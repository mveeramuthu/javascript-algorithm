'use strict';

var func1 = function() {
    console.log("Inside Anonymous() function 1 ...");
};
func1();

var x = () => {
    console.log("Inside Anonymous() function 2 ...");
    return 6;
};
console.log("x = ", x());

var y = () => 6;
console.log("y = ", y());


 var add = (x, y) => {
     let result = x + y;
     return result;
 };
 console.log("sum = ", add(5, 3));