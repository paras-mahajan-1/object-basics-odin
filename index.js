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


function Person(name) {
    this.name =  name;
    this.introduceSelf =  function () {
        console.log(`HI, this side ${this.name} here!`)
    };
};

const salva = new Person("Salva");
console.log(salva);

salva.introduceSelf();

const frankie = new Person("frankie");
console.log(frankie);
frankie.introduceSelf();

const notification = new Notification("Hello");











