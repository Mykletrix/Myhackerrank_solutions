'use strict'
    
function miniMaxSum(input) {
    let minElem = 0, maxElem = 0, sum = 0;
    minElem = input[0];
    maxElem = minElem;
    sum = minElem;

    for (let i = 1; i < input.length; i++) {
        sum += input[i];
        if (input[i] < minElem) {
          minElem = input[i];
        }
        if (input[i] > maxElem) {
          maxElem = input[i];
          //console.log(maxElem); 
        }
    }
    let minresult = sum - maxElem;
    let maxresult = sum - minElem;
    console.log(minresult, maxresult);
}
miniMaxSum([1,2,3,4,5]  );