//Lab8-1
type Point = {
  x: number;
  y: number;
};
function printPoint(point: Point): void {
  console.log(`x: ${point.x}, y: ${point.y}`);
}
printPoint({ x: 10, y: 20 });
