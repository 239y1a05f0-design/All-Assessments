//Lab10-1
interface User {
  readonly id: number;
  name: string;
  age?: number; // optional
}
const user: User = {
  id: 1,
  name: "Bindu",
  age: 22,
};
console.log(user.id);
console.log(user.name);
console.log(user.age);