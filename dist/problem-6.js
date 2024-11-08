"use strict";
// Problem 6:
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
{
    const updateProfile = (profile, updates) => {
        return Object.assign(Object.assign({}, profile), updates);
    };
    const myProfile = { name: "Dablu", age: 29, email: "dlice@gmail.com" };
    const result = updateProfile(myProfile, { age: 56 });
    console.log(result);
}
