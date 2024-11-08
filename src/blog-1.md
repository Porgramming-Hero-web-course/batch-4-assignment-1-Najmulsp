
#### The Significance of Union and Intersection Types in TypeScript
TypeScript is a popular tool for building enterprated applications, known for its powerful type system that helps catch errors in compile time. Two key features of this system are union types and intersection types.

# Today we will learn about union types and intersection types.

## What Are Union Types?
Union types allow a variable to accept multiple types, providing flexibility without needing separate variables for each type. With Union Types (|) a variable can be one of several types. It is use as giving more options to take , supoose if among more option if you get one then take it.

Example:

let value: string | number;
value = 'Hello';  // Valid
value = 42;       // Valid
value = true;     // Error: Type 'boolean' is not assignable
In this example, value can be either a string or a number but not a boolean.

## Use Cases for Union Types:
Handling multiple input types: A function can accept different types of arguments. Sapose we can use when handling different types of user input etc.

Example:

function getLength(input: string | number): number {
  if (typeof input === 'string') {
    return input.length;
  }
  return input.toString().length;
}
Here, TypeScript ensures the input is either a string or a number, making the function safe.

## What Are Intersection Types?
Intersection types combine multiple types into one, meaning a variable must satisfy all the combined type requirements. With Intersection Types (&) a variable must include all specified types.

Example:

interface Person {
  name: string;
  age: number;
}

interface Worker {
  jobTitle: string;
  salary: number;
}

type Employee = Person & Worker;

const employee: Employee = {
  name: "John",
  age: 30,
  jobTitle: "Software Developer",
  salary: 5000
};
The employee must have properties from both Person and Worker.

## Use Cases for Intersection Types:
By using interfaces we can combine properties of multiple interfaces into one. When we want to use that both sides are true then we can use intersection type


## Conclusion:
Union and intersection types in TypeScript help handle complex scenarios while ensuring type safety. We can use them whenever we need such as union types for multiple possible values and intersection types for combining properties, making our TypeScript code more useful and easy.