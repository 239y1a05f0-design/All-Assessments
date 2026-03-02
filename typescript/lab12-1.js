var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILED";
})(Status || (Status = {}));
function printStatusOrDirection(value) {
    console.log("Value:", value);
}
var dir = Direction.Right;
var stat = Status.SUCCESS;
printStatusOrDirection(dir);
printStatusOrDirection(stat);
// Get element as unknown
var element = document.getElementById("username");
// Type assertion
var inputBox = element;
function printInputValue() {
    console.log("Username:", inputBox.value);
}
printInputValue();
