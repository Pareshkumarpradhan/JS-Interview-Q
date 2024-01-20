// what is a callback function in ja

// setTimeout(function(){
//  console.log("timer")
// }, 5000)

//  function x(y){
//    console.log("x")
//    y();
//  }
//  x(function y(){
//      console.log("y")
//  });

// Javascript is synchronous and single-threaded language

// Blocking the main thread

// Deep about Event listeners


function attachEventListener(){
  let count = 0
  document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log("button click", ++count);
  })
}
attachEventListener();
// Closures Demo with event Listeners

// Scope demo with Event Listeners

// garbage Collection & removeEventListener