// map function is used for transform an array
const arr = [5,1,3,2,6]

// double - [10, 2,6,4,12]
// Binary - ["101","1","11","10", "110"]

// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3
// }
// function binary(x){
//   return x.toString(2);
// }

// const output = arr.map(binary)
// console.log(output)



const users = [
    {firstName: "Paresh", lastName:"Pradhan", age:26},
    {firstName: "donal", lastName: "trump", age:75},
    {firstName: "elon", lastName: "musk", age:50},
    {firstName: "deepika", lastName: "padukon", age:26},
]


// list of full names
const output = users.map(function(fullname){
    return fullname.firstName + fullname.lastName
})
console.log(output)


