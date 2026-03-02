// Lab5-2
// Task 2
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => {
    return a + b;
};
const multiply: Operation = (a, b) => {
    return a * b;
};
console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));
