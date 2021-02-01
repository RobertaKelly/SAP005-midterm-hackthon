import movieGenres from './config.js'

let imgBaseUrl = 'https://image.tmdb.org/t/p/w200';
let imgSrc = '';
let api = movieGenres.data;


const getPoster = () => {
  return fetch(movieGenres.actionNfx)
    .then(response => response.json())
    .then(json => json.results[0].poster_path);
}

getPoster().then(posterPath => {
  root.innerHTML = '';
  imgSrc = imgBaseUrl + posterPath;

  for (let imgSrc of api) {
    let cards = document.createElement('div')
    cards.className = 'div-filha';
    cards.innerHTML += `
    <img src='${imgSrc}'>
  `
    cards.appendChild(root);
  }
})
getPoster();
