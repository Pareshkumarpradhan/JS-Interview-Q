function outerFunction(){
    let outerValue = "Hello!"
    return function(){
        console.log(outerValue);
    }
}
let closure = outerFunction()
closure()


