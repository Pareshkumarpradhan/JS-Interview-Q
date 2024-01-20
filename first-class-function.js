// Function Statement aka Function Declaration
function a(){
    console.log("a called");
}
a();

// Function Expression
var b = function(){
    console.log("b is called");
}
b();
// Q -> what is the difference between Function Statement & Function Expression
// A-> The main difference is the hoisting 



// Anonymous Function
// function (){
   
// }


// Named Function Expression
var c = function xyz(){
    console.log("named function expression");
}
c();

// Difference between Parameters & Arguments ?

// First  Class Function - Abbility to be used like values 
var d = function(param1){
 console.log(param1)
}
d(function(){});

// Arrow Functions 