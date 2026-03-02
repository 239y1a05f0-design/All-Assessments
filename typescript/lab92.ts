//Lab9-1
//Type Narrowing – Task 1
//Function with Union Type and Type Narrowing
function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(Math.round(value));
  }
}
formatValue("hello");
formatValue(12.6);