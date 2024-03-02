
// async function foo(){
//     return "Hello World"
// }

// async function main(){
//     const resultPromise = foo();
//     const result = await resultPromise;
//     console.log(result);
// }
// main()

// const result = foo();
// result.then(r => {
//     console.log(r);
// })

const user1 = {
    name: "John",
    age: 25,
    address: {
        city:"Mumbai",
        state: "Maharashtra"
    },
}

const user2 = user1
user2.name = "Ramesh"
user2.address.city = "Pune"

console.log(user1);
console.log(user2);