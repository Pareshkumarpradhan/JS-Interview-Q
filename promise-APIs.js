// promose.all()  It is used to handle multiple promise together
// It takes a array of promise as an argument
// Promise.all([p1,p2,p3]) ex
// Promise.allSetteled([p1,p2,p3])
// Promise.race([p1,p2,p3])
// Promise.any([p1,p2,p3])

// const p1 = fetch("")
const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
    
    //  resolve("p1 resolve");
    reject("p1 reject")
   
   },3000)
})
const p2 = new Promise((resolve, reject) => {
   setTimeout(() => {
   
    //  resolve("p2 resolve");
    reject("p2 reject")
    
   },5000)
})
const p3 = new Promise((resolve, reject) => {
   setTimeout(() => reject("p3 reject"),2000)
})

// Promise.all([p1,p2,p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.error(err);
// })

// Promise.allSettled([p1,p2,p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.error(err);
// })

// Promise.race([p1,p2,p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.error(err);
// })

Promise.any([p1,p2,p3]).then((res) => {
    console.log(res);
}).catch((err) => {
  console.error(err);
  console.error(err.errors);
})