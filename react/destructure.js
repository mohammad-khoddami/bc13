const user = {
    firstname: "aria",
    lastname: "zamani",
};

const { firstname, lastname } = user;

// console.log(firstname, lastname);

const arr = [1, 2, 3];
// const one = arr[0];
// const two = arr[1];

const [, , y] = arr;
console.log(y);
