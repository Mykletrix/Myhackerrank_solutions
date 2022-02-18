'use strict'

const compareTriplets = (a, b) => {
  // To compare corresponding elements of two arrays, the greater of which gains one point advantage.
  // declare an array score and assign initial values [0, 0]
  // create a for loop and iterate
  // compare elements in a and b using a conditional statement
  // corresponding increments to score [] using counter++
  // return score 

  let score = [0, 0];
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        score[0]++;
      } else if(a[i] < b[i]) {
        score[1]++;
      }
  }
  return score;
}