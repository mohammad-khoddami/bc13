var categories = [];

var products = JSON.parse(localStorage.getItem("products")) || [];

var nameInput = document.getElementById("product-name");
var categoryInput = document.getElementById("product-category");
var priceInput = document.getElementById("product-price");
var quantityInput = document.getElementById("product-quantity");

var tableBody = document.getElementById("table-body");
var select = document.getElementById("select-category");
var filterName = document.getElementById("filter-name");
var addBtn = document.getElementById("add-btn");

var editItem = null;

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
                <td class="table-action"><button onclick='handleEdit(${i})'>Edit</button><button onclick='handleDelete(${i})'>Delete</button></td>
            </tr>`;
        }
    }
    tableBody.innerHTML = tableRow;
}

function printCategory() {
    var options = "<option value='all'>All</option>";
    for (var i = 0; i < categories.length; i++) {
        var isSelect = categories[i] === select.value ? "selected" : "";
        options += `<option value=${categories[i]} ${isSelect}>${categories[i]}
        </option>`;
    }
    select.innerHTML = options;
}

function handleAdd(e) {
    e.preventDefault();

    var name = nameInput.value.trim();
    var category = categoryInput.value.trim();
    var price = priceInput.value;
    var quantity = quantityInput.value;

    if (!name || !category || !price || !quantity) {
        alert("Fill the form");
    }

    var foundName = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.trim().toLowerCase() === name.toLowerCase()) {
            foundName = true;
        }
    }

    var foundCat = false;
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].trim().toLowerCase() === category.toLowerCase()) {
            foundCat = true;
        }
    }

    if (!foundName) {
        var catLength = categories.length;
        if (!foundCat) {
            categories[catLength] = category;
            printCategory();
        }
        if (editItem === null) {
            products[products.length] = {
                name,
                category: categories[catLength],
                price,
                quantity,
            };
        } else {
            products[editItem].name = name;
            products[editItem].category = category;
            products[editItem].price = price;
            products[editItem].quantity = quantity;
            editItem = null;
            addBtn.innerText = "Add";
        }
        nameInput.value = "";
        categoryInput.value = "";
        priceInput.value = "";
        quantityInput.value = "";
    } else {
        alert("product exist");
    }

    updateStorage();
    print();
}

function handleFilterByCategory() {
    print({ category: select.value, name: filterName.value });
}

function handleFilterByName() {
    print({ category: select.value, name: filterName.value });
}

function handleDelete(index) {
    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (i !== index) {
            newProducts[newProducts.length] = products[i];
        }
    }

    products = newProducts;
    updateStorage();
    print();
}

function handleEdit(index) {
    nameInput.value = products[index].name;
    categoryInput.value = products[index].category;
    priceInput.value = products[index].price;
    quantityInput.value = products[index].quantity;
    editItem = index;
    addBtn.innerText = "Edit";
}

function updateStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

print();
printCategory();
