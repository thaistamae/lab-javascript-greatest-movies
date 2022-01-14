// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((element) => {
  return element["director"];
})
return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredDirector = moviesArray.filter((element) => {
     return element["director"] === "Steven Spielberg";  
    })
 
  const filter = "Drama";
  const filteredGenre = filteredDirector.filter((item) => {
    return (item.genre.indexOf(filter) >= 0);
  })
  return filteredGenre.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArray){
  if(someArray.length === 0){
    return 0;
  }else{
    const grades = someArray.reduce((acc, currentNumber) => {
    return acc + currentNumber.score;
    }, 0)
    return Math.round((grades / someArray.length) * 100)/100
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
    const filteredGenre = moviesArray.filter((item) => {
    return (item.genre.indexOf("Drama") >= 0);
  })

  const gradesDrama = filteredGenre.reduce((accumulated, currentNumber) => {
    return accumulated + currentNumber.score;
  },0)

  return Math.round((gradesDrama / filteredGenre.length) * 100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArray) {
  someArray.sort((a, b) => {
    return a.year - b.year;
  })
  return someArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArray) {
  someArray.sort((a, b) => {
  if(a.title > b.title){
    return 1
  }else if(a.title < b.title) {
    return -1
  }else{
    return 0
  }
  })

  let newArray = [];
  for(let i = 0; i < 20; i++){
    if(i > someArray.length - 1){
      continue;
    }else{
    newArray.push(someArray[i].title)
    }
  }
  return newArray

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
