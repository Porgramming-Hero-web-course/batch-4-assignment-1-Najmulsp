// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


const  sumArray = (inputArray: number[]): number => {
     return inputArray.reduce((total, singleValue) => total + singleValue, 0);
   }
   
const result =  sumArray([8, 2, 3, 4, 6])
console.log(result)