const users = [
    {firstName: "Paresh", lastName:"Pradhan", age:26},
    {firstName: "donal", lastName: "trump", age:75},
    {firstName: "elon", lastName: "musk", age:50},
    {firstName: "deepika", lastName: "padukon", age:26},
];

const output = users.filter((x) => x.age<30).map((x) => x.firstName);
console.log(output);