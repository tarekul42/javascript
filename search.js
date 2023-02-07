const lyrics = 'Tumi bondho kala pakhi ami jeno ki , bosonto kale tomay bolte pari ni . kala kala sada sada';

const searchString = "PakHi"
// const doesExist = lyrics.includes("Pakhi");
// const doesExist = lyrics.includes("Pakhi");
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase( );
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase( );
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// -----------------------------------------------
// index of 

console.log(lyrics.indexOf("Kailla"));
console.log(lyrics.indexOf("Tumi"));
// 

if(lyrics.indexOf('sadda') !== -1){
    console.log("exists inside the string");
}
else{
    console.log('cannot find it');
}

// startwith
console.log(lyrics.startsWith('Tumi'));

// endswith 
const faileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

faileName.endsWith('.pdf')