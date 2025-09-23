// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);


// user.name = "pete";

// console.log(user);

// delete user.name; 

// console.log(user);

// function isEmpty(obj) {
//     return !(obj[0] in obj)
// };
// let schedule = {};
// // schedule.lunch = "12:30 PM"
// console.log(isEmpty(schedule));

// let salaries = {
//     // John: 100,
//     // Ann: 160,
//     // Pete: 130,
// };

// function objSum(obj) {
//     let counterVar = 0
//     for (let key in obj) {
//          counterVar += obj[key];
//     };
//     return counterVar;
// };

// console.log(objSum(salaries));
// console.log(typeof(15))

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// function multiplyNumeric(obj) {
//     let counterVar = 1;
//     for (let key in obj) {
//         if ((typeof(obj[key])) == "number") {
//             counterVar *= obj[key];
//         }
//     }
//     return counterVar;
// };

// console.log(multiplyNumeric(menu));

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old. `)
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[1]}.`);
//     },
// };
// console.log(person.name);
// console.log(person.age);
// person.bio();
// person.introduceSelf;

// const databaseOfUser = {
//     bob: person,
// }
// console.log(databaseOfUser.bob.name);
// databaseOfUser.login = function() {
//     console.log(`Hey ${this.bob.age}`)
// };

// databaseOfUser.login();


// function Person(name) {
//     this.name =  name;
//     this.introduceSelf =  function () {
//         console.log(`HI, this side ${this.name} here!`)
//     };
// };

// const salva = new Person("Salva");
// console.log(salva);

// salva.introduceSelf();

// const frankie = new Person("frankie");
// console.log(frankie);
// frankie.introduceSelf();

// const notification = new Notification("Hello");

// let data = 42;
// let datacopy = data;
// console.log(data);
// console.log(datacopy);

// datacopy = 43;

// console.log(datacopy);
// console.log(data);

// const obj = {data: 42};
// const objCopy = obj;

// console.log(obj);
// objCopy.data = 43;

// console.log(obj);
// console.log(objCopy);

// let check = {
//     fruit: "apple",
// };

// console.log(check);

// let checkCopy = check;

// console.log(checkCopy);

// checkCopy = {fruit: "Orange"};

// console.log(check);
// console.log(checkCopy);


// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};

// let users = [john, pete, mary];

// function writingNames(arr) {
//     let names = [];
//     for (let person of arr) {
//         names.push(person.name);
//     };
//     return names;
// };
// console.log(writingNames(users));

// let names = users.map((user) => {
//     return user.name;
// });
// console.log(names);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => {
//     let newObj = {}
//     newObj.fullName = user.name + " "+ user.surname;
//     newObj.id = user.id;
//     return newObj;
// });

// console.log(usersMapped);

// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function sortByAge(arr) {
//     return arr.sort((a,b) => a.age - b.age)
// }
// console.log(sortByAge(arr));

// function getAverageAge(arr) {
//     let sumValue = 0;
//     for (let i=0; i<arr.length; i++) {
//         sumValue += arr[i].age;
//     };
//     return sumValue/(arr.length)
// };

// console.log(getAverageAge(arr));

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
function usersById(users) {
    let newObj = {};
    for (let person of users) {
        newObj[person.id] = person;
    };
    return newObj;
};
let usersById2 = usersById(users);
console.log(usersById2);
let emptyObj = {}
let xyz = users.reduce((obj, user) => {obj[user.id] = user;
    return obj
}, {});

console.log(xyz)



