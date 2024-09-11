const apiKey = "d1a9623f"
const input = document.querySelector("#movie-name");
const btn = document.querySelector("#search-btn")


async function movieApi () {
 
    inputclick();   
let apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=d1a9623f`
 const res = await fetch(apiUrl + `&appid=${apiKey}`);
 const data = await res.json();


}


