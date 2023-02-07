function paperRequirements(firstBook, secondBook, thirdBook ){
    var paperForFirstBook = firstBook*100;
    var paperForSecondBook = secondBook*200;
    var paperForThirdBook = thirdBook*300;
    var paperNeed = paperForFirstBook+paperForSecondBook+ paperForThirdBook;
    return paperNeed;
}
console.log(paperRequirements(1, 1, 1));