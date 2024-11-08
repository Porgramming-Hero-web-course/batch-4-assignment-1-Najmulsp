"use strict";
// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
        }
        else {
            return shape.width * shape.height;
        }
    };
    const result = calculateShapeArea({ shape: "circle", radius: 5 });
}
// console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
// Output: 24
