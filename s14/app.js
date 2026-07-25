// var arr1 = [5, 3, 2, ["iman", "amir"]];
// console.log(arr1[3][1]);

// var arr2 = ["aria", [7, 2, [false, true, null], 3]];
// console.log(arr2[1][2][1]);

var user = {
    firstName: "mohammad",
    lastName: "khoddami",
    age: 30,
    address: {
        country: "iran",
        city: "isfahan",
    },
    hasCar: true,
    job: ["teacher", "dev"],
};

// console.log(user.firstName);
// console.log(user.address.country);
// console.log(user.address.city);
// console.log(user.job[1]);

// console.log(user["firstName"]);
// console.log(user["address"]["city"]);

var store = {
    name: "Tech Store",
    address: {
        city: "isfahan",
        postalCode: "521458774",
    },
    owner: user,

    category: [
        {
            name: "laptop",
            products: [
                {
                    name: "zbook-7421",
                    brand: "hp",
                    stock: 2,
                    price: 1000,
                },
                {
                    name: "lenovo-4152",
                    brand: "lenovo",
                    stock: 5,
                    price: 1500,
                },
            ],
        },
        {
            name: "mobile",
            products: [
                {
                    name: "iphone17",
                    brand: "apple",
                    stock: 10,
                    price: 700,
                },
            ],
        },
    ],
};

// console.log(store.owner.address.city);
// console.log(store.address.postalCode);

// console.log(
//     store.category[0].products[0].name,
//     store.category[0].products[0].price,
//     "$",
// );

// console.log(store.category[1].products[0].stock);

// restaurant -> name / menu -> category / item

var restaurant = {
    name: "x",
    address: {
        city: "isfahan",
        postalCode: "51515151",
    },
    menu: [
        {
            category: "fastfood",
            item: [
                {
                    name: "pizza",
                    item: [
                        {
                            name: "pizza1",
                            ingrediants: "cheese, bread, tomato",
                            price: 10,
                        },
                        {
                            name: "pizza2",
                            ingrediants: "chjdnvkfn",
                            price: 11,
                        },
                    ],
                },
                {
                    name: "hotdog",
                    item: [
                        {
                            name: "hotdog1",
                            ingrediants: "lfdldknf",
                            price: 8,
                        },
                    ],
                },
            ],
        },
        {
            category: "irani",
            item: [
                {
                    name: "kebab",
                    item: [
                        {
                            name: "kebab1",
                            ingrediants: "vllnfdkjnfdkdnf",
                            price: 12,
                        },
                    ],
                },
            ],
        },
    ],
};

// console.log(restaurant.menu[0].item[0].item[1].price);

// var a = 2;
// var b = 3;
// var c = a + b;
// var d = a - b;
// console.log(c);
// console.log(d);

// var a = 10;
// var b = "r";
// var c = a - b;
// console.log(c);

// var a = 10;
// var b = 3;
// var c = a % b;
// console.log(c);

var a = 10;
var b = 3;
// console.log(b);
// b = a - b;
//b += a; //b=b+a
// b *= a; //b=b*a;
// console.log(b ** 3);

// console.log(100 + 50 * 3);
// console.log((100 + 50) * 3);

//comparison operator:
// console.log("4" === "4");

// console.log(3 != "3");

// console.log(5 >= 7);

// var userAge = 20;
// var user = {
//     name: "arman",
//     age: 16,
// };
// console.log(user.age > 18);

// logical operator: && (and) || (or)
var hasCar = true;
var hasHome = false;
var is18 = true;
// console.log(hasCar && hasHome && is18);
// console.log(hasCar || hasHome || is18);

// console.log(0 || null || undefined);

// console.log(Boolean("null"));

// console.log(typeof is18);
var arr = [15, 2, 4];
console.log(typeof arr);
