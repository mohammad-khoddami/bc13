// const user = {
//     name: "mina",
//     age: 20,
// };

// user.name = "mina aslani";
// user.address = "Tehran";
// console.log(user);

// const array = [1, 2, 3];
// array[2] = 12;
// array.push(14);
// console.log(array);

// const numberList = [1, 2, 3, 4, 5];

// function operation(array, callback, initialValue = 0) {
//     let result = initialValue;
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         result = callback(result, item);
//     }
//     return result;
// }

// const sum = (a, b) => {
//     return a + b;
// };

// const mul = (a, b) => {
//     return a * b;
// };

// const sumResult = operation(numberList, sum);
// console.log("sum", sumResult);

// const mulResult = operation(numberList, mul, 1);
// console.log("mul", mulResult);

// const minusResult = operation(numberList, (a, b) => {
//     return a - b;
// });
// console.log("minus", minusResult);

// array build-in methods
// const array = [0, 1, 2, 3, 4, 5];

// const res = array.push(4, 5);
// const res = array.pop();
// const res = array.shift();
// const res = array.unshift(-2, -1);

// array.pop();
// array.pop();
// array.pop();

// array.shift();
// array.shift();
// array.shift();

// function isTwo(item) {
//     if (item > 2) {
//         return true;
//     }
//     return false;
// }

// // const res = array.find(isTwo);
// const res = array.find((item) => {
//     return item > 10 ? true : false;
// });

// console.log(res);

// function find(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (callback(item)) return item;
//     }
// }
// console.log(
//     find([1, 2, 3, 4, 5], (a) => {
//         return a > 2 ? true : false;
//     }),
// );

// const fruits = ["apple", "orange", "pineapple", "banana"];

// const foundResult = fruits.find((item) => item === "orange");
// console.log(foundResult);

// const users = [
//     { name: "ali", age: 17 },
//     { name: "nima", age: 22 },
//     { name: "milad", age: 33 },
// ];

// const userAge = users.find((item) => item.name === "nima1")?.age;
// console.log(userAge);

// const users = ["ali", "nima", "mohammad", "ehsan"];

// const exist = users.some((item) => {
//     if (item === "ehsan1") return true;
//     return false;
// });
// console.log(exist);

// const nums = [2, 4, 6];
// // console.log(nums.some((item) => item % 2 === 0));

// const isAllEven = nums.every((item) => item % 2 === 0);
// console.log(isAllEven);

// const users = [
//     { name: "milad", hasCar: true },
//     { name: "nima", hasCar: false },
//     { name: "afshin", hasCar: true },
// ];
// const allHasCar = users.every((item) => item.hasCar);
// console.log(allHasCar);

// const users = ["ali", "nima", "mohammad", "ehsan"];
// users.sort();
// console.log(users);

// const nums = [100, 20, 200, 30]; //20,30,100,200
// nums.sort();
// console.log(nums);

// const nums = [100, 20, 200, 30]; //20,30,100,200
// nums.sort((a, b) => {
//     return a - b;
// });
// console.log(nums);

// [20,30,100,200];

// const users = ["ali", "nima", "mohammad", "ehsan"];
// const isExist = users.includes("mohammad1");
// console.log(isExist);

// const users = [
//     { name: "milad", hasCar: true },
//     { name: "nima", hasCar: false },
//     { name: "nima", hasCar: false },
//     { name: "afshin", hasCar: true },
// ];
// const exist = users.some((item) => item.name === "nima" && item.hasCar);
// console.log(exist);

const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.slice(2, 5);
// console.log(newArray);

const newArray = array.map((item) => {
    return `item-${item}`;
});
console.log(array);
console.log(newArray);
