"use strict";

const numberOfFilms = +prompt("Скольк фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const answerMovies = prompt('Последний фильм?', ''),
      answerMoviesRate = prompt('Ваша оценка?', ''),
      answerActors = prompt('Актёр', ''),
      answerActorsRate = prompt('Ваша оценка?', '');

personalMovieDB.movies[answerMovies] = answerMoviesRate;
personalMovieDB.actors[answerActors] = answerActorsRate;

console.log(personalMovieDB);