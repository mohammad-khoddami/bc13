// var numbers = [3, 5, 4, 20, -21, 12, 41, 53, 62, 78];

// var max = null;
// var min = null;
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         // find max -> we need max even:
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     } else {
//         // find min -> we need min odd:
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
// }
// console.log("max", max);
// console.log("min", min);

// var count = {};
// var numbers = [2, 4, 5, 17, 2, 5, 5, 17, 6, 23];

// for (var i = 0; i < numbers.length; i++) {
//     if (count[numbers[i]]) {
//         count[numbers[i]] = ++count[numbers[i]];
//     } else {
//         count[numbers[i]] = 1;
//     }
// }
// console.log(count);

// Function:

// function sayHello() {
//     console.log("hello");
// }

// // call , invoke
// sayHello();

// function print(word) {
//     console.log(word);
// }
// print("hello");

//// void
// function sayHello(name = "amir") {
//     console.log("hello" + " " + name);
// }
// sayHello("aria");

// function sayHello(name = "amir") {
//     var a = "hello " + name;
//     return a;
// }

// // var helloResult = sayHello("mohammad");
// console.log(sayHello("mohammad"));

// function area(width, height) {
//     return 12;
//     return width * height;
// }

// console.log(area(2, 3));
// console.log(area(4, 3));
// console.log(area(5, 10));

// var user = {
//     firstName: "mohammad",
//     lastName: "khoddami",
//     job: ["teacher", "dev"],
// };

// //fullName
// function fullName(user) {
//     return user.firstName + " " + user.lastName;
// }
// console.log(fullName(user));

// function userJob(user) {
//     var job = " is a ";
//     for (var i = 0; i < user.job.length; i++) {
//         job = job + user.job[i] + (i === user.job.length - 1 ? "" : " and ");
//     }
//     return fullName(user) + job;
// }
// console.log(userJob(user));

// function sumCart(cart) {
//     var sum = 0;
//     for (var i = 0; i < cart.length; i++) {
//         sum += cart[i].price;
//     }
//     if (sum > 7) {
//         console.log("discount");
//     } else {
//         console.log("none");
//     }
// }

// var cartUser1 = [
//     { name: "chips", price: 5 },
//     { name: "cake", price: 1 },
// ];

// var cartUser2 = [
//     { name: "ice cream", price: 4 },
//     { name: "biscoite", price: 4 },
// ];

// var cartUser3 = [
//     { name: "chips", price: 4 },
//     { name: "biscoite", price: 2 },
// ];

// sumCart(cartUser1);
// sumCart(cartUser2);
// sumCart(cartUser3);

// function bigger(a, b) {
//     return a > b ? a : b;
// }
// console.log(bigger(6, 3));

// for (var i = 0; i < 10; i++) {
//     if (i === 5 || i === 6) {
//         continue;
//     }
//     console.log(i);
// }

for (var i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

// practice 1:
var students = [
    {
        name: "ali",
        course: ["HTML", "CSS"],
    },
    {
        name: "amir",
        course: ["Js", "react"],
    },
];

// ali -> HTML & CSS
// amir -> Js, react

// practice 2:
/**
 *   1 * 1 = 1
 *   1 * 2 = 2
 *   .
 *   .
 *   .
 *   10 * 10 = 100
 *
 */

// practice 3:
// calculate age:
