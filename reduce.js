const arr = [5,1,3,2,6];
//summ
// function findSum(){
//     let sum = 0
//     for (let i = 0; i< arr.length; i++) {
//         sum = sum + arr[i]   
//     }
//     return sum;
// }
// console.log(findSum(arr))

// const output = arr.reduce(function(acc, curr){
//     acc = acc+curr;
//     return acc;
// },0);
// console.log(output)

// max
// function findmax(arr){
//    let max = 0;
//    for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
//    }
//    return max;
// }
// console.log(findmax(arr))

// const output = arr.reduce(function(acc, curr){
//     if(curr > acc){
//         acc = curr
//     }
//     return acc;
// },0);
// console.log(output)

const users = [
    {firstName: "Paresh", lastName:"Pradhan", age:26},
    {firstName: "donal", lastName: "trump", age:75},
    {firstName: "elon", lastName: "musk", age:50},
    {firstName: "deepika", lastName: "padukon", age:26},
]

// particular age

const output = users.reduce(function(acc, curr){
        if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age]
        }
        else{
            acc[curr.age] = 1
        }
        return acc;
},{});
console.log(output);