//Lab11-2
type PointType = {
    x: number;
    y: number;
};

interface PointInterface {
    x: number;
    y: number;
}

function printPoint(point: PointType | PointInterface): void {
    console.log("X: " + point.x + ", Y: " + point.y);
}

const pt1: PointType = { x: 5, y: 10 };
const pt2: PointInterface = { x: 15, y: 20 };

printPoint(pt1);
printPoint(pt2);
