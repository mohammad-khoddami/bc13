const recipeDiv = document.getElementById("recipe-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const tagSelect = document.getElementById("tags");

getRecipes();

async function getRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const result = await response.json();

        printRecipes(result.recipes);
        getTags();
    } catch (err) {
        console.log(err);
    }
}

function printRecipes(recipeList) {
    const divs = recipeList.map((item) => {
        return `
        <div>
            <img src="${item.image}"/>
            <p>${item.name}</p>
        </div>`;
    });

    recipeDiv.innerHTML = divs.join("");
}

searchInput.addEventListener("input", handleSearch);

async function handleSearch() {
    const search = searchInput.value;

    try {
        const response = await fetch(
            `https://dummyjson.com/recipes/search?q=${search}`,
        );
        const result = await response.json();

        printRecipes(result.recipes);
    } catch (error) {
        console.log(error);
    }
}

async function getTags() {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/tags`);
        const result = await response.json();

        printTags(result);
    } catch (error) {
        console.log(error);
    }
}

tagSelect.addEventListener("change", getRecipeByTag);

function printTags(tags) {
    const options = tags.map((item) => {
        return `<option value="${item}">${item}</option>`;
    });
    tagSelect.innerHTML = options.join("");
}

async function getRecipeByTag() {
    const selectedTag = tagSelect.value;
    // console.log(selectedTag);
    try {
        const response = await fetch(
            `https://dummyjson.com/recipes/tag/${selectedTag}`,
        );
        const result = await response.json();
        console.log(result);
        printRecipes(result.recipes);
    } catch (error) {
        console.log(error);
    }
}
