// var students = [
//     {
//         name: "ali",
//         course: ["HTML", "CSS", "JS"],
//     },
//     {
//         name: "nima",
//         course: ["C#", "ORM", "SQL", ".NET"],
//     },
//     {
//         name: "afshin",
//         course: ["Java", "python"],
//     },
// ];

// /**
//  * ali: html, css, js
//  * nima: c#, orm, sql, .net
//  * afshin: java, python
//  */
// for (var i = 0; i < students.length; i++) {
//     var text = `${students[i].name} `;
//     for (var j = 0; j < students[i].course.length; j++) {
//         text += `${students[i].course[j]}${j === students[i].course.length - 1 ? "" : " & "}`;
//         // text +=
//         //     students[i].course[j] +
//         //     (j === students[i].course.length - 1 ? "" : " & ");
//     }
//     console.log(text);
// }

// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`); // 1 * 1 = 1
//     }
// }

// var name = "nima";
// var age = 20;
// // nima is 20;
// // console.log(name + " is " + age);
// console.log(`${name} is ${age}`);

// var students = [
//     {
//         name: "nima",
//         score: [12, 15, 19, 10],
//     },
//     {
//         name: "ali",
//         score: [14, 17, 20, 13],
//     },
//     {
//         name: "amir",
//         score: [17, 16, 19, 17],
//     },
// ];

// function average(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     var avg = sum / numbers.length;
//     return avg;
// }

// /**
//  * nima: 15
//  * ali: 14
//  */

// function formatter(users) {
//     var text = "";
//     for (var i = 0; i < users.length; i++) {
//         var avg = average(users[i].score);
//         text += users[i].name + " " + avg + "\n";
//     }
//     return text;
// }

// function bestStudent(users) {
//     var best = { name: "", score: null };
//     for (var i = 0; i < users.length; i++) {
//         var avg = average(users[i].score);
//         if (best.score === null || avg > best.score) {
//             best.name = users[i].name;
//             best.score = avg;
//         }
//     }
//     return best;
// }

// console.log(formatter(students));
// console.log(bestStudent(students));

// DOM -> Document Object Model
