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

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// function usersById(users) {
//     let newObj = {};
//     for (let person of users) {
//         newObj[person.id] = person;
//     };
//     return newObj;
// };
// let usersById2 = usersById(users);
// console.log(usersById2);
// let emptyObj = {}
// let xyz = users.reduce((obj, user) => {obj[user.id] = user;
//     return obj
// }, {});

// console.log(xyz)

// function newVar() {
//     let x = arguments[0];
//     let y = arguments[1];
//     console.log(x, y);
// }

// newVar(1, 2,);

// const factorial = function() {
	//   let counterVar = 1;
	// for (let i = arguments[0]; i >= 2; i--) {
  //   counterVar *= i;
  // };
  // return counterVar;

//   let result = arguments[0].reduce((prev, user) => prev * user, 1);
//   return result;
// };

// factorial([])

// function palindromes() {
// let string = arguments[0];
//     if (string.includes(" ")) {
//         string = string.split(" ").join("");
//     };
//     if (string.includes(".")) {
//         string = string.split(".").join("");
//     };
//     if (string.includes(",")) {
//         string = string.split(",").join("");
//     };
//     if (string.includes("!")) {
//         string = string.split("!").join("");
//     };
//     let stringArr = string.split("").map((item) => item.toLowerCase());
//     let newStringArr = [];
//     for (let i = 0; i < stringArr.length; i++) {
//         newStringArr.unshift(stringArr[i]);
//     }
//     if (stringArr.join("") === newStringArr.join("")) {
//         return true;
//     } else {
//         return false;
//     };
    // return (stringArr)
    // return (stringArr + " ----------- "+newStringArr)

// };

// console.log(palindromes("Animal loots foliated detail of stool lamina."));

// const fibonacci = function() {
//     let number = arguments[0];
//     let prevNumber = 0;
//     let result;
//     for (let i = 1; i <= number; i++) {
//         prevNumber += i;
//         if ( i === number) {
//             return 
//         }
//     };
//     return prevNumber;
// };
// console.log(fibonacci(4));

// function fibbinaci() {
//     let number = arguments[0];
//     let arr = [];
//     if (number == 0) return 0;
//     if (number < 0) return "OOPS";
//     if (typeof(number) == 'string') {
//         number = +number;
//     }
//     arr.push(1);
//     for (let i = 2; i <= number;  i++) {
//         let lastArrValue = arr[arr.length-1];
//         let lastSecondArrValue = arr[arr.length-2]
//         if (lastSecondArrValue === undefined) {
//             lastSecondArrValue = 0;
//         };

//         arr.push(lastArrValue + lastSecondArrValue);
//     };
//     return arr[arr.length-1]

// }

// console.log(fibbinaci("6"))

// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ];

// let x = books.map((book) => {
//     return book.title
// });

// console.log(x)
const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
];
function getOldest() {
    let arr = arguments[0];
    
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        if (!(('yearOfDeath') in obj)) {
            obj.yearOfDeath = +(Date().toString().split(" ")[3]);
        };
    };

    let x = arr.sort((a,b) => -(a.yearOfDeath-a.yearOfBirth) + (b.yearOfDeath-b.yearOfBirth))
    for (let i = 0; i < x.length; i++) {
        x.pop()
    } 
    let newObj = arr[0];
    return newObj;
}

// console.log(Date().toString().split(" ")[3])

console.log(getOldest(people).name)