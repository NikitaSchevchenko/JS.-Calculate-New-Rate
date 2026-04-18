'use strict'

/**
 * 
 * @param {number} winnerRating - Поточний рейтинг переможця (>= 0)
 * @param {number} loserRating - Поточний рейтинг cуперника(>= 0)
 * @returns {number} -Новий рейтинг переможця (округлений до 0.1)
 */
function calculateRating(winnerRating,loserRating){
    if (
        typeof winnerRating !== "number" ||
        typeof loserRating !== "number" ||
        Number.isNaN(winnerRating) ||
        Number.isNaN(loserRating) ||
        winnerRating < 0 ||
        loserRating < 0
      ){
        return NaN;
    }

    let newWinnerRating;
    if(winnerRating===0){
        newWinnerRating=loserRating;
    }
    else if(loserRating===0){
        newWinnerRating=winnerRating;
    }
    else if(loserRating>winnerRating){
        newWinnerRating=winnerRating+(loserRating-winnerRating+5)/3;
    }
    else {
        const ratingDifference=winnerRating-loserRating
        if(ratingDifference<=2){
            newWinnerRating=winnerRating+2;
        }
        else if(ratingDifference<20){
            newWinnerRating=winnerRating+1;
        }
        else{
            newWinnerRating=winnerRating;
        }
    }

    return Number(newWinnerRating.toFixed(1));
}

let winnerRating=0;
let loserRating=12;
console.log(calculateRating(winnerRating,loserRating))