import movies1 from "./movies.js";

const divMovies = document.getElementById("movies");

const pTags = movies1.map((m) => `<p>${m.title}</p>`);
divMovies.innerHTML = pTags.join("");
