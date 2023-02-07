// function myNumbers(numbers){
//     let allNumber = [];
//     for(let i=0; i<numbers.length; i++){
//         let number = numbers[i];
//         if(numbers>0){
//             number.push(allNumber);
//         }
//     }
//     return numbers;
// }
// var allOfNumbers = myNumbers(50, 60, 70, 80, 90, 100, -80, -90, 199, 198, 100);
// console.log(allOfNumbers);


// function bestFriend(friend){
//     var bigNameFriend = [];
//     for ( let i=0; i<friend.length; i++){
//         var friends = friend{
//             bigNameFriend = friends;
//         };
//     };
//     return bigNameFriend;
// }
// var bestFriendIs = bestFriend (50, 60, 70, 80, 90, 100, -80, -90, 199, 198, 100);
// console.log(bestFriendIs);




// function positive(numbers){
//     let positiveNumber = [];
//     for (let i=0; i<numbers.length; i++){
//         let number = numbers[i];
//         if(number > 0){
//             positiveNumber.push(number);
//         }
//         else{
//             break;
//         }
//     };
//     return positiveNumber;
// }
// var myArray = positive([50, 60, 70, 80, 90, 100, -80, -90, 199, 198, 100]);
// console.log(myArray);


function positive(numbers){
    let positiveNumber = [];
    for(let i=0; i<numbers.length; i++){
        let number = numbers[i];
        if(number > 0){
            positiveNumber.push(number)
        }
        else{
            break;
        };
    };
    return positiveNumber;
}
var myArray = positive([90, 92, 07, -2, 78, 67, 13])
console.log(myArray)