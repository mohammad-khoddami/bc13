import { handleSearch } from "./filter.js";
import print, { printGenre } from "./print.js";

printGenre();
print();

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleSearch);
