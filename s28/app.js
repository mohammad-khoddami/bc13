// const car1 = {
//     name: "camery",
//     brand: "toyota",
//     color: ["red", "white", "black"],
// };
// const car2 = car1;
// car2.name = "land crose";
// console.log(car1);
// console.log(car2);

// const car2 = Object.assign({}, car1);
// car2.name = "land crose";
// console.log(car1);
// console.log(car2);

// const car2 = { ...car1 }; //spread or rest
// car2.name = "land crose";
// console.log(car1);
// console.log(car2);

// const car3 = {
//     speed: 220,
// };

// const car4 = { ...car1, ...car3 };
// console.log(car4);

// const cars1 = ["toyota", "suntafe", "207"];
// const cars2 = cars1;
// cars2[1] = "samand";
// console.log(cars1);
// console.log(cars2);

// const cars2 = [...cars1];
// cars2[1] = "samand";
// console.log(cars1);
// console.log(cars2);

// const user = {
//     name: "bahram",
//     age: 32,
// };

// const address = {
//     country: "Iran",
//     city: "tehran",
// };

// const newUser = {
//     ...user,
//     ...address,
// };
// console.log(newUser);

// const user2 = { ...user, name: "amir" };
// console.log(user2);

// class -> object oriended programming
// const car = {
//     name: "camery",
//     brand: "toyota",
// };

// const car2 = {
//     name: "camery2",
//     brand: "toyota2",
// };

// class Car {
//     constructor(name, brand, speed) {
//         this.name = name;
//         this.brand = brand;
//         this.speed = speed;
//     }

//     displayCar() {
//         console.log(`this car is ${this.name} ${this.brand}`);
//     }

//     displayCarSpeed() {
//         console.log(`max speed: ${this.speed}`);
//     }
// }

// const car1 = new Car("camery", "toyota", 200);
// const car2 = new Car("camery2", "toyota2", 300);
// const car3 = new Car("camery3", "toyota3", 180);

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.displayCar();
// car2.displayCar();
// car3.displayCarSpeed();

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     calcTax(tax) {
//         return this.price + this.price * tax;
//     }
// }

// const mobile1 = new Product("mobile1", 100000000);
// const mobile1FinalPrice = mobile1.calcTax(0.01);
// console.log(mobile1FinalPrice);

// const now = new Date("1970-01-01 3:31");
// console.log(now.get());
//timestamp: 1970-01-01
// const ts = Date.now();
// const ts = now.getTime();
// console.log(ts);

// const now = new Date();
// console.log(now.toLocaleString("en-US-u-ca-persian"));

// console.log("Wait ... ");

// const timeout = setTimeout(timeUp, 5000);

// function timeUp() {
//     console.log("Time is up");
//     clearTimeout(timeout);
// }

// let count = 1;
// const interval = setInterval(displayHello, 1000);

// function displayHello() {
//     console.log("Hello");
//     count += 1;
//     if (count === 10) clearInterval(interval);
// }

//pagination
