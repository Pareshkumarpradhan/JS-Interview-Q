/*
1) what is async ?
2) what is await /
3) How async await works behind the scenes?
4) examples of using async/await
5) Error handling
6) Interviews
7) Async await vs Promise.then/.catch
*/

// async function always return a promise
// async function getData(){
//     return "Paresh"
// }

// const dataPromise = getData()
// dataPromise.then((res) => console.log(res));

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!")
//     },10000)
// });

// await can only be used inside an async function
// async function handlePromise(){
//    const val = await p;
//    console.log("Hello world!");
//    console.log(val);
// }
// handlePromise()

// function getData(){
//     p.then((res) => console.log(res))
//     console.log("Hello world");
// }
// getData()

const API_URL = "https://api.github.com/users/Pareshkumarpradhan";
async function handlePromise(){
     try {
        const data =  await fetch(API_URL);
        const jsonValue = await data.json()
        console.log(jsonValue);
     } catch (error) {
        console.log(error);
     }
  
}
handlePromise()