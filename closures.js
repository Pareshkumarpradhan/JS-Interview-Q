// closures example 

/*function x(){
    var a = 10
    function y(){
        console.log(a)
    }
    return y
}
var z = x()
console.log(z)
z()*/

// setTimeout + closures

function x(){
    for (let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log("paresh")
}
x()