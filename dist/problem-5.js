"use strict";
// Problem 5:
// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
{
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const person = { name: "wealth", age: 30 };
    const result = getProperty(person, "name");
}
