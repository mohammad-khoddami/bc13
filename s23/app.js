// ES6 -> Dx (Developer Experience):

// var a = 10;
// let a = 10;

/* 
difference var and let:
let is scope base variable.
var is not scope base -> its global
*/

// if (true) {
//     let a = "x";
//     console.log(a);
// }
// console.log(a);
// a = "z";
// console.log(a);

// if (true) {
//     var a = "x";
//     console.log(a);
// }
// console.log(a);
// a = "z";
// console.log(a);

// function test() {
//     var a = 10;
//     if (true) {
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// function test() {
//     let a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

/**
 * you cannot define same variable with "let" in same scope.
 * but this is not true in "var". you can define many same "var".
 */

// let a = 10;
// let a = 20;

// var a = 10;
// var a = 20;

/**
 * hoisting: for var hoisting exists.
 */
// let a = 10;
// console.log(a);

// console.log(a);
// var a = 10;
/** this is the same as previous code:
 * var a;
 * console.log(a);
 * a = 10;
 */

// const -> constant (مقدار ثابت)
// const is same as let but for constant variables
// const a = 10;
// a = 20;
// console.log(a);

// declaration function: use "function" keyword + function name
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2, 3);

//expression function:
// sum(2, 3);
// const sum = function (a, b) {
//     console.log(a + b);
// };

//arrow function:
// const sum = (a, b) => {
//     console.log(a + b);
// };
// const sum = (a, b) => console.log(a + b);
// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// let arr = [2, 5, 7, 4, 20, 12, 1, 33];

// function even(array) {
//     let evenArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (item % 2 === 0) {
//             evenArr.push(item);
//         }
//     }
//     return evenArr;
// }
// console.log(even(arr));

// const even1 = function (array) {
//     let evenArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (item % 2 === 0) {
//             evenArr.push(item);
//         }
//     }
//     return evenArr;
// };

// console.log(even1(arr));

// const even2 = (array) => {
//     let evenArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (item % 2 === 0) {
//             evenArr.push(item);
//         }
//     }
//     return evenArr;
// };

// console.log(even2(arr));

// let arr = [2, 5, 7, 4, 20, 12, 1, 33];

// function even(array) {
//     let evenArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (item % 2 === 0) {
//             evenArr.push(item);
//         }
//     }
//     return evenArr;
// }

// function odd(array) {
//     let evenArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (item % 2 !== 0) {
//             evenArr.push(item);
//         }
//     }
//     return evenArr;
// }
// console.log(even(arr));
// console.log(odd(arr));

// let arr = [2, 5, 7, 4, 20, 12, 1, 33];

// function filter(array, callback) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         let result = callback(item);
//         if (result) newArray.push(result);
//     }
//     return newArray;
// }

// function even(num) {
//     if (num % 2 === 0) return num;
// }

// function odd(num) {
//     if (num % 2 !== 0) return num;
// }

// const evenList = filter(arr, even);
// console.log(evenList);

// const oddList = filter(arr, odd);
// console.log(oddList);

// const graterThanTenList = filter(arr, (num) => {
//     if (num > 10) return num;
// });
// console.log(graterThanTenList);

// let user = {
//     name: "mohammad",
// };

// function hello(name) {
//     console.log("hello " + name());
// }

// hello(() => {
//     return user.name;
// });

let arr = [1, 2, 3, 4];
// sum : 10;
// mul: 24;
// minus: -8
