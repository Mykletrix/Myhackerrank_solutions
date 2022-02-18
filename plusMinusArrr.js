'use strict'
// const plusMinus = (arr) => {
//  let pos = 0; 
//  let neg = 0; 
//  let zero = 0;
//  const ratio = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     /*if (arr[i] > 0) {
// //         pos += 1;
// //        ratio.push(pos/arr.length);
// //     } */
// //    console.log('as', i);
// //     if (arr[i] < 0) {
// //         neg += 1;
// //         console.log('neg', neg);
// //         ratio.push(neg/arr.length);
// //     } 
// //     /*if (arr[i] == 0) {
// //         zero += 1;
// //         ratio.push(zero/arr.length);
// //     }*/ 
// //   }
// //   return ratio;
// // }
// plusMinus([7,-3,-8,4,0,-5,6]);


function plusMinus(arr) {
  // Write your code here
let pos = 0, neg = 0, zero = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) { 
      pos += 1;
  }
  if (arr[i] < 0) {
      neg += 1;
  }
  if (arr[i] === 0) {
      zero += 1;
  }
 
}
return `${(pos/arr.length).toFixed(6)}\n${(neg/arr.length).toFixed(6)}\n${(zero/arr.length).toFixed(6)}`;
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));