//Task 1
function greetUser(name: string, title: string = "Mr./Ms."): string {
    return "Hello, " + title + " " + name + "!";
}
console.log(greetUser("Raju"));
console.log(greetUser("Raju", "Dr."));