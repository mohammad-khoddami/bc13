// var age = 17;

// var user = {
//     firstName: "mohammad",
//     lastName: "khoddami",
//     age: 17,
// };

// if (user.age >= 18) {
//     console.log("your age is older than 18");
// } else {
//     console.log("your age is younger than 18");
// }

// console.log("condition has been checked");

// var students = [
//     { name: "amir", score: 15 },
//     { name: "negar", score: 18 },
//     { name: "maryam", score: 20 },
// ];

// var sumScore = students[0].score + students[1].score + students[2].score;

// if (sumScore >= 50) {
//     console.log("you can attend the event");
// } else {
//     console.log("you can not attend the event");
// }

// var products = [
//     { name: "laptop", stock: 2 },
//     { name: "mobile", stock: 0 },
//     { name: "mouse", stock: 10 },
// ];

// if (
//     products[0].stock === 0 ||
//     products[1].stock === 0 ||
//     products[2].stock === 0
// ) {
//     console.log("we need products");
// } else {
//     console.log("we dont need products");
// }

// var students = [
//     { name: "amir", age: 0 },
//     { name: "negar", age: 19 },
//     { name: "maryam", age: 20 },
// ];

// if (students[0].age > 18 && students[1].age > 18 && students[2].age > 18) {
//     console.log("allow");
// } else {
//     console.log("don't allow");
// }

// var country = "iran";
// var age = 15;
// if (country === "iran" || age >= 18) {
//     console.log("you can take the test");
// }

// var country = "iranjnjnj";
// var age = 17;
// if (country === "iran") {
//     if (age > 18) {
//         console.log("irani, older 18");
//     } else {
//         console.log("irani, younger 18");
//     }
// } else {
//     console.log("dont irani");
// }

// var age = 15;
// if (age < 5) {
//     console.log("baby");
// } else if (age < 12) {
//     console.log("child");
// } else if (age < 20) {
//     console.log("teenager");
// } else {
//     console.log("none");
// }

// var students = [
//     { name: "amir", score: 1 },
//     { name: "negar", score: 18 },
//     { name: "maryam", score: 1 },
// ];

// var sumScore = students[0].score + students[1].score + students[2].score;

// console.log(sumScore);

// if (sumScore >= 50) {
//     console.log("allow");
// } else if (sumScore > 20) {
//     console.log("test");
// } else {
//     console.log("dont allow");
// }

// var age = 15;
// var allow =
//     age > 18 ? console.log("allow") : console.log("dont allow");

// console.log(age>18 ? "allow" : "not allow")

// var isMember = true;
// console.log(isMember ? "ok" : "nok");

// var country = "iran";
// var city = "teh";

// console.log(
//     country === "iran"
//         ? city === "isf"
//             ? "iran, isf"
//             : "iran but not isf"
//         : "not iran",
// );

// if(){

// }else if(){

// }else if(){

// }else{

// }

// var x = 2;
// switch (x) {
//     case 0:
//         console.log("OFF");
//         break;
//     case 1:
//         console.log("ON");
//         break;
//     default:
//         console.log("NONE");
// }

/**
 * 1. check if a number is odd or even
 * 2. have a cart which is an array of 3 products. if products sum is more than 100$ offer a discount
 * 3. use switch/case to check if the weakday is 3 or 4 print "soon weakend", 5 or 6 print "weakend" and
 *  else print "looking for weakend"
 */

let age = 8;
switch (true) {
    case age < 5:
        console.log("baby");
        break;
    case age < 12:
        console.log("child");
        break;
    default:
        console.log("none");
}
