// const radius = [3,1,2,4]

// const calculateArea = function (radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(Math.PI* radius[i]*radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumferance = function (radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push( 2*Math.PI* radius[i]);
//     }
//     return output;
// };

// console.log(calculateCircumferance(radius));


// const calculateDiameter = function (radius){
//   const output = [];
//   for(let i=0; i< radius.length; i++){
//     output.push(2*radius[i]);
//   }
//   return output;
// }

// console.log(calculateDiameter(radius));


// good approach or functional programing
const radius = [3,1,2,4]

const area = function(radius){
    return Math.PI*radius*radius
};
const circumference = function (radius){
    return 2*Math.PI*radius
};
const diameter = function (radius){
    return 2*radius
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
       output.push(logic(radius[i]))
    }
    return output;
}

console.log(radius.map(area));
console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))