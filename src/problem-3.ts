// Problem 3:

// Create a TypeScript function called `countWordOccurrences` 
 //that accepts a sentence (string) and a word (string). The function should 
// return the number of times the word appears in the sentence, ignoring 
// case. Use the simple sentence without punctuation as input.



{
const  countWordOccurrences = (sentence: string, word: string): number => {
     const splitedWords = sentence.toLowerCase().split(" ");
     return splitedWords.filter(splitedWord => splitedWord === word.toLowerCase()).length;
   }
   
const result = countWordOccurrences("my name is hasan and my friends name is bablu but people called him the name as hablu", "name")

  
  }