
// Problem 8:
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

{
const  validateKeys = <MyType extends object>(obj: MyType, keys: (keyof MyType)[]): boolean => {
  return keys.every(key => key in obj);
}

const person = { name: "Lablu", age: 25, email: "lablu@example.com" };

const result = validateKeys(person, ["name", "age"]);

console.log(result);
} 
