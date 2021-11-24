"use strict";

let numberOfFilms;



function start() {
    numberOfFilms = +prompt("Скольк фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скольк фильмов вы уже посмотрели?", '');
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


function rememberFilms(){
    for (let i = 0; i < 1; i++){
        const   a = prompt('Последний фильм?', ''),
                b = +prompt('Ваша оценка?', '');
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
        // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 символов то
        personalMovieDB.movies[a] = b;
        console.log("Done!");
        } else {
            console.log("Error");
            i--;
        }
    }
}
rememberFilms();

function detectLevel(){
    if (personalMovieDB.count < 10){
        console.log("Мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Классический задрот");
    } else if (personalMovieDB.count >= 30){
        console.log("Ёбаный задрот");
    } else {
        console.log("Миша, мы всё просрали!");
    }
}
detectLevel();



function showDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showDB(personalMovieDB.privat);


function yourGenres () {
    for (let i = 1; i <= 3; i++){

        let answer = +prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (answer != null && answer != '' && !isNaN(answer)){
          personalMovieDB.genres[i - 1] = answer;
        } else {
            i--;
        }
         
    }
}
yourGenres();



// for (let i = 0; i < 1; i++){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//     // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 символов то
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//     } else {
//         console.log("Error");
//         i--;
//     }
// }
// let x = 0;
// while (x < 1){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//     // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 символов то
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//     } else {
//         console.log("Error");
//         x--;
//     }
//     x++;
// }
// let x = 0;
// while (x < 1){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     (a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b : x--, 
//     console.log("Error");
//     x++;
// }