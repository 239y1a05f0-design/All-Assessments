var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log(this.rollNo);
    };
    return Student;
}());
var student2 = new Student("Bindusree", 301);
console.log(student2.name);
student2.showRollNo();
