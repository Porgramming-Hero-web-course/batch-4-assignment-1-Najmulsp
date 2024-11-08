"use strict";
// Problem 8:
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
{
    const validateKeys = (obj, keys) => {
        return keys.every(key => key in obj);
    };
    const person = { age: 25, email: "lablu@example.com" };
    const result = validateKeys(person, ["name", "age"]);
    console.log(result);
}