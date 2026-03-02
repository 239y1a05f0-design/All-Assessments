class Student {
  public name: string;
  private rollNo: number;

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }

  showRollNo() {
    console.log(this.rollNo);
  }
}
const student2 = new Student("Bindusree", 301);

console.log(student2.name);

student2.showRollNo();