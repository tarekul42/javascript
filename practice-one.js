// function helloUniverse(){
// //complete your code 
// //Must return
//   console.log("Hello Universe!! Welcome me to JS World!!!");
//   return;
// }
// helloUniverse();

// function findLeapYear(arrOfYears){
//     //write your code here
//     //don't forget to write return
//     // var new_array = [2023, 2024, 2025, 2028, 2030];
      
//       if (findLeapYear % 4 == 0) {
//         return "This is leap year";
//       }
//       return;
//     }
//     findLeapYear(2023, 2024, 2025, 2028, 2030);

    // function findLeapYear(arrOfYears){
    //     var leapYear = arrOfYears % 2 ;
    //     if(leapYear = 0){
    //         return true;
    //     }
    //     return true;
    // }
    // findLeapYear(2020);


    // function findLeapYear(arrOfYears){
    //     //write your code here
    //     var Years = arrOfYears % 4;
    //     if(Years === 0){
    //         return arrOfYears;
    //     }
    //     // else{
    //     //     return false;
    //     // }
    //     //don't forget to write return
    //     }
    //     var leapYearIs = findLeapYear(2020);
    //     console.log(leapYearIs)


        // function findLeapYear(arrOfYears){
        //   for(var i = 0; i<arrOfYears.length ; i++){
        //     var Years = arrOfYears % 4;
        //     if(Years === 0){
        //         return arrOfYears;
        //     }
        //   }
        // }
        // var arrOfYears = [2023,2024,2025,2028,2030];
        // // var leapYearIs = findLeapYear(2020);
        // // console.log(leapYearIs)
        // findLeapYear(arrOfYears.);


        // function findLeapYear(arrOfYears){
        //     // var arrOfYears = [2023,2024,2025,2028,2030];
        //     // for(var i = 0; i<arrOfYears.length ; i++){}
        //     var Years = arrOfYears % 4;
        //     if(Years === 0){
        //         return arrOfYears;
        //     }
        // }
        
        // for(var i = 0; i<arrOfYears.length ; i++){
        //     // console.log(arrOfYears[i])
        //     var leapYearIs = findLeapYear(2020);
        //     console.log(arrOfYears[i])
        // }

// function yearsForLoop(years){
//     var arrOfYears = [2023,2024,2025,2028,2030]
//     for(var i = 0; i<arrOfYears.length ; i++){
//         console.log(arrOfYears[i])
//     }
// }
        
        // var arrOfYears = [2023,2024,2025,2028,2030]
        // for(var i = 0; i<arrOfYears.length ; i++){
        //     console.log(arrOfYears[i])
        // }


        function findLeapYear(arrOfYears){
            var leapYear = []
            for(var i=0;i<arrOfYears.length;i++){
                let year = arrOfYears[i]
                if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                    leapYear.push(year)
                }
            }
            return leapYear;
        }
        var leapYearIs = findLeapYear([2023,2024,2025,2028,2030]);
        console.log(leapYearIs)
        

        // var arrOfYears = [2023,2024,2025,2028,2030]
        // for(var i = 0; i<arrOfYears.length ; i++){
        //     console.log(arrOfYears[i])
        // }