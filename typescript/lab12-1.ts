enum Direction {
  Up,
  Down,
  Left,
  Right
}
enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}
type StatusOrDirection = Direction | Status;

function printStatusOrDirection(value: StatusOrDirection): void {
  console.log("Value:", value);
}

let dir: Direction = Direction.Right;
let stat: Status = Status.SUCCESS;

printStatusOrDirection(dir);
printStatusOrDirection(stat);

// Get element as unknown
const element = document.getElementById("username") as unknown;

// Type assertion
const inputBox = element as HTMLInputElement;

function printInputValue(): void {
  console.log("Username:", inputBox.value);
}

printInputValue();

