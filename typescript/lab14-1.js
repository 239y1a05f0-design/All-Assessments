var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id; // allowed: assigned in constructor
        this.name = name;
    }
    return Student;
}());
// Create object
var student1 = new Student(1, "Bindu");
// Print values
console.log("ID:", student1.id);
console.log("Name:", student1.name);
// ❌ This will cause a TypeScript error
// student1.id = 2; 
// Error: Cannot assign to 'id' because it is a read-only property
