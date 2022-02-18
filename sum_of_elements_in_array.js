'use strict'

const  sumOfElementsInArray = (arr) => {
  // steps ------
  // declare a variable 'sum' to initial value '0'
  // create a for loop and iterate
  // assign iterated value to 'sum' 
  // return sum
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }return sum;
}


