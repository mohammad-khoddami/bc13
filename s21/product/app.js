var categories = ["electronics", "fashion"];

var products = [
    { name: "Laptop", category: categories[0], price: 1000, quantity: 10 },
    { name: "Shoes", category: categories[1], price: 80, quantity: 15 },
    { name: "iphone", category: categories[0], price: 625, quantity: 25 },
];

var tableBody = document.getElementById("table-body");
var select = document.getElementById("select-category");
var filterName = document.getElementById("filter-name");

function print(filter = { category: "all", name: "" }) {
    var tableRow = "";
    for (var i = 0; i < products.length; i++) {
        if (
            (products[i].category === filter.category ||
                filter.category === "all") &&
            (!filter.name ||
                products[i].name
                    .trim()
                    .toLowerCase()
                    .startsWith(filter.name.trim().toLowerCase()))
        ) {
            tableRow += `<tr>
                <td>${products[i].name}</td>
                <td>${products[i].category}</td>
                <td>${products[i].price}</td>
                <td>${products[i].quantity}</td>
                <td class="table-action"><button>Edit</button><button>Delete</button></td>
            </tr>`;
        }
    }
    tableBody.innerHTML = tableRow;

    var options = "<option value='all'>All</option>";
    for (var i = 0; i < categories.length; i++) {
        var isSelect = categories[i] === filter.category ? "selected" : "";
        options += `<option value=${categories[i]} ${isSelect}>${categories[i]}
        </option>`;
    }
    select.innerHTML = options;
}

function handleAdd(e) {
    e.preventDefault();

    var name = document
        .getElementById("product-name")
        .value.trim()
        .toLowerCase();
    var category = document
        .getElementById("product-category")
        .value.trim()
        .toLowerCase();
    var price = document.getElementById("product-price").value;
    var quantity = document.getElementById("product-quantity").value;

    if (!name || !category || !price || !quantity) {
        alert("Fill the form");
    }

    var foundName = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.trim().toLowerCase() === name) {
            foundName = true;
        }
    }

    var foundCat = false;
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].trim().toLowerCase() === category) {
            foundCat = true;
        }
    }

    if (!foundName) {
        var catLength = categories.length;
        if (!foundCat) {
            categories[catLength] = category;
        }
        products[products.length] = {
            name,
            category: categories[catLength],
            price,
            quantity,
        };
    } else {
        alert("product exist");
    }
    print();
}

function handleFilterByCategory() {
    print({ category: select.value, name: filterName.value });
}

function handleFilterByName() {
    print({ category: select.value, name: filterName.value });
}

print();
