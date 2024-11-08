"use strict";
// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
{
    const removeDuplicates = (myArray) => {
        return [...new Set(myArray)];
    };
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 3, 6]);
}
