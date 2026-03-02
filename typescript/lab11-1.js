//Lab11-1
// interface Student {
//   name: string;
//   marks: number;
// }
// interface StudentList {
//   [index: number]: Student;
// }
// const students: StudentList = [
//   { name: "Ravi", marks: 85 },
//   { name: "Anu", marks: 92 },
//   { name: "Kiran", marks: 78 },
// ];
// students.forEach((student) => {
//   console.log(`Name: ${student.name}, Marks: ${student.marks}`);
// });
var students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];
students.forEach(function (student) {
    console.log("Name: " + student.name + ", Marks: " + student.marks);
});
