const API_KEY = 'api_key=3c54f9538dc767b9556a14287c1075b9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'


const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res=>res.json()).then(data=>{
       showMovies(data.results);
    })
}

function showMovies(data){

    main.innerHTML = ``;

    data.forEach(movie => {
        const {title, poster_path,vote_average, overview} = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}"/>
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="color">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Description</h3>
       ${overview}
      </div>
    </div>
    `   
    main.appendChild(movieEl);
        
    });

}